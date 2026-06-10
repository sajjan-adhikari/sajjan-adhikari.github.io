<script>
  import { fadeUp } from '$lib/actions.js';

  const googleSvg = `<svg viewBox="0 0 24 24" width="26" height="26"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

  const ciscoSvg = `<svg viewBox="0 0 56 30" width="34" height="18"><rect x="0"    y="14" width="6" height="16" rx="1.5" fill="#1ba0d7"/><rect x="8.5"  y="8"  width="6" height="22" rx="1.5" fill="#1ba0d7"/><rect x="17"   y="3"  width="6" height="27" rx="1.5" fill="#1ba0d7"/><rect x="25"   y="0"  width="6" height="30" rx="1.5" fill="#1ba0d7"/><rect x="33"   y="3"  width="6" height="27" rx="1.5" fill="#1ba0d7"/><rect x="41.5" y="8"  width="6" height="22" rx="1.5" fill="#1ba0d7"/><rect x="50"   y="14" width="6" height="16" rx="1.5" fill="#1ba0d7"/></svg>`;

  const splunkSvg = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M5 5l6 7-6 7" stroke="#ff6b35" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5l6 7-6 7" stroke="#ff8c42" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const earned = [
    { 
      svg: googleSvg, 
      bg: 'bg-white/5', 
      name: 'Google Cybersecurity Professional Certificate', 
      issuer: 'Google',
      accent: 'hover:border-red-500/30'
    },
    { 
      svg: ciscoSvg,  
      bg: 'bg-[#1ba0d7]/8', 
      name: 'Junior Cybersecurity Analyst', 
      issuer: 'Cisco Networking Academy',
      accent: 'hover:border-[#1ba0d7]/35'
    },
    { 
      svg: splunkSvg, 
      bg: 'bg-[#ff6b35]/8', 
      name: 'Splunk Core Certified User', 
      issuer: 'Splunk',
      accent: 'hover:border-[#ff6b35]/35'
    },
    { 
      text: 'EF',     
      textClass: 'text-[1.1rem] font-bold text-purple', 
      bg: 'bg-purple/10',        
      name: 'EF SET English Certificate — C2 Proficient', 
      issuer: 'EF Standard English Test · Score: 72/100',
      accent: 'hover:border-purple/35'
    },
  ];

  const inProgress = [
    { 
      text: 'ISC²', 
      textClass: 'text-[0.9rem] font-bold text-cyan', 
      bg: 'bg-cyan/10',  
      name: 'Certified in Cybersecurity (CC)', 
      issuer: 'ISC²',
      accent: 'hover:border-cyan/35'
    },
    { 
      text: 'IBM',  
      textClass: 'text-[1.1rem] font-bold text-blue', 
      bg: 'bg-blue/10',  
      name: 'Cybersecurity Analyst Professional Certificate', 
      issuer: 'IBM',
      accent: 'hover:border-blue/35'
    },
  ];
</script>

<section id="certifications" class="py-28 bg-bg-alt">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUp class="mb-14">
      <p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Certifications</p>
      <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Credentials</h2>
    </div>

    <!-- Earned -->
    <div use:fadeUp={60} class="mb-14">
      <div class="flex items-center gap-3 mb-5">
        <span class="w-1.5 h-1.5 rounded-full bg-green"></span>
        <p class="text-[0.75rem] font-semibold text-green uppercase tracking-[0.14em]">Earned</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each earned as cert, i}
          <div
            use:fadeUp={80 + i * 55}
            class="bg-card border border-line rounded-2xl p-6 flex flex-col justify-between card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group {cert.accent}"
          >
            <div class="flex flex-col gap-4">
              <!-- Top Row: Logo & Status Tag -->
              <div class="flex items-start justify-between">
                <div class="w-12 h-12 rounded-xl {cert.bg} border border-line/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  {#if cert.svg}
                    {@html cert.svg}
                  {:else}
                    <span class={cert.textClass}>{cert.text}</span>
                  {/if}
                </div>
                
                <span class="inline-flex items-center gap-1 text-[0.65rem] font-bold text-green bg-green/10 border border-green/20 px-2.5 py-0.5 rounded-full">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="stroke-current"><polyline points="20 6 9 17 4 12"/></svg>
                  Verified
                </span>
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-[0.88rem] font-bold text-ink leading-snug mb-1">{cert.name}</h3>
                <p class="text-[0.75rem] text-dim">{cert.issuer}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- In Progress -->
    <div use:fadeUp={200}>
      <div class="flex items-center gap-3 mb-5">
        <span class="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-dot"></span>
        <p class="text-[0.75rem] font-semibold text-orange uppercase tracking-[0.14em]">In Progress</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each inProgress as cert, i}
          <div
            use:fadeUp={220 + i * 60}
            class="bg-card border border-line rounded-2xl p-6 flex flex-col justify-between card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group {cert.accent}"
          >
            <div class="flex flex-col gap-4">
              <!-- Top Row: Logo & Status Tag -->
              <div class="flex items-start justify-between">
                <div class="w-12 h-12 rounded-xl {cert.bg} border border-line/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <span class={cert.textClass}>{cert.text}</span>
                </div>
                
                <span class="inline-flex items-center gap-1.5 text-[0.65rem] font-bold text-orange bg-orange/10 border border-orange/20 px-2.5 py-0.5 rounded-full">
                  <span class="w-1 h-1 rounded-full bg-orange animate-pulse"></span>
                  In Progress
                </span>
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-[0.88rem] font-bold text-ink leading-snug mb-1">{cert.name}</h3>
                <p class="text-[0.75rem] text-dim">{cert.issuer}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
