<script>
  import { fadeUp } from '$lib/actions.js';

  const links = [
    {
      href: 'mailto:sajjanadhikari0@gmail.com',
      label: 'Email',
      value: 'sajjanadhikari0@gmail.com',
      iconBg: 'bg-cyan/10 text-cyan',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    },
    {
      href: 'https://github.com/sajjan-adhikari',
      label: 'GitHub',
      value: 'github.com/sajjan-adhikari',
      external: true,
      iconBg: 'bg-card text-muted',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    },
    {
      href: 'https://linkedin.com/in/sajjanadhikari',
      label: 'LinkedIn',
      value: 'linkedin.com/in/sajjanadhikari',
      external: true,
      iconBg: 'bg-blue/10 text-blue',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    },
  ];

  const openFor = [
    'SOC Analyst (L1 / L2)',
    'Security Operations Internship',
    'Blue Team Collaboration',
    'CTF & Security Research',
  ];
</script>

<section id="contact" class="py-28 bg-bg">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUp class="mb-14">
      <p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Contact</p>
      <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Get in Touch</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">

      <!-- Left: intro -->
      <div use:fadeUp={80}>
        <p class="text-[1.05rem] text-muted leading-[1.85] mb-8">
          I'm actively looking for opportunities to grow as a security professional.
          Whether it's an internship, entry-level SOC role, or a collaborative project — I'd love to connect.
        </p>

        <div class="bg-card border border-line rounded-2xl p-6 card-shadow">
          <p class="text-[0.68rem] font-semibold text-dim uppercase tracking-[0.14em] mb-5">Open For</p>
          <div class="flex flex-col gap-0">
            {#each openFor as item}
              <div class="flex items-center gap-3 py-3 border-b border-line last:border-0">
                <svg class="w-4 h-4 text-cyan flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span class="text-[0.88rem] text-muted">{item}</span>
              </div>
            {/each}
          </div>
        </div>

        <p class="text-[0.78rem] text-dim mt-6 leading-[1.7]">
          Based in Lalitpur, Nepal · Available remotely · Fluent in English (C2)
        </p>
      </div>

      <!-- Right: links -->
      <div use:fadeUp={160} class="flex flex-col gap-3">
        {#each links as link, i}
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            use:fadeUp={180 + i * 55}
            class="group bg-card border border-line rounded-2xl p-5 flex items-center gap-4 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 hover:border-muted/30 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 {link.iconBg}">
              {@html link.icon}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-[0.7rem] font-semibold text-dim uppercase tracking-[0.1em] mb-0.5">{link.label}</p>
              <p class="text-[0.9rem] font-medium text-ink truncate">{link.value}</p>
            </div>
            <svg class="w-4 h-4 text-dim group-hover:text-muted group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        {/each}
      </div>

    </div>
  </div>
</section>
