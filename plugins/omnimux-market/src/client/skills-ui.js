    function Toast({ text, onDone }) {
      useEffect(() => {
        const t = setTimeout(onDone, 1600);
        return () => clearTimeout(t);
      }, [text, onDone]);
      return h("div", { className: "sh-toast" }, text);
    }

    function Icon({ item, className }) {
      const src = iconSrc(item.iconUrl);
      if (src) return h("img", { className, src, alt: "" });
      return h("div", { className }, initials(item.name || item.slug));
    }

    function Cards({ items, onOpen }) {
      const tr = useTr();
      if (!items?.length) return h("div", { className: "sh-hint" }, tr("search.empty"));
      return h(
        "div",
        { className: "sh-cards" },
        items.map((item) => {
          const meta = [
            catLabel(item, tr),
            item.downloads ? tr("meta.downloads", { n: fmt(item.downloads, tr) }) : null,
            item.version ? "v" + item.version : null,
          ].filter(Boolean).join(" · ");
          return h(
            "button",
            {
              key: item.slug || item.id,
              type: "button",
              className: "sh-card" + (item.installed ? " on" : ""),
              onClick: () => onOpen(item),
            },
            h(Icon, { item, className: "sh-icon" }),
            h("div", { className: "sh-meta" },
              h("div", { className: "sh-top" },
                h("div", { className: "sh-title", title: item.name }, item.name),
                item.installed ? h("span", { className: "sh-badge" }, tr("badge.installed")) : null,
              ),
              item.description ? h("div", { className: "sh-desc" }, item.description) : null,
              h("div", { className: "sh-footline" }, meta || item.slug),
            ),
          );
        }),
      );
    }

    function TabBar({ tab, onChange }) {
      const tr = useTr();
      return h("div", { className: "sh-tabs", role: "tablist" },
        DETAIL_TABS.map((it) => h("button", {
          key: it.id,
          type: "button",
          role: "tab",
          className: "sh-tab" + (tab === it.id ? " on" : ""),
          "aria-selected": tab === it.id,
          onClick: () => onChange(it.id),
        }, tr(it.labelKey))),
      );
    }

    function normVer(v) {
      return String(v || "").trim().replace(/^v/i, "");
    }

    function VersionsPane({ data, currentVersion, installed, busy, onInstall }) {
      const tr = useTr();
      const items = data?.versions || [];
      if (!items.length) return h("p", { className: "sh-hint" }, tr("ver.none"));
      return h("div", null, items.map((v, idx) => {
        const ver = normVer(v.version);
        const current = !!installed && !!ver && normVer(currentVersion) === ver;
        return h("div", { key: ver || idx, className: "sh-ver-card" },
          h("div", { className: "sh-ver-main" },
            h("div", { className: "sh-ver-head" },
              h("b", null, "v" + ver),
              idx === 0 ? h("span", { className: "sh-tag blue" }, tr("ver.latest")) : null,
              current ? h("span", { className: "sh-tag green" }, tr("ver.current")) : null,
            ),
            h("div", { className: "sh-hint", style: { margin: 0 } }, fmtTime(v.createdAt, tr) || tr("ver.unknownDate")),
            h("p", { className: "sh-ver-log" }, v.changelog || tr("ver.noLog")),
          ),
          h("button", {
            type: "button",
            className: "sh-mini" + (current ? "" : " primary"),
            disabled: !!busy || current || !ver,
            onClick: () => onInstall(ver),
          }, current ? tr("ver.this") : (busy === ver ? tr("action.installing") : tr("ver.install"))),
        );
      }));
    }

    function radarPoints(values, cx, cy, r) {
      return values.map((v, i) => {
        const a = -Math.PI / 2 + i * (Math.PI * 2 / 5);
        const rr = r * Math.max(0, Math.min(1, Number(v) / 5));
        return (cx + Math.cos(a) * rr).toFixed(1) + "," + (cy + Math.sin(a) * rr).toFixed(1);
      }).join(" ");
    }

    function DimIcon({ letter, color }) {
      const svg = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
      if (letter === "T") return h("svg", svg, h("path", { d: "M12 3l8 4v5c0 5-3.4 8.4-8 9.5C7.4 20.4 4 17 4 12V7l8-4z" }));
      if (letter === "R") return h("svg", svg, h("path", { d: "M12 21V3M5 10l7-7 7 7" }));
      if (letter === "A") return h("svg", svg, h("circle", { cx: 12, cy: 12, r: 8 }), h("path", { d: "M12 8v8M8 12h8" }));
      if (letter === "C") return h("svg", svg, h("path", { d: "M5 4h11a3 3 0 010 6H5z" }), h("path", { d: "M5 10h12a3 3 0 010 6H8" }));
      return h("svg", svg, h("path", { d: "M13 3L5 14h7l-1 7 8-11h-7l1-7z" }));
    }

    function RadarChart({ scores }) {
      const cx = 90;
      const cy = 90;
      const r = 58;
      const full = TRACE.map(() => 5);
      return h("svg", { className: "sh-radar", viewBox: "0 0 180 180", width: 180, height: 180, "aria-hidden": "true" },
        [1, 2, 3, 4, 5].map((level) => h("polygon", {
          key: level,
          points: radarPoints(full.map(() => level), cx, cy, r),
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1,
        })),
        TRACE.map((d, i) => {
          const a = -Math.PI / 2 + i * (Math.PI * 2 / 5);
          return h("line", {
            key: d[0],
            x1: cx,
            y1: cy,
            x2: +(cx + Math.cos(a) * r).toFixed(1),
            y2: +(cy + Math.sin(a) * r).toFixed(1),
            stroke: "currentColor",
            strokeWidth: 1,
          });
        }),
        h("polygon", {
          points: radarPoints(scores, cx, cy, r),
          fill: "rgba(37,99,235,.16)",
          stroke: "#2563eb",
          strokeWidth: 1.6,
        }),
        TRACE.map((d, i) => {
          const a = -Math.PI / 2 + i * (Math.PI * 2 / 5);
          return h("text", {
            key: "l" + d[0],
            x: +(cx + Math.cos(a) * (r + 16)).toFixed(1),
            y: +(cy + Math.sin(a) * (r + 16)).toFixed(1),
            textAnchor: "middle",
            dominantBaseline: "middle",
            fontSize: 12,
            fontWeight: 700,
            fill: d[4],
          }, d[1]);
        }),
      );
    }

    function evalGrade(score, tr) {
      const n = Number(score);
      if (!Number.isFinite(n)) return "";
      const tx = tr || lookup;
      if (n >= 4.5) return tx("grade.excellent");
      if (n >= 4) return tx("grade.good");
      if (n >= 3) return tx("grade.fair");
      return tx("grade.poor");
    }

    function StarIcon({ filled, size = 12 }) {
      return h("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: filled ? "#f59e0b" : "none",
        stroke: filled ? "#f59e0b" : "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        style: { display: "inline-block", verticalAlign: "middle", opacity: filled ? 1 : 0.35 },
      }, h("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
    }

    function StarGroup({ score }) {
      const n = Math.max(0, Math.min(5, Math.round(Number(score) || 0)));
      return h("span", { className: "sh-stars", "aria-hidden": "true", style: { display: "inline-flex", gap: 1, verticalAlign: "middle" } },
        [0, 1, 2, 3, 4].map((i) => h(StarIcon, { key: i, filled: i < n }))
      );
    }

    function isSafeItem(item) {
      const reports = [item?.security?.keen, item?.security?.sanbu].filter(Boolean);
      if (reports.some((r) => r.status === "malicious" || r.status === "suspicious")) return false;
      if (reports.some((r) => r.status === "benign")) return true;
      return !!(item?.integrity?.signed || item?.integrity?.contentHash);
    }

    function Marks({ item, detail }) {
      const tr = useTr();
      const grade = evalGrade(item.rating, tr);
      const rate = item.rating != null && Number.isFinite(Number(item.rating));
      const bluev = detail && item.verified;
      const safe = detail && isSafeItem(item);
      if (!rate && !bluev && !safe) return null;
      return h("div", { className: "sh-marks" },
        rate ? h("span", { className: "sh-rate", title: tr("rate.ai") },
          h(StarGroup, { score: item.rating }),
          " " + Number(item.rating).toFixed(1),
          grade ? " " + grade : "",
          detail ? " (" + tr("rate.ai") + ")" : "",
        ) : null,
        bluev ? h("span", { className: "sh-bluev", title: item.publisherName || tr("verified.account") },
          h("i", { "aria-hidden": "true" }, "v"),
          h("span", null, item.publisherName || tr("verified")),
        ) : null,
        safe ? h("span", { className: "sh-safe", title: tr("sec.badge") },
          h(ShieldIcon),
          tr("sec.badge"),
        ) : null,
      );
    }

    function ShieldIcon() {
      return h("svg", { className: "sh-sec-ico", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true" },
        h("path", {
          d: "M3.15 2.35 10 .83l6.85 1.52c.38.09.65.42.65.82v8.32c0 1.67-.84 3.23-2.23 4.16L10 19.17l-5.27-3.52C3.34 14.72 2.5 13.16 2.5 11.49V3.17c0-.39.27-.73.65-.82Zm7.68 5.98V4.17L6.67 10h2.5v4.17L13.33 8.33H10.83Z",
          fill: "url(#shShield)",
        }),
        h("defs", null,
          h("linearGradient", { id: "shShield", x1: "10", y1: "0.83", x2: "10", y2: "19.17", gradientUnits: "userSpaceOnUse" },
            h("stop", { stopColor: "#A6E527" }),
            h("stop", { offset: "1", stopColor: "#0CBF5B" }),
          ),
        ),
      );
    }

    function EvaluationPane({ data }) {
      const tr = useTr();
      const ev = data?.evaluation;
      if (!ev) return h("p", { className: "sh-hint" }, tr("eval.none"));
      const scores = TRACE.map((d) => Number(ev.dimensions?.[d[0]]?.score) || 0);
      const grade = evalGrade(ev.score, tr);
      return h("div", null,
        h("div", { className: "sh-eval-hero" },
          h(RadarChart, { scores }),
          h("div", null,
            h("div", { className: "sh-eval-score" }, (ev.score != null ? ev.score : "-"), h("span", null, " / 5")),
            grade ? h("div", { className: "sh-eval-tag" }, tr("eval.grade", { g: grade })) : null,
            ev.userSummary ? h("p", { className: "sh-eval-sum" }, ev.userSummary) : null,
          ),
        ),
        h("div", { className: "sh-eval-h" }, tr("eval.detail")),
        TRACE.map((d) => {
          const dim = ev.dimensions?.[d[0]];
          const score = dim?.score;
          const tint = d[4] + "22";
          return h("div", { key: d[0], className: "sh-eval-item" },
            h("div", { className: "sh-eval-top" },
              h("div", { className: "sh-eval-ico", style: { background: tint } }, h(DimIcon, { letter: d[1], color: d[4] })),
              h("div", { className: "sh-eval-name" }, d[1] + " · " + d[2] + " " + tr("dim." + d[0])),
              h("div", { className: "sh-eval-sc" }, (score == null ? "-" : score) + " / 5"),
            ),
            h("div", { className: "sh-eval-bar" }, h("span", { style: { width: ((Number(score) || 0) / 5 * 100) + "%", background: d[4] } })),
            dim?.userReason ? h("p", { className: "sh-eval-why" }, dim.userReason) : null,
          );
        }),
      );
    }

    function DetailCard({ item, busy, onClose, onInstalled, onUninstalled }) {
      const tr = useTr();
      const [toast, setToast] = useState("");
      const [working, setWorking] = useState("");
      const [tab, setTab] = useState("overview");
      const [view, setView] = useState(item);
      const [pane, setPane] = useState({ loading: false, error: "", data: null });
      const cacheRef = React.useRef({});
      const installed = !!view.installed;
      useEffect(() => { setView(item); }, [item]);
      const applyDetail = (d) => {
        if (!d) return;
        const card = d.card && typeof d.card === "object" ? d.card : null;
        setView((cur) => ({
          ...cur,
          ...(card || {}),
          slug: item.slug,
          installed: d.installed ?? cur.installed,
          version: d.version || card?.version || cur.version,
          pageUrl: card?.pageUrl || cur.pageUrl,
          rating: card?.rating ?? cur.rating,
          verified: card?.verified ?? cur.verified,
          publisherName: card?.publisherName || cur.publisherName,
          description: card?.description || cur.description,
          security: card?.security || cur.security,
          integrity: card?.integrity || cur.integrity,
        }));
      };
      useEffect(() => {
        let live = true;
        api("detail", { slug: item.slug })
          .then((d) => { if (live) applyDetail(d); })
          .catch(() => {});
        return () => { live = false; };
      }, [item.slug]);
      useEffect(() => {
        if (tab === "overview") return;
        const cached = cacheRef.current[tab];
        if (cached) {
          setPane({ loading: false, error: "", data: cached });
          return;
        }
        let live = true;
        setPane({ loading: true, error: "", data: null });
        api("skillTab", { slug: item.slug, tab })
          .then((d) => {
            if (!live) return;
            cacheRef.current[tab] = d;
            setPane({ loading: false, error: "", data: d });
          })
          .catch((e) => {
            if (!live) return;
            setPane({ loading: false, error: e.message || String(e), data: null });
          });
        return () => { live = false; };
      }, [item.slug, tab]);
      const run = async (method, extra) => {
        const ver = extra && extra.version;
        setWorking(ver || method);
        try {
          const result = await api(method, { slug: item.slug, ...(extra || {}) });
          if (method === "install") {
            item.installed = true;
            if (result.version) item.version = result.version;
            else if (ver) item.version = ver;
            setView((cur) => ({ ...cur, installed: true, version: item.version || cur.version }));
            onInstalled?.(item);
            const shown = (view.name || item.name) + (item.version ? " v" + String(item.version).replace(/^v/i, "") : "");
            setToast(tr("toast.installed", { name: shown }));
            api("detail", { slug: item.slug }).then(applyDetail).catch(() => {});
          } else {
            item.installed = false;
            setView((cur) => ({ ...cur, installed: false }));
            onUninstalled?.(item);
            setToast(tr("toast.uninstalled", { name: view.name || item.name }));
          }
        } catch (e) {
          setToast(e.message || String(e));
        } finally {
          setWorking("");
        }
      };
      return h("div", { className: "sh-drawer sh-skill sh-fade", role: "dialog", "aria-modal": "true" },
        h("button", { type: "button", className: "sh-close", onClick: onClose, "aria-label": tr("action.close") }, "×"),
        h("div", { className: "sh-head" },
          h(Icon, { item: view, className: "sh-dicon" }),
          h("div", { style: { minWidth: 0, flex: 1 } },
            h("h2", null, view.name),
            view.id ? h("div", { className: "sh-canon" }, view.id) : null,
            h(Marks, { item: view, detail: true }),
            h("div", { className: "sh-tags" },
              catLabel(view, tr) ? h("span", { className: "sh-tag blue" }, catLabel(view, tr)) : null,
              view.version ? h("span", { className: "sh-tag" }, "v" + view.version) : null,
              installed ? h("span", { className: "sh-tag green" }, tr("action.installed")) : null,
            ),
          ),
        ),
        h("div", { className: "sh-body" },
          h("div", { className: "sh-stats" },
            h("div", { className: "sh-stat" }, tr("stat.downloads") + " ", h("b", null, fmtStat(view.downloads, tr))),
            h("div", { className: "sh-stat" }, tr("stat.stars") + " ", h("b", null, fmtStat(view.stars, tr))),
            h("div", { className: "sh-stat" }, tr("stat.installs") + " ", h("b", null, fmtStat(view.installs, tr))),
          ),
          h(TabBar, { tab, onChange: setTab }),
          h("div", { className: "sh-pane" },
            tab === "overview" ? h("p", { className: "sh-overview" }, view.description || tr("overview.empty")) : null,
            tab !== "overview" && pane.loading ? h("p", { className: "sh-hint" }, tr("loading")) : null,
            tab !== "overview" && pane.error ? h("p", { className: "sh-err" }, pane.error) : null,
            tab === "versions" && pane.data ? h(VersionsPane, {
              data: pane.data,
              currentVersion: view.version,
              installed,
              busy: working,
              onInstall: (version) => run("install", { version }),
            }) : null,
            tab === "evaluation" && pane.data ? h(EvaluationPane, { data: pane.data }) : null,
          ),
        ),
        h("div", { className: "sh-foot" },
          view.pageUrl ? h("a", { className: "sh-mini", href: view.pageUrl, target: "_blank", rel: "noreferrer" }, tr("action.openHome")) : null,
          installed ? h("button", { type: "button", className: "sh-mini", disabled: !!working || busy, onClick: () => run("uninstall") }, working === "uninstall" ? tr("action.uninstalling") : tr("action.uninstall")) : null,
          h("button", {
            type: "button",
            className: "sh-mini primary",
            disabled: installed || !!working || busy,
            onClick: () => run("install"),
          }, installed ? tr("action.installed") : (working && working !== "uninstall" ? tr("action.installing") : tr("action.install"))),
        ),
        toast ? h(Toast, { text: toast, onDone: () => setToast("") }) : null,
      );
    }

    const overlayStack = [];
    function Overlay({ children, onClose }) {
      useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        overlayStack.push(onClose);
        const onKey = (e) => {
          if (e.key !== "Escape") return;
          if (overlayStack[overlayStack.length - 1] !== onClose) return;
          e.preventDefault();
          e.stopImmediatePropagation();
          onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
          const i = overlayStack.lastIndexOf(onClose);
          if (i >= 0) overlayStack.splice(i, 1);
          document.body.style.overflow = overlayStack.length ? "hidden" : prev;
          window.removeEventListener("keydown", onKey);
        };
      }, [onClose]);
      const portaled = createPortal !== fallbackPortal;
      const hostRef = React.useRef(null);
      useEffect(() => {
        if (portaled) return;
        const el = hostRef.current;
        if (!el) return;
        document.body.appendChild(el);
        return () => { el.remove(); };
      }, [portaled]);
      const overlay = h("div", { ref: portaled ? undefined : hostRef, className: "sh-overlay", onClick: (e) => { if (e.target === e.currentTarget) onClose(); } }, children);
      return portaled && typeof document !== "undefined" ? createPortal(overlay, document.body) : overlay;
    }

    function Drawer({ item, onClose, onInstalled, onUninstalled }) {
      return h(Overlay, { onClose },
        h(DetailCard, { item, onClose, onInstalled, onUninstalled }),
      );
    }
