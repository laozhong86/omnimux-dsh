    const PLAZA_TAB_ID = "omnimux-market:plaza";

    function PlazaFocusBar() {
      const [focus, setFocus] = useState(() => (typeof window !== "undefined" ? window.__omnimuxWorkbench?.getFocus?.() || "split" : "split"));
      useEffect(() => {
        const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : undefined;
        if (api && typeof api.subscribe === "function") {
          return api.subscribe(() => {
            setFocus(api.getFocus?.() || "split");
          });
        }
      }, []);
      const modes = [
        { id: "chat", label: "对话" },
        { id: "split", label: "分栏" },
        { id: "gui", label: "工作台" },
      ];
      return h("div", { className: "omnimux-workbench-focus", role: "radiogroup", "aria-label": "布局" },
        modes.map((m) => h("button", {
          key: m.id,
          type: "button",
          role: "radio",
          "aria-checked": focus === m.id,
          "data-omnimux-workbench-focus": m.id,
          "data-active": focus === m.id ? "true" : undefined,
          className: "omnimux-workbench-focus-btn",
          onClick: () => {
            if (typeof window !== "undefined") {
              window.__omnimuxWorkbench?.setFocus?.(m.id);
            }
          },
        }, m.label))
      );
    }

    function PlazaTopSearch({ query, onQuery, onSubmit, onClear, placeholder }) {
      return h("div", { className: "sh-plaza-search" },
        h(SearchField, {
          value: query,
          placeholder: placeholder,
          onChange: onQuery,
          onSubmit: onSubmit,
          onClear: onClear,
          stretch: true,
        }),
      );
    }

    function PlazaView({ t, onClose, active = true, store }) {
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
        experts: "",
        connectors: "",
      });

      useEffect(() => {
        const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : undefined;
        if (!api || typeof api.attachStore !== "function" || !store) return undefined;
        api.attachStore(store);
        return () => { api.detachStore?.(store); };
      }, [store]);

      const currentQuery = tabQueries[tab] || "";
      const handleQueryChange = (val) => {
        setTabQueries((prev) => ({ ...prev, [tab]: val }));
      };
      const handleSubmit = () => {
        setSubmittedQueries((prev) => ({ ...prev, [tab]: tabQueries[tab] || "" }));
      };
      const handleClear = () => {
        setTabQueries((prev) => ({ ...prev, [tab]: "" }));
        setSubmittedQueries((prev) => ({ ...prev, [tab]: "" }));
      };

      const placeholder = tab === "plugins" ? tr("plaza.searchPlugins")
        : tab === "skills" ? tr("plaza.searchSkills")
        : tab === "experts" ? tr("plaza.searchExperts")
        : tr("plaza.searchConnectors");

      const handleClose = () => {
        const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : undefined;
        if (api && typeof api.closeTab === "function") {
          api.closeTab(PLAZA_TAB_ID);
        } else if (typeof onClose === "function") {
          onClose();
        }
      };

      return h(I18nProvider, { t: tr },
        h("div", {
          className: "sh-plaza-page",
          role: "region",
          "aria-label": tr("plaza.title"),
          "aria-hidden": active ? undefined : "true",
          style: {
            display: active ? "flex" : "none",
            position: "relative",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            overflow: "hidden",
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
            h(PlazaFocusBar),
            h("span", { className: "sh-plaza-close" },
              h(IconButton, {
                variant: "ghost",
                onClick: handleClose,
                "aria-label": tr("plaza.back"),
                title: tr("plaza.back"),
              }, h(IconCloseOutline16)),
            ),
          ),
          h("div", { className: "sh-plaza-body" },
            tab === "plugins" ? h(Marketplace, { t: tr, query: tabQueries.plugins, submittedQuery: submittedQueries.plugins })
              : tab === "skills" ? h(SkillPlaza, { query: tabQueries.skills, submittedQuery: submittedQueries.skills })
              : tab === "experts" ? h(ExpertPanel, { query: tabQueries.experts, onClose: handleClose })
              : h(ConnectorPanel, { query: tabQueries.connectors }),
          ),
        ),
      );
    }

    function PlazaAction({ wide, t }) {
      useEffect(() => ensureCss(), []);
      const tr = typeof t === "function" ? t : lookup;

      const handleClick = (e) => {
        e.preventDefault();
        const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : undefined;
        if (api && typeof api.open === "function") {
          api.open({ tabId: PLAZA_TAB_ID, title: tr("plaza.title") });
        }
      };

      return h(I18nProvider, { t: tr },
        h("div", { className: "sh-plaza-wrap" + (wide ? "" : " rail") },
          h("button", {
            type: "button",
            className: "sh-plaza-trigger",
            "aria-label": tr("plaza.title"),
            onClick: handleClick,
          },
            h(PlazaIcon),
            wide ? h("span", null, tr("plaza.title")) : null,
          ),
        ),
      );
    }
