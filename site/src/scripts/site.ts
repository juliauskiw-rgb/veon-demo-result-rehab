// Page behaviour: mobile menu, situation choice, price switch, bottom contact bar.
// Everything here is progressive: without scripts all content is visible as a plain list.

const wide = window.matchMedia("(min-width: 60rem)");

// Mobile menu
const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
const nav = document.querySelector<HTMLElement>("#site-nav");
if (menuBtn && nav) {
  const focusables = () =>
    [menuBtn, ...nav.querySelectorAll<HTMLElement>("a, [tabindex='0']")].filter((el) => el.offsetParent !== null);
  const setOpen = (open: boolean) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.documentElement.classList.toggle("menu-open", open);
  };
  const isOpen = () => nav.classList.contains("is-open");
  menuBtn.addEventListener("click", () => setOpen(!isOpen()));
  nav.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") {
      setOpen(false);
      menuBtn.focus();
    } else if (e.key === "Tab") {
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  window.matchMedia("(min-width: 75rem)").addEventListener("change", () => setOpen(false));
}

// Situation choice: one open at a time; on a phone the open one can be closed again.
const sitButtons = [...document.querySelectorAll<HTMLButtonElement>("[data-sit]")];
const showSituation = (target: HTMLButtonElement | null) => {
  for (const btn of sitButtons) {
    const open = btn === target;
    btn.setAttribute("aria-expanded", String(open));
    const panel = document.getElementById(btn.getAttribute("aria-controls") ?? "");
    panel?.classList.toggle("is-open", open);
    panel?.classList.add("is-swap");
  }
};
for (const btn of sitButtons) {
  btn.addEventListener("click", () => {
    const opened = btn.getAttribute("aria-expanded") === "true";
    if (opened && wide.matches) return;
    showSituation(opened ? null : btn);
  });
}
wide.addEventListener("change", (e) => {
  if (e.matches && !sitButtons.some((b) => b.getAttribute("aria-expanded") === "true")) showSituation(sitButtons[0] ?? null);
});

// Price switch: real tabs with arrow keys.
const tabs = [...document.querySelectorAll<HTMLButtonElement>("[role='tab']")];
const selectTab = (tab: HTMLButtonElement, focus = false) => {
  for (const t of tabs) {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    const panel = document.getElementById(t.getAttribute("aria-controls") ?? "");
    panel?.classList.toggle("is-active", on);
    panel?.classList.add("is-swap");
  }
  if (focus) tab.focus();
};
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    selectTab(tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length], true);
  });
});

// Bottom bar appears once the first-screen buttons have left the viewport.
const heroActions = document.querySelector("[data-hero-actions]");
const bar = document.querySelector<HTMLElement>(".mobile-bar");
if (heroActions && bar && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    bar.classList.toggle("is-shown", !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(heroActions);
}

// Current section in the header: a thin band in the middle of the screen decides which block is active.
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>(".site-nav__links a")];
const sectionsById = navLinks
  .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href") ?? ""))
  .filter((el): el is HTMLElement => el !== null);
const firstScreen = document.querySelector("#top");
if (sectionsById.length && "IntersectionObserver" in window) {
  const mark = (id: string | null) => {
    for (const a of navLinks) {
      if (a.getAttribute("href") === `#${id}`) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    }
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) if (e.isIntersecting) mark(e.target.id);
    },
    { rootMargin: "-45% 0px -54% 0px" },
  );
  sectionsById.forEach((el) => io.observe(el));
  if (firstScreen) io.observe(firstScreen);
}
