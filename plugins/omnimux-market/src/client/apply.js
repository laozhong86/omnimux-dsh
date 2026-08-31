    const inject = ["slots", "sessions"];
    // rc.6 list slots require `id`; rc.7+ keyed slots require `key`. Pass both.
    function registerSlot(slots, options, component) {
      const next = { ...options };
      if (next.id == null && next.key != null) next.id = String(next.key);
      if (next.key == null && next.id != null) next.key = next.id;
      return slots.register(next, component);
    }
    function apply(ctx) {
      const slots = ctx.slots;
      const sessions = ctx.sessions;
      plazaSessions = sessions;
      if (!slots) return;
      ctx.inject(["locale"], (c) => {
        if (!c.locale || typeof c.locale.register !== "function") return;
        c.effect(() => {
          try {
            return c.locale.register("omnimux-market", { zh: ZH, en: EN });
          } catch {
            return () => {};
          }
        }, "omnimux-market-locale");
        c.effect(() => mountSidebarEntry(null, lookup, c.locale), "omnimux-market: sidebar entry");
      });
      ctx.effect(() => ensureCss(), "omnimux-market-style");
      slots.inject("tool.call.toolview", () => registerSlot(
        slots,
        { name: "tool.call.toolview", key: "skillhub_search", locale: "omnimux-market" },
        SearchToolView,
      ));
      slots.inject("tool.call.toolview", () => registerSlot(
        slots,
        { name: "tool.call.toolview", key: "plaza_search", locale: "omnimux-market" },
        PlazaSearchToolView,
      ));
      slots.inject("tool.call.toolview", () => registerSlot(
        slots,
        { name: "tool.call.toolview", key: "skillhub_list", locale: "omnimux-market" },
        ListToolView,
      ));
      slots.inject("settings.plugin.item", () => registerSlot(
        slots,
        { name: "settings.plugin.item", key: "omnimux-market", locale: "omnimux-market" },
        ConfigCard,
      ));

      if (typeof ctx.inject === "function") {
        ctx.inject(["betterSidebar"], (inner) => {
          const sidebar = inner.betterSidebar ?? inner.get?.("betterSidebar");
          if (!sidebar || typeof sidebar.registerTab !== "function") return;
          try {
            window.__omnimuxWorkbench?.bind?.({ betterSidebar: sidebar });
          } catch {}
          const registerPlazaTab = () => sidebar.registerTab({
            id: PLAZA_TAB_ID,
            title: () => lookup("plaza.title") || "广场",
            icon: () => h(PlazaIcon),
            order: 25,
            hidden: false,
            single: true,
            component: (props) => h(PlazaView, { ...props }),
          });
          if (typeof ctx.effect === "function") {
            ctx.effect(() => registerPlazaTab(), "omnimux-market: plaza tab");
          } else {
            registerPlazaTab();
          }
        });
      }
    }

    if (typeof module !== "undefined" && module.exports) {
      module.exports = { inject, apply };
    }
