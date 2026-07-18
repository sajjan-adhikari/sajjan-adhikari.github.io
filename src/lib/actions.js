function makeFade(className) {
  return function fadeAction(node, delay = 0) {
    node.classList.add(className);
    if (delay) node.style.transitionDelay = `${Math.min(delay, 600)}ms`;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(() => node.classList.add('visible'));
      return { destroy() {} };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => node.classList.add('visible'));
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);

    return {
      destroy() { observer.disconnect(); }
    };
  };
}

export const fadeUp = makeFade('fade-up');
export const fadeUpSpring = makeFade('fade-up-spring');
export const fadeUpScale = makeFade('fade-up-scale');
