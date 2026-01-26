    // --- 1. Reveal Animation on Scroll ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-section').forEach((section) => {
            observer.observe(section);
        });

     //Header Two
  const tabs = document.querySelectorAll('.about-tab');
  const contents = document.querySelectorAll('.about-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });

