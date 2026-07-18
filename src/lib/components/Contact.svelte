<script>
  import { fadeUp } from '$lib/actions.js';
  import { github, linkedin } from '$lib/icons.js';

  const openFor = [
    'SOC Analyst (L1 / L2)',
    'Security Operations Internship',
    'Blue Team Collaboration',
    'CTF & Security Research',
  ];
</script>

<section id="work" class="py-16 md:py-28 bg-bg">
  <div class="max-w-[1100px] mx-auto px-6">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div use:fadeUp class="card p-6 md:p-8 flex flex-col gap-5">
        <div>
          <p class="section-label">Work with me</p>
          <h2 class="section-title">Get in touch</h2>
        </div>
        <p class="text-[0.92rem] text-muted leading-relaxed">
          I'm actively looking for opportunities to grow as a security professional.
          Whether it's an internship, entry-level SOC role, or a collaborative project — I'd love to connect.
        </p>
        <div class="flex flex-wrap gap-2 mt-auto">
          {#each openFor as item}
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.78rem] text-muted bg-bg border border-line">
              <svg class="w-3 h-3 text-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
              {item}
            </span>
          {/each}
        </div>
      </div>

      <div class="grid grid-rows-2 gap-4">
        <div use:fadeUp={80} class="card p-6 md:p-8 flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <div class="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div class="min-w-0">
              <p class="text-[0.7rem] font-semibold text-dim uppercase tracking-wider mb-0.5">Email</p>
              <p class="text-[0.92rem] font-medium text-ink truncate">sajjanadhikari0@gmail.com</p>
            </div>
          </div>
          <a
            href="mailto:sajjanadhikari0@gmail.com"
            class="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-[0.85rem] font-semibold text-bg"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            Send message
          </a>
        </div>

        <div class="grid grid-cols-2 gap-4">
          {#each [{ href: 'https://github.com/sajjan-adhikari', label: 'GitHub', value: 'github.com/sajjan-adhikari', icon: github }, { href: 'https://linkedin.com/in/sajjanadhikari', label: 'LinkedIn', value: 'linkedin.com/in/sajjanadhikari', icon: linkedin }] as link, i}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              use:fadeUp={140 + i * 40}
              class="group card p-5 md:p-6 flex flex-col items-center justify-center gap-3 h-full text-center"
            >
              <div class="w-10 h-10 rounded-xl bg-bg border border-line flex items-center justify-center text-dim/70 group-hover:text-teal transition-colors duration-200">
                {@html link.icon}
              </div>
              <div>
                <p class="text-[0.7rem] font-semibold text-dim mb-0.5">{link.label}</p>
                <p class="text-[0.82rem] font-medium text-ink">{link.value}</p>
              </div>
            </a>
          {/each}
        </div>
      </div>

    </div>

    <div use:fadeUp={200} class="mt-4 card p-4 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2 text-[0.78rem] text-dim">
        <svg class="w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Lalitpur, Nepal
      </div>
      <div class="flex items-center gap-2 text-[0.78rem] text-dim">
        <svg class="w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        Available for remote
      </div>
      <div class="flex items-center gap-2 text-[0.78rem] text-dim">
        <svg class="w-3.5 h-3.5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        English (C2)
      </div>
    </div>

  </div>
</section>

<style>
  .btn-primary {
    background: linear-gradient(135deg, var(--color-teal), var(--color-teal-dim));
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 20px color-mix(in srgb, var(--color-teal) 30%, transparent);
  }
  .btn-primary:active {
    transform: translateY(0);
  }
</style>
