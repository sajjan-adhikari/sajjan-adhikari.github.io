<script lang="ts">
  import MountainRange from './MountainRange.svelte';

  let visible = $state(false);

  $effect(() => {
    const raf = requestAnimationFrame(() => { visible = true; });
    return () => cancelAnimationFrame(raf);
  });
</script>

<section id="hero" class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <MountainRange />

  <div class="hero-overlay"></div>

  <div class="hero-body">
    <span class="hero-badge" class:hero-badge--visible={visible}>
      Open to SOC Analyst opportunities
    </span>

    <h1 class="hero-name" class:hero-name--visible={visible}>Sajjan Adhikari</h1>

    <p class="hero-tagline" class:hero-tagline--visible={visible}>
      SOC Analyst<span class="sep">&ensp;&middot;&ensp;</span>Threat Detection<span class="sep">&ensp;&middot;&ensp;</span>Incident Response
    </p>

    <p class="hero-desc" class:hero-desc--visible={visible}>
      Cybersecurity student building hands-on expertise in SIEM operations, log forensics, and blue team workflows through structured lab work and industry certifications.
    </p>

    <div class="hero-cta-row" class:hero-cta-row--visible={visible}>
      <a href="#proof" class="hero-btn hero-btn--solid">
        View Projects
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <a href="#work" class="hero-btn hero-btn--outline">
        Get in Touch
      </a>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100dvh;
    background: #000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 58%, rgba(255,255,255,0.012) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 70% 55% at 50% 35%, #000 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 55% at 50% 35%, #000 0%, transparent 75%);
    pointer-events: none;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 55% at 50% 45%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, transparent 75%);
    pointer-events: none;
    z-index: 2;
  }

  /* ── Body ── */
  .hero-body {
    position: relative;
    z-index: 3;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
    padding: 6rem 1.5rem 4rem;
    width: 100%;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.65);
    font-size: 0.78rem;
    font-weight: 500;
    margin-bottom: 1.75rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                border-color 0.2s ease,
                color 0.2s ease,
                background 0.2s ease;
  }
  .hero-badge--visible {
    opacity: 1;
    transform: translateY(0);
  }
  .hero-badge:hover {
    border-color: rgba(255,255,255,0.25);
    color: #fff;
    background: rgba(255,255,255,0.07);
  }

  .hero-name {
    font-size: clamp(2.6rem, 6vw, 4.4rem);
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1;
    margin-bottom: 1.1rem;
    background: linear-gradient(135deg, #fff 0%, var(--color-teal, #2dd4bf) 50%, #fff 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(24px) scale(0.96);
    transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .hero-name--visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    animation: hero-name-shine 6s linear infinite;
  }

  @keyframes hero-name-shine {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }

  .hero-tagline {
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    font-weight: 500;
    color: rgba(255,255,255,0.55);
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
  }
  .hero-tagline--visible {
    opacity: 1;
    transform: translateY(0);
  }

  .sep {
    color: rgba(255,255,255,0.15);
  }

  .hero-desc {
    font-size: clamp(0.85rem, 1.3vw, 0.95rem);
    color: rgba(255,255,255,0.35);
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 2.25rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
  }
  .hero-desc--visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-cta-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.45s;
  }
  .hero-cta-row--visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.65rem 1.4rem;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.25s ease;
    border: none;
    font-family: inherit;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
  .hero-btn--solid {
    background: linear-gradient(135deg, var(--color-teal), var(--color-teal-dim));
    color: #000;
  }
  .hero-btn--solid:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 20px color-mix(in srgb, var(--color-teal) 30%, transparent);
  }
  .hero-btn--solid:active {
    transform: translateY(0);
  }
  .hero-btn--outline {
    background: transparent;
    color: rgba(255,255,255,0.75);
    border: 1px solid rgba(255,255,255,0.18);
  }
  .hero-btn--outline:hover {
    color: var(--color-teal);
    border-color: var(--color-teal);
    background: color-mix(in srgb, var(--color-teal) 10%, transparent);
    box-shadow: 0 0 20px color-mix(in srgb, var(--color-teal) 15%, transparent);
  }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    .hero-body {
      padding-top: 5.5rem;
    }
    .hero-name {
      font-size: clamp(2.4rem, 11vw, 3.4rem);
    }
    .hero-cta-row {
      flex-direction: column;
      width: 100%;
      max-width: 260px;
    }
    .hero-btn {
      width: 100%;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-badge,
    .hero-name,
    .hero-tagline,
    .hero-desc,
    .hero-cta-row {
      opacity: 1;
      transform: none;
      transition: none;
    }

  }
</style>
