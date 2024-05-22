
document.addEventListener("DOMContentLoaded", () => {
    const lazyLoadElements = document.querySelectorAll('.lazy-load');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    lazyLoadElements.forEach(element => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll('.hero-heading span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
        }, index * 4000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const word = document.getElementById("word");
    const words = ["Human Resources", "Manpower"];
    let currentWordIndex = 0;

    setInterval(function() {
      word.style.opacity = 0; // Fade out
      setTimeout(function() {
        word.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
        word.style.opacity = 1; // Fade in
      }, 1000); // Half the transition time for a smoother effect
    }, 2000);
  });
  
  