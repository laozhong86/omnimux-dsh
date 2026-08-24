    /** 专家 tab：全量拉取本地目录（105 条）+ 客户端过滤，点卡片即召唤。 */
    function ExpertPanel({ onClose }) {
      const tr = useTr();
      const [query, setQuery] = useState("");
      const [category, setCategory] = useState("");
      const [items, setItems] = useState([]);
      const [categories, setCategories] = useState([]);
      const [status, setStatus] = useState("loading");
      const [err, setErr] = useState("");
      const [busy, setBusy] = useState("");
      const [feedback, setFeedback] = useState("");
      useEffect(() => {
        let live = true;
        const key = apiCacheKey("experts", {});
        const cached = apiCache.get(key);
        const hasFresh = cached && Date.now() - cached.at < API_CACHE_TTL_MS;
        if (hasFresh) {
          const d = cached.body;
          setItems(Array.isArray(d.items) ? d.items : []);
          setCategories(Array.isArray(d.categories) ? d.categories : []);
          setStatus("ready");
          setErr("");
        }
        api("experts", {})
          .then((d) => {
            if (!live) return;
            setItems(Array.isArray(d.items) ? d.items : []);
            setCategories(Array.isArray(d.categories) ? d.categories : []);
            setStatus("ready");
            setErr("");
          })
          .catch((e) => {
            if (!live) return;
            if (hasFresh) return;
            setItems([]);
            setCategories([]);
            setStatus("error");
            setErr(e.message || String(e));
          });
        return () => { live = false; };
      }, []);
      const q = query.trim().toLowerCase();
      const filtered = items.filter((it) => {
        if (category && it.category !== category) return false;
        if (!q) return true;
        return `${it.name || ""} ${it.description || ""} ${it.id || ""}`.toLowerCase().includes(q);
      });
      async function summon(item) {
        if (busy) return;
        setBusy(item.id);
        setFeedback("");
        try {
          const blank = isBlankSession();
          const sessionId = currentSessionId(plazaSessions);
          const result = await api("catalogSummon", { id: item.id, sessionState: blank ? "blank" : "locked", sessionId });
          const field = findComposer();
          const wrote = field instanceof HTMLTextAreaElement || field instanceof HTMLInputElement
            ? insertGesture(field, result.gesture)
            : false;
          if (result.stagePreset === "expert-mode") clickPreset("expert-mode");
          setItems((cur) => cur.map((it) => it.id === item.id ? { ...it, installed: true } : it));
          if (!wrote) {
            setFeedback(tr("expert.gestureReady", { g: result.gesture }));
          } else {
            onClose?.();
          }
        } catch (e) {
          setFeedback(e.message || String(e));
        } finally {
          setBusy("");
        }
      }
      return h("div", { className: "sh-mkt" },
        h("form", {
          className: "sh-mkt-search",
          onSubmit: (e) => e.preventDefault(),
        },
          h("div", { className: "sh-mkt-field" },
            h(SearchIcon),
            h("input", {
              type: "search",
              value: query,
              placeholder: tr("expert.searchPlaceholder"),
              onChange: (e) => setQuery(e.currentTarget.value),
            }),
          ),
          h("button", { type: "submit", className: "sh-mkt-go" }, tr("mkt.search")),
        ),
        h("div", { className: "sh-mkt-filters" },
          h("button", {
            type: "button",
            className: "sh-mkt-filter" + (!category ? " on" : ""),
            onClick: () => setCategory(""),
          }, tr("mkt.catAll")),
          categories.map((it) => h("button", {
            key: it.id,
            type: "button",
            className: "sh-mkt-filter" + (category === it.id ? " on" : ""),
            onClick: () => setCategory(it.id),
          }, it.title)),
        ),
        busy ? h("p", { className: "sh-mkt-status", style: { padding: "0 2px", textAlign: "left" } }, tr("expert.summoning")) : null,
        feedback ? h("p", { className: "sh-mkt-status", style: { padding: "0 2px", textAlign: "left" } }, feedback) : null,
        status === "loading" ? h("p", { className: "sh-mkt-status" }, tr("mkt.loading")) : null,
        status === "error" ? h("p", { className: "sh-mkt-status" }, tr("mkt.error", { m: err })) : null,
        status === "ready" && !filtered.length ? h("p", { className: "sh-mkt-status" }, tr("expert.empty")) : null,
        filtered.length ? h(Cards, { items: filtered, onOpen: summon }) : null,
      );
    }
