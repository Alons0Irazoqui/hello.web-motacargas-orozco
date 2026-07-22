(function () {
  const WA_NUMBER = "526643727826";
  const WA_BASE = `https://wa.me/${WA_NUMBER}`;

  document.documentElement.classList.add("js");
  document.body.classList.add("loading");

  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      loader?.classList.add("loaded");
      document.body.classList.remove("loading");
    }, 1750);
  });

  const nav = document.getElementById("nav");
  const syncNav = () => nav?.classList.toggle("scrolled", window.scrollY > 24);
  syncNav();
  window.addEventListener("scroll", syncNav, { passive: true });

  const scrollToTarget = (hash) => {
    const target = hash ? document.querySelector(hash) : null;
    if (!target) return false;
    const offset = (nav?.getBoundingClientRect().height || 88) + 118;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    return true;
  };

  if (window.location.hash) {
    window.setTimeout(() => scrollToTarget(window.location.hash), 2100);
  }

  const ham = document.getElementById("ham");
  const mob = document.getElementById("mob");
  ham?.addEventListener("click", () => {
    const open = mob?.classList.toggle("open");
    ham.classList.toggle("active", Boolean(open));
    ham.setAttribute("aria-expanded", String(Boolean(open)));
  });
  mob?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mob.classList.remove("open");
      ham?.classList.remove("active");
      ham?.setAttribute("aria-expanded", "false");
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      if (scrollToTarget(hash)) {
        event.preventDefault();
        history.pushState(null, "", hash);
      }
    });
  });

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -40px" });
  document.querySelectorAll(".rev").forEach((el) => reveal.observe(el));

  const typeEl = document.getElementById("twText");
  const phrases = [
    "renta de montacargas",
    "maniobras de carga",
    "disponibilidad por WhatsApp",
    "equipo real de flota"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const type = () => {
    if (!typeEl) return;
    const phrase = phrases[phraseIndex];
    typeEl.textContent = phrase.slice(0, charIndex);
    if (!deleting && charIndex < phrase.length) {
      charIndex += 1;
      window.setTimeout(type, 58);
      return;
    }
    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      window.setTimeout(type, 1200);
      return;
    }
    if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(type, 28);
      return;
    }
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    window.setTimeout(type, 260);
  };
  type();

  const animateCount = (el) => {
    const target = Number(el.dataset.count || el.dataset.heroCount);
    if (!Number.isFinite(target)) return;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.45 });
  document.querySelectorAll("[data-count], [data-hero-count]").forEach((el) => countObserver.observe(el));

  const parallaxTargets = document.querySelectorAll(".hero-bg, .numbers-bg");
  const parallax = () => {
    const y = window.scrollY * 0.12;
    parallaxTargets.forEach((el) => {
      el.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
    });
  };
  window.addEventListener("scroll", parallax, { passive: true });
  parallax();

  const setupParticles = (canvasId, options = {}) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = 0;
    let height = 0;
    let particles = [];
    const color = options.color || "227, 30, 36";
    const density = options.density || 58;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio));
      height = canvas.height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio));
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      const count = Math.min(density, Math.floor(rect.width / 18));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 1.8 + .4,
        vx: (Math.random() - .5) * .34,
        vy: (Math.random() - .5) * .34,
        a: Math.random() * .42 + .12
      }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > rect.width) p.vx *= -1;
        if (p.y < 0 || p.y > rect.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.a})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(${color}, ${Math.max(0, .16 - dist / 760)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
  };

  setupParticles("pcanvas", { density: 72 });
  setupParticles("pcanvasWhy", { density: 46 });
  setupParticles("pcanvasNumbers", { density: 44 });
  setupParticles("pcanvasGaleria", { density: 52 });

  const form = document.getElementById("cForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const required = Array.from(form.querySelectorAll("[required]"));
    let valid = true;
    required.forEach((field) => {
      const isEmpty = !String(field.value || "").trim();
      field.classList.toggle("error", isEmpty);
      if (isEmpty) valid = false;
    });
    if (!valid) return;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const tipo = String(data.get("tipo") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();
    const text = [
      "Hola, quiero cotizar con Montacargas Orozco.",
      `Nombre: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Servicio: ${tipo}`,
      mensaje ? `Detalle: ${mensaje}` : ""
    ].filter(Boolean).join("\n");
    window.open(`${WA_BASE}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  });
})();
