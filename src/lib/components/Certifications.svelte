<script>
  import { fadeUp, fadeUpSpring } from '$lib/actions.js';

  const googleSvg = `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

  const ciscoSvg = `<svg viewBox="0 0 56 30" width="24" height="13"><rect x="0" y="14" width="6" height="16" rx="1.5" fill="#1ba0d7"/><rect x="8.5" y="8" width="6" height="22" rx="1.5" fill="#1ba0d7"/><rect x="17" y="3" width="6" height="27" rx="1.5" fill="#1ba0d7"/><rect x="25" y="0" width="6" height="30" rx="1.5" fill="#1ba0d7"/><rect x="33" y="3" width="6" height="27" rx="1.5" fill="#1ba0d7"/><rect x="41.5" y="8" width="6" height="22" rx="1.5" fill="#1ba0d7"/><rect x="50" y="14" width="6" height="16" rx="1.5" fill="#1ba0d7"/></svg>`;

  const splunkSvg = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none"><path d="M5 5l6 7-6 7" stroke="#ff6b35" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5l6 7-6 7" stroke="#ff8c42" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const earned = [
    { svg: googleSvg, name: 'Google Cybersecurity Certificate', issuer: 'Google' },
    { svg: ciscoSvg,  name: 'Junior Cybersecurity Analyst', issuer: 'Cisco' },
    { svg: splunkSvg, name: 'Splunk Core Certified User', issuer: 'Splunk' },
    { text: 'EF', name: 'EF SET C2 Proficient', issuer: 'EF SET' },
  ];

  const inProgress = [
    { text: 'ISC²', name: 'Certified in Cybersecurity (CC)', issuer: 'ISC²' },
    { text: 'IBM',  name: 'Cybersecurity Analyst Certificate', issuer: 'IBM' },
  ];
</script>

<section id="validation" class="section-alt py-16 md:py-28 bg-bg-alt">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUpSpring class="mb-14 max-w-[600px]">
      <p class="section-label">Industry validation</p>
      <h2 class="section-title">Certifications</h2>
      <p class="text-[0.92rem] text-muted mt-3 leading-relaxed">
        Industry certifications earned through rigorous training and examination.
      </p>
    </div>

    <div use:fadeUp={60} class="mb-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each earned as cert, i}
          <div use:fadeUpSpring={60 + i * 40} class="card p-5 flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-bg border border-line/60">
              {#if cert.svg}
                {@html cert.svg}
              {:else}
                <span class="text-[0.9rem] font-bold text-teal">{cert.text}</span>
              {/if}
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-[0.88rem] font-semibold text-ink leading-snug">{cert.name}</h3>
              <p class="text-[0.7rem] text-dim mt-px">{cert.issuer}</p>
            </div>
            <span class="shrink-0 text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-teal/50">Earned</span>
          </div>
        {/each}
      </div>
    </div>

    <div use:fadeUp={160}>
      <p class="text-[0.78rem] font-semibold text-dim uppercase tracking-wider mb-4">In progress</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[540px]">
        {#each inProgress as cert, i}
          <div use:fadeUpSpring={180 + i * 80} class="card p-5 flex items-center gap-4 opacity-70">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-bg border border-line/60">
              <span class="text-[0.9rem] font-bold text-orange">{cert.text}</span>
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="text-[0.88rem] font-semibold text-ink leading-snug">{cert.name}</h3>
              <p class="text-[0.7rem] text-dim mt-px">{cert.issuer}</p>
            </div>
            <span class="shrink-0 text-[0.5rem] font-semibold uppercase tracking-[0.12em] text-orange/50">In progress</span>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
