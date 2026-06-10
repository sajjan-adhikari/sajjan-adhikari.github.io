export function fadeUp(node, delay = 0) {
  if (delay) node.style.transitionDelay = `${delay}ms`;
  node.classList.add('fade-up');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('visible');
        observer.unobserve(node);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
