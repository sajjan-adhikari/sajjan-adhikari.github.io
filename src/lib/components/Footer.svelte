<script>
  import { github, linkedin, email } from '$lib/icons.js';

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/Sajjan-Adhikari',   icon: github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sajjanadhikari', icon: linkedin },
    { label: 'Email',    href: 'mailto:sajjanadhikari0@gmail.com',      icon: email },
  ];
</script>

<footer class="py-12 border-t border-line bg-bg">
  <div class="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

    <div class="flex items-center gap-4">
      {#each socials as s}
        <a
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={s.label}
          title={s.href.startsWith('http') ? 'Opens in new tab' : undefined}
           class="footer-link w-8 h-8 rounded-lg flex items-center justify-center text-dim hover:bg-card border border-transparent hover:border-line"
        >{@html s.icon}</a>
      {/each}
    </div>

    <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
      <p class="text-[0.78rem] text-dim">
        <span class="text-teal">$ whoami</span> &nbsp; Sajjan Adhikari &middot; Cybersecurity
      </p>
      <span class="hidden sm:inline text-dim/30">&middot;</span>
      <p class="text-[0.72rem] text-dim/50">&copy; {new Date().getFullYear()} Sajjan Adhikari</p>
    </div>

    <div class="flex items-center gap-2">
    <button
        onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        class="w-7 h-7 rounded-lg flex items-center justify-center text-dim hover:text-ink hover:bg-card border border-transparent hover:border-line transition-all duration-200"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
      </button>
    </div>

  </div>
</footer>

<style>
  .footer-link {
    transition: color 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, border-color 0.2s ease;
  }
  .footer-link:hover {
    color: var(--color-teal);
    transform: translateY(-2px);
  }
</style>
