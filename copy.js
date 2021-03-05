(() => {
  const e = {
      birdFlies(e) {
        document.querySelector('[data-index="2"] .bird').style.transform = e
          ? `translateX(${window.innerWidth}px)`
          : "translateX(-100%)";
      },
      birdFlies2(e) {
        document.querySelector('[data-index="5"] .bird').style.transform = e
          ? `translate(${window.innerWidth}px, ${0.7 * -window.innerHeight}px)`
          : "translateX(-100%)";
      },
    },
    t = document.querySelectorAll(".step"),
    n = document.querySelectorAll(".graphic-item");
  let i,
    d = n[0];
  const r = new IntersectionObserver((e, t) => {
    i = 1 * e[0].target.dataset.index;
  });
  for (let e = 0; e < t.length; e++)
    r.observe(t[e]), (t[e].dataset.index = e), (n[e].dataset.index = e);
  function a(t) {
    d.classList.add("visible"), t && e[t](!0);
  }
  function o(t) {
    d.classList.remove("visible"), t && e[t](!1);
  }
  window.addEventListener("scroll", () => {
    let e, r;
    for (let s = i - 1; s < i + 2; s++)
      (e = t[s]) &&
        (r = e.getBoundingClientRect()).top > 0.1 * window.innerHeight &&
        r.top < 0.8 * window.innerHeight &&
        (o(d.dataset.action), a((d = n[e.dataset.index]).dataset.action));
  }),
    window.addEventListener("load", () => {
      setTimeout(() => scrollTo(0, 0), 100);
    }),
    a();
})();
