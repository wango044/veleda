(function () {
  document.documentElement.classList.add("motion-ready");

  const cursor = document.querySelector(".lux-cursor");
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  if (cursor && finePointer) {
    document.body.classList.add("cursor-ready");

    window.addEventListener("mousemove", (event) => {
      cursor.classList.add("active");
      cursor.style.transform = `translate3d(${event.clientX - 14}px, ${event.clientY - 14}px, 0)`;
    });

    document.querySelectorAll("a, button, .transition-card, .tariff-card").forEach((item) => {
      item.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      item.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal], .tariff-cards");

  function revealVisibleItems() {
    revealItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 80) {
        item.classList.add("revealed");
      }
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => revealObserver.observe(item));
  window.addEventListener("scroll", revealVisibleItems, { passive: true });
  window.addEventListener("resize", revealVisibleItems);
  setTimeout(revealVisibleItems, 80);

  const supportContent = {
    landing: {
      title: "Лендинг продает без лишней переписки",
      copy: "Оффер, услуги, кейсы, отзывы и кнопка Telegram собраны в одном премиальном интерфейсе."
    },
    bot: {
      title: "Бот забирает рутину на себя",
      copy: "Он отвечает на частые вопросы, собирает контакты, отправляет уведомления и ведет клиента к заявке."
    },
    crm: {
      title: "CRM показывает весь поток",
      copy: "Клиенты, даты, статусы, свободные окна и история обращений видны в одном месте без хаоса в переписках."
    }
  };

  const titleNode = document.querySelector("[data-support-title]");
  const copyNode = document.querySelector("[data-support-copy]");
  const supportButtons = document.querySelectorAll("[data-panel]");

  supportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = supportContent[button.dataset.panel];
      if (!panel || !titleNode || !copyNode) return;

      supportButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      titleNode.textContent = panel.title;
      copyNode.textContent = panel.copy;
    });
  });
})();
