<script>
  import { fadeUp } from '$lib/actions.js';

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Sajjan-Adhikari',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sajjanadhikari',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    },
    {
      label: 'Email',
      href: 'mailto:sajjanadhikari0@gmail.com',
      icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    },
  ];

  const focusAreas = [
    'SIEM & Log Analysis',
    'Threat Detection',
    'Network Forensics',
    'Incident Response',
    'Vulnerability Assessment',
  ];

  const stats = [
    { num: '6', label: 'Projects' },
    { num: '4+', label: 'Certifications' },
    { num: 'C2',  label: 'English Level' },
    { num: 'NPL', label: 'Based in Nepal' },
  ];
</script>

<section id="hero" class="relative min-h-screen flex items-center bg-bg overflow-hidden pt-16">
  <div class="hero-grid"></div>
  <div class="hero-glow"></div>

  <div class="max-w-[1100px] mx-auto px-6 py-24 relative z-10 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center">

      <!-- Left: main content -->
      <div>
        <div use:fadeUp class="inline-flex items-center gap-2 bg-card border border-line rounded-full px-4 py-1.5 mb-10 card-shadow">
          <span class="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot"></span>
          <span class="text-[0.78rem] text-muted">Available for opportunities · Lalitpur, Nepal</span>
        </div>

        <h1 use:fadeUp={80} class="text-[clamp(3rem,6.5vw,5rem)] font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-5">
          Sajjan<br>Adhikari
        </h1>

        <p use:fadeUp={160} class="text-[1rem] font-semibold text-cyan mb-6 tracking-[0.02em]">
          SOC Analyst &nbsp;·&nbsp; Threat Detection &nbsp;·&nbsp; Incident Response
        </p>

        <p use:fadeUp={230} class="text-[0.97rem] text-muted leading-[1.85] max-w-[500px] mb-10">
          Cybersecurity student building hands-on expertise in SIEM operations, log forensics,
          and blue team workflows through structured lab work and industry certifications.
        </p>

        <div use:fadeUp={300} class="flex flex-wrap gap-3 mb-12">
          <a href="#projects" class="inline-flex items-center gap-2 bg-cyan text-black font-semibold text-[0.88rem] px-6 py-2.5 rounded-lg hover:bg-cyan-dim transition-colors duration-200">
            View Projects
          </a>
          <a href="#contact" class="inline-flex items-center gap-2 text-ink text-[0.88rem] font-medium border border-line px-6 py-2.5 rounded-lg hover:bg-card hover:border-muted/40 transition-all duration-200">
            Get in Touch
          </a>
        </div>

        <div use:fadeUp={370} class="flex items-center gap-2">
          {#each socials as s}
            <a
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              class="w-10 h-10 rounded-lg flex items-center justify-center text-dim hover:text-ink hover:bg-card border border-transparent hover:border-line transition-all duration-200"
            >{@html s.icon}</a>
          {/each}
        </div>
      </div>

      <!-- Right: profile panel -->
      <div use:fadeUp={200} class="hidden lg:flex flex-col gap-4">

        <!-- Focus areas -->
        <div class="bg-card border border-line rounded-2xl p-5 card-shadow">
          <p class="text-[0.68rem] font-semibold text-dim uppercase tracking-[0.14em] mb-4">Focus Areas</p>
          <div class="flex flex-col gap-0">
            {#each focusAreas as area}
              <div class="flex items-center gap-3 py-2.5 border-b border-line last:border-0">
                <div class="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0"></div>
                <span class="text-[0.85rem] text-muted">{area}</span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Stats -->
        <div class="bg-card border border-line rounded-2xl p-5 card-shadow">
          <p class="text-[0.68rem] font-semibold text-dim uppercase tracking-[0.14em] mb-4">At a Glance</p>
          <div class="grid grid-cols-2 gap-4">
            {#each stats as s}
              <div>
                <div class="text-[1.6rem] font-bold text-cyan leading-none mb-0.5">{s.num}</div>
                <div class="text-[0.73rem] text-dim">{s.label}</div>
              </div>
            {/each}
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
    <span class="text-[0.62rem] tracking-[0.2em] text-dim/50 uppercase">Scroll</span>
    <div class="w-px h-10 bg-line relative overflow-hidden">
      <div class="absolute inset-0 bg-cyan animate-scroll-line"></div>
    </div>
  </div>
</section>
