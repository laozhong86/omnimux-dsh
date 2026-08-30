    const STAGE_ID = "omnimux-market";
    const PRODUCT_STAGE_EVENT = "dsh-product-stage";

    function conversationBox() {
      if (typeof window === "undefined") return null;
      let left = 0;
      try {
        // 1. Try finding the center column surface (its left boundary is exact)
        const center = document.querySelector('.dshDesktopCenterSurface, [class*="centerCol"], [class*="CenterCol"], [class*="mainContent"], main');
        if (center) {
          const r = center.getBoundingClientRect();
          if (r.left > 0 && r.left < window.innerWidth - 100) {
            left = r.left;
          }
        }
        // 2. Try finding the desktop or web sidebar column
        if (!left) {
          const sidebar = document.querySelector('.dshDesktopSidebarSurface, [class*="sidebarCol"], [class*="SidebarSurface"], [class*="SidebarRoot"]') ||
            document.querySelector('.sh-plaza-wrap')?.closest('.dshDesktopSidebarSurface, [class*="sidebarCol"], [class*="SidebarSurface"], aside, nav');
          if (sidebar) {
            const r = sidebar.getBoundingClientRect();
            if (r.right > 0 && r.right < window.innerWidth - 100) {
              left = r.right;
            }
          }
        }
        // 3. Fallback: walk up from the trigger button to find the sidebar column
        if (!left) {
          const btn = document.querySelector('.sh-plaza-trigger');
          if (btn) {
            let p = btn.parentElement;
            while (p && p !== document.body) {
              const r = p.getBoundingClientRect();
              if (r.top <= 20 && r.left <= 10 && r.right >= 50 && r.right < window.innerWidth - 100) {
                left = r.right;
              }
              p = p.parentElement;
            }
          }
        }
      } catch {}

      if (!left || left <= 0) {
        const isCollapsed = document.querySelector('[data-sidebar-collapsed="true"], [data-collapsed="true"]') !== null;
        left = isCollapsed ? 56 : 280;
      }

      return {
        top: 0,
        left: Math.round(left),
        width: Math.max(100, Math.round(window.innerWidth - left)),
        height: Math.max(100, Math.round(window.innerHeight)),
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

    function PlazaTopSearch({ query, onQuery, onSubmit, onClear, placeholder }) {
      return h("form", {
        className: "sh-plaza-search",
        onSubmit: (e) => {
          e.preventDefault();
          if (onSubmit) onSubmit();
        },
      },
        h(SearchField, {
          stretch: true,
          value: query,
          debounceMs: 0,
          placeholder,
          onValueChange: onQuery,
          onClear: onClear || (() => onQuery("")),
        }),
      );
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
      const [tabQueries, setTabQueries] = useState({
        plugins: "",
        skills: "",
        experts: "",
        connectors: "",
      });
      const [submittedQueries, setSubmittedQueries] = useState({
        plugins: "",
        skills: "",
      });

      const currentQuery = tabQueries[tab] || "";
      const handleQueryChange = (val) => {
        setTabQueries((prev) => ({ ...prev, [tab]: val }));
      };
      const handleSubmit = () => {
        if (tab === "plugins" || tab === "skills") {
          setSubmittedQueries((prev) => ({ ...prev, [tab]: (tabQueries[tab] || "").trim() }));
        }
      };
      const handleClear = () => {
        setTabQueries((prev) => ({ ...prev, [tab]: "" }));
        if (tab === "plugins" || tab === "skills") {
          setSubmittedQueries((prev) => ({ ...prev, [tab]: "" }));
        }
      };

      const placeholder = tab === "plugins" ? tr("mkt.searchPlaceholder")
        : tab === "skills" ? tr("mkt.searchPlaceholder")
        : tab === "experts" ? tr("expert.searchPlaceholder")
        : tr("connector.searchPlaceholder");

      return h(I18nProvider, { t: tr },
        h("div", {
          className: "sh-plaza-page",
          role: "dialog",
          "aria-modal": "false",
          "aria-label": tr("plaza.title"),
          style: {
            "--stage-top": box.top + "px",
            "--stage-left": box.left + "px",
            "--stage-width": box.width + "px",
            "--stage-height": box.height + "px",
          },
        },
          h("div", { className: "sh-plaza-top" },
            h("div", { className: "sh-plaza-tabs", role: "tablist" },
              h(Button, {
                type: "button",
                role: "tab",
                variant: "ghost",
                size: "sm",
                className: "sh-plaza-tab" + (tab === "plugins" ? " on" : ""),
                "aria-selected": tab === "plugins",
                onClick: () => setTab("plugins"),
              }, tr("plaza.plugins")),
              h(Button, {
                type: "button",
                role: "tab",
                variant: "ghost",
                size: "sm",
                className: "sh-plaza-tab" + (tab === "skills" ? " on" : ""),
                "aria-selected": tab === "skills",
                onClick: () => setTab("skills"),
              }, tr("plaza.skills")),
              h(Button, {
                type: "button",
                role: "tab",
                variant: "ghost",
                size: "sm",
                className: "sh-plaza-tab" + (tab === "experts" ? " on" : ""),
                "aria-selected": tab === "experts",
                onClick: () => setTab("experts"),
              }, tr("plaza.experts")),
              h(Button, {
                type: "button",
                role: "tab",
                variant: "ghost",
                size: "sm",
                className: "sh-plaza-tab" + (tab === "connectors" ? " on" : ""),
                "aria-selected": tab === "connectors",
                onClick: () => setTab("connectors"),
              }, tr("plaza.connectors")),
            ),
            h(PlazaTopSearch, {
              query: currentQuery,
              onQuery: handleQueryChange,
              onSubmit: handleSubmit,
              onClear: handleClear,
              placeholder,
            }),
            h("span", { className: "sh-plaza-close" },
              h(IconButton, {
                variant: "ghost",
                onClick: onClose,
                "aria-label": tr("plaza.back"),
                title: tr("plaza.back"),
              }, h(IconCloseOutline16)),
            ),
          ),
          h("div", { className: "sh-plaza-body" },
            tab === "plugins" ? h(Marketplace, { t: tr, query: tabQueries.plugins, submittedQuery: submittedQueries.plugins })
              : tab === "skills" ? h(SkillPlaza, { query: tabQueries.skills, submittedQuery: submittedQueries.skills })
              : tab === "experts" ? h(ExpertPanel, { query: tabQueries.experts, onClose })
              : h(ConnectorPanel, { query: tabQueries.connectors }),
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
      const box = useConversationBox(open || everOpened);
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

      // L0 keep-alive: after first open, keep PlazaView permanently mounted and hide via display:none.
      const keep = everOpened;
      const show = open && box;
      const panel = typeof document !== "undefined" && box && (keep || show)
        ? createPortal(
          h("div", {
            className: "sh-plaza-view",
            "data-active": open ? "true" : "false",
            "aria-hidden": open ? undefined : "true",
            style: {
              display: open ? undefined : "none",
            },
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
