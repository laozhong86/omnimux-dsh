    const SKILL_CAT_KEYS = [
      "office-efficiency", "content-creation", "dev-programming", "data-analysis",
      "design-media", "ai-agent", "knowledge-management", "business-ops",
      "education", "professional", "it-ops-security", "life-service",
    ];

    function PlazaIcon() {
      return h("svg", { viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true" },
        h("rect", { x: "1.75", y: "1.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
        h("rect", { x: "8.75", y: "1.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
        h("rect", { x: "1.75", y: "8.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
        h("rect", { x: "8.75", y: "8.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
      );
    }

    function SkillPlaza() {
      const tr = useTr();
      const pageSize = 48;
      const [query, setQuery] = useState("");
      const [submitted, setSubmitted] = useState("");
      const [category, setCategory] = useState("");
      const [page, setPage] = useState(1);
      const [items, setItems] = useState([]);
      const [total, setTotal] = useState(0);
      const [hasMore, setHasMore] = useState(false);
      const [fallback, setFallback] = useState(false);
      const [status, setStatus] = useState("loading");
      const [err, setErr] = useState("");
      const [open, setOpen] = useState(null);
      const applySearchBody = (d, mode) => {
        const next = d.items || [];
        const isFallback = !!d.fallback;
        setFallback(isFallback);
        // fallback 热门列表：UI 不用全库 total 冒充命中数，也不继续翻页
        const nextTotal = isFallback ? next.length : (Number(d.total) || 0);
        if (mode === "replace") setItems(next);
        else setItems((cur) => cur.concat(next));
        setTotal(nextTotal);
        setHasMore(isFallback ? false : !!d.hasMore);
        setStatus("ready");
        setErr("");
        return next;
      };
      useEffect(() => {
        let live = true;
        const payload = { query: submitted, category, limit: pageSize, offset: (page - 1) * pageSize };
        const key = apiCacheKey("search", payload);
        const cached = apiCache.get(key);
        const hasFresh = cached && Date.now() - cached.at < API_CACHE_TTL_MS;
        if (page === 1 && hasFresh) {
          applySearchBody(cached.body, "replace");
        } else if (page === 1) {
          setStatus("loading");
        }
        api("search", payload)
          .then((d) => {
            if (!live) return;
            const next = applySearchBody(d, page === 1 ? "replace" : "append");
            // Lazy ratings: patch cards after search returns (Host no longer awaits).
            const slugs = next.map((it) => it.slug).filter(Boolean);
            if (slugs.length) {
              api("ratings", { slugs }, { skipCache: true }).then((r) => {
                if (!live || !r || !r.ratings) return;
                setItems((cur) => cur.map((it) => {
                  const score = r.ratings[it.slug];
                  return score != null ? { ...it, rating: score } : it;
                }));
              }).catch(() => {});
            }
          })
          .catch((e) => {
            if (!live) return;
            if (page === 1 && !hasFresh) {
              setItems([]);
              setTotal(0);
              setHasMore(false);
              setFallback(false);
              setStatus("error");
              setErr(e.message || String(e));
            }
          });
        return () => { live = false; };
      }, [submitted, category, page]);
      const mark = (item, installed) => {
        setItems((cur) => cur.map((it) => it.slug === item.slug ? { ...it, installed } : it));
        setOpen((cur) => cur && cur.slug === item.slug ? { ...cur, installed } : cur);
      };
      const remaining = fallback ? 0 : Math.max(0, total - items.length);
      const summaryText = fallback
        ? tr("search.fallback")
        : tr("search.hint", { n: total || items.length });
      return h("div", { className: "sh-mkt" },
        h("form", {
          className: "sh-mkt-search",
          onSubmit: (e) => { e.preventDefault(); setPage(1); setSubmitted(query.trim()); },
        },
          h("div", { className: "sh-mkt-field" },
            h(SearchIcon),
            h("input", {
              type: "search",
              value: query,
              placeholder: tr("mkt.searchPlaceholder"),
              onChange: (e) => setQuery(e.currentTarget.value),
            }),
          ),
          h("button", { type: "submit", className: "sh-mkt-go" }, tr("mkt.search")),
        ),
        h("div", { className: "sh-mkt-filters" },
          h("button", {
            type: "button",
            className: "sh-mkt-filter" + (!category ? " on" : ""),
            onClick: () => { setCategory(""); setPage(1); },
          }, tr("mkt.catAll")),
          SKILL_CAT_KEYS.map((key) => h("button", {
            key,
            type: "button",
            className: "sh-mkt-filter" + (category === key ? " on" : ""),
            onClick: () => { setCategory(key); setPage(1); },
          }, tr("cat." + key))),
        ),
        status === "ready" ? h("div", { className: "sh-mkt-results" },
          h("p", { className: "sh-mkt-summary" }, summaryText),
        ) : null,
        status === "loading" && page === 1 ? h("p", { className: "sh-mkt-status" }, tr("mkt.loading")) : null,
        status === "error" ? h("p", { className: "sh-mkt-status" }, tr("mkt.error", { m: err })) : null,
        status === "ready" && !items.length ? h("p", { className: "sh-mkt-status" }, tr("search.empty")) : null,
        items.length ? h(Cards, { items, onOpen: setOpen }) : null,
        status === "ready" && !fallback && (hasMore || remaining > 0) ? h("button", {
          type: "button",
          className: "sh-mkt-more",
          onClick: () => setPage((n) => n + 1),
        },
          h("span", null, tr("mkt.more")),
          remaining ? h("span", { className: "sh-mkt-more-left" }, tr("mkt.moreLeft", { n: remaining })) : null,
          h(ChevronDown),
        ) : null,
        open ? h(Drawer, {
          item: open,
          onClose: () => setOpen(null),
          onInstalled: (it) => mark(it, true),
          onUninstalled: (it) => mark(it, false),
        }) : null,
      );
    }
