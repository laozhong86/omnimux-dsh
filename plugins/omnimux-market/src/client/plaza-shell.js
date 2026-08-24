    const STAGE_ID = "omnimux-market";
    const PRODUCT_STAGE_EVENT = "dsh-product-stage";

    function conversationBox() {
      if (typeof window === "undefined") return null;
      if (window.__omnimuxStage && typeof window.__omnimuxStage.readBox === "function") {
        try {
          const b = window.__omnimuxStage.readBox();
          if (b && b.width >= 100 && b.height >= 100) return b;
        } catch {}
      }
      let left = 56;
      try {
        const sidebar = document.querySelector('[data-slot="sidebar"]') ||
          document.querySelector('aside') ||
          document.querySelector('[class*="sidebar"]') ||
          document.querySelector('[class*="appFrame"] > div:first-child');
        if (sidebar) {
          const r = sidebar.getBoundingClientRect();
          if (r.right > 0 && r.right < window.innerWidth - 100) left = r.right;
        }
      } catch {}
      return {
        top: 0,
        left,
        width: Math.max(100, window.innerWidth - left),
        height: Math.max(100, window.innerHeight),
      };
    }

    function useConversationBox(active) {
      const [box, setBox] = useState(null);
      const layout = React.useLayoutEffect || useEffect;
      layout(() => {
        if (!active) {
          setBox(null);
          return;
        }
        const update = () => setBox(conversationBox());
        update();
        window.addEventListener("resize", update);
        window.addEventListener("scroll", update, true);
        return () => {
          window.removeEventListener("resize", update);
          window.removeEventListener("scroll", update, true);
        };
      }, [active]);
      return box;
    }

    function PlazaView({ t, onClose, box, active }) {
      useEffect(() => {
        ensureCss();
        if (!active) return undefined;
        const onKey = (e) => {
          if (e.key !== "Escape") return;
          e.preventDefault();
          onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
      }, [onClose, active]);
      const tr = typeof t === "function" ? t : lookup;
      const [tab, setTab] = useState("plugins");
      return h(I18nProvider, { t: tr },
        h("div", {
          className: "sh-plaza-page",
          role: "dialog",
          "aria-modal": "false",
          "aria-label": tr("plaza.title"),
          style: {
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
          },
        },
          h("div", { className: "sh-plaza-top" },
            h("div", { className: "sh-plaza-tabs", role: "tablist" },
              h("button", {
                type: "button",
                role: "tab",
                className: "sh-plaza-tab" + (tab === "plugins" ? " on" : ""),
                "aria-selected": tab === "plugins",
                onClick: () => setTab("plugins"),
              }, tr("plaza.plugins")),
              h("button", {
                type: "button",
                role: "tab",
                className: "sh-plaza-tab" + (tab === "skills" ? " on" : ""),
                "aria-selected": tab === "skills",
                onClick: () => setTab("skills"),
              }, tr("plaza.skills")),
              h("button", {
                type: "button",
                role: "tab",
                className: "sh-plaza-tab" + (tab === "experts" ? " on" : ""),
                "aria-selected": tab === "experts",
                onClick: () => setTab("experts"),
              }, tr("plaza.experts")),
              h("button", {
                type: "button",
                role: "tab",
                className: "sh-plaza-tab" + (tab === "connectors" ? " on" : ""),
                "aria-selected": tab === "connectors",
                onClick: () => setTab("connectors"),
              }, tr("plaza.connectors")),
            ),
            h("button", {
              type: "button",
              className: "sh-plaza-close",
              onClick: onClose,
              "aria-label": tr("plaza.back"),
              title: tr("plaza.back"),
            }, "×"),
          ),
          h("div", { className: "sh-plaza-body" },
            tab === "plugins" ? h(Marketplace, { t: tr })
              : tab === "skills" ? h(SkillPlaza)
              : tab === "experts" ? h(ExpertPanel, { onClose })
              : h(ConnectorPanel),
          ),
        ),
      );
    }

    function sessionListCurrent(sessions) {
      try {
        return sessions && sessions.list && typeof sessions.list.getSnapshot === "function"
          ? sessions.list.getSnapshot().current
          : undefined;
      } catch {
        return undefined;
      }
    }

    function PlazaAction({ wide, sessions, t }) {
      useEffect(() => ensureCss(), []);
      const tr = typeof t === "function" ? t : lookup;
      const [open, setOpen] = useState(false);
      const [everOpened, setEverOpened] = useState(false);
      const [hint, setHint] = useState("");
      const close = React.useCallback(() => setOpen(false), []);
      const box = useConversationBox(open || (everOpened && plazaKeepAlive));
      if (open && !everOpened) setEverOpened(true);

      useEffect(() => {
        if (!open) return;
        api("config", {}).then((d) => {
          if (typeof d.plazaKeepAlive === "boolean") plazaKeepAlive = d.plazaKeepAlive;
        }).catch(() => {});
      }, [open]);

      useEffect(() => {
        const claim = () => {
          try {
            if (window.__omnimuxStage && typeof window.__omnimuxStage.claim === "function") {
              window.__omnimuxStage.claim(STAGE_ID);
            } else {
              window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id: STAGE_ID } }));
              document.documentElement.dataset.dshProductStage = STAGE_ID;
            }
          } catch {}
        };
        const release = () => {
          try {
            if (window.__omnimuxStage && typeof window.__omnimuxStage.release === "function") {
              window.__omnimuxStage.release(STAGE_ID);
            } else {
              if (document.documentElement.dataset.dshProductStage === STAGE_ID) {
                delete document.documentElement.dataset.dshProductStage;
              }
              window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id: "" } }));
            }
          } catch {}
        };

        if (open) claim();
        else release();

        return () => {
          if (open) release();
        };
      }, [open]);

      useEffect(() => {
        const onStage = (e) => {
          const id = e instanceof CustomEvent ? e.detail?.id : undefined;
          if (id && id !== STAGE_ID && open) {
            close();
          }
        };
        window.addEventListener(PRODUCT_STAGE_EVENT, onStage);
        return () => window.removeEventListener(PRODUCT_STAGE_EVENT, onStage);
      }, [open, close]);

      useEffect(() => {
        if (!open) return;
        const list = sessions && sessions.list;
        if (!list || typeof list.subscribe !== "function") return;
        let last = sessionListCurrent(sessions);
        return list.subscribe(() => {
          const now = sessionListCurrent(sessions);
          if (now === last) return;
          last = now;
          close();
        });
      }, [open, sessions, close]);

      useEffect(() => {
        if (!open) return;
        const onPointer = (e) => {
          const node = e.target;
          if (!node || typeof node.closest !== "function") return;
          if (node.closest(".sh-plaza-page, .sh-plaza-wrap, .sh-overlay, .sh-mkt, .sh-modal")) return;
          close();
        };
        document.addEventListener("pointerdown", onPointer, true);
        return () => document.removeEventListener("pointerdown", onPointer, true);
      }, [open, close]);

      // L0 keep-alive: after first open, keep PlazaView mounted and hide with display:none.
      const keep = plazaKeepAlive && everOpened;
      const show = open && box;
      const panel = typeof document !== "undefined" && box && (keep || show)
        ? createPortal(
          h("div", {
            style: {
              display: open ? undefined : "none",
              pointerEvents: open ? "auto" : "none",
            },
            "aria-hidden": open ? undefined : "true",
          }, h(PlazaView, { t: tr, onClose: close, box, active: open })),
          document.body,
        )
        : null;

      return h(I18nProvider, { t: tr },
        h("div", { className: "sh-plaza-wrap" + (wide ? "" : " rail") },
          h("button", {
            type: "button",
            className: "sh-plaza-trigger" + (open ? " on" : ""),
            "aria-label": tr("plaza.title"),
            "aria-expanded": open,
            onClick: () => {
              if (open) {
                close();
                setHint("");
                return;
              }
              setOpen(true);
              setHint("");
            },
          },
            h(PlazaIcon),
            wide ? h("span", null, tr("plaza.title")) : null,
          ),
          hint ? h(Toast, { text: hint, onDone: () => setHint("") }) : null,
          panel,
        ),
      );
    }
