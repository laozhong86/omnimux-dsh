    const MARKET_ENTRY_SELECTOR = '[data-omnimux-market-entry]';
    const MARKET_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path d="M8 1.5 2.5 4.5v7L8 14.5l5.5-3v-7L8 1.5Z" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/><path d="M8 1.5v13M2.5 4.5l5.5 3.5 5.5-3.5" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/></svg>';

    function createPlazaWorkbenchStore(t) {
      const resolveTitle = () => {
        try {
          const val = typeof t === "function" ? t("plaza.title") : undefined;
          if (val && val !== "plaza.title") return val;
        } catch {}
        return "广场";
      };
      const api = () => (typeof window !== "undefined" ? window.__omnimuxWorkbench : undefined);
      return {
        getSnapshot() {
          return Boolean(api()?.isActive?.(PLAZA_TAB_ID));
        },
        subscribe(listener) {
          if (typeof listener !== "function") return () => {};
          const a = api();
          if (a && typeof a.subscribe === "function") return a.subscribe(listener);
          let unsub = () => {};
          const started = Date.now();
          const timer = setInterval(() => {
            const next = api();
            if (next && typeof next.subscribe === "function") {
              clearInterval(timer);
              unsub = next.subscribe(listener);
              return;
            }
            if (Date.now() - started > 8000) clearInterval(timer);
          }, 50);
          return () => {
            clearInterval(timer);
            unsub();
          };
        },
        open() {
          const a = api();
          if (!a || typeof a.open !== "function") return;
          void a.open({ tabId: PLAZA_TAB_ID, title: resolveTitle() });
        },
        close() {
          api()?.closeTab?.(PLAZA_TAB_ID);
        },
        set(next) {
          if (next) this.open();
          else this.close();
        },
        readBox() {
          return { top: 0, left: 0, width: 0, height: 0 };
        },
      };
    }

    function mountSidebarEntry(_stage, t, locale) {
      return createSidebarEntry({
        id: "omnimux-market",
        rank: 25,
        label: () => lookup("plaza.title"),
        iconSvg: MARKET_ICON_SVG,
        stageStore: createPlazaWorkbenchStore(t),
        locale,
        access: "offline",
        customClassName: "omnimux-market-entry",
        datasetKey: "data-omnimux-market-entry",
      });
    }
