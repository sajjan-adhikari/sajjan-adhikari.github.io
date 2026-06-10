<script>
  import { fade } from 'svelte/transition';
  import { fadeUp } from '$lib/actions.js';

  const categories = [
    {
      label: 'Security Operations',
      sub: 'Monitoring, Detection, and Incident Triage',
      accent: 'cyan',
      iconBg: 'bg-cyan/10 border-cyan/20 text-cyan',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      skills: ['SOC Operations', 'Incident Response', 'Threat Detection', 'SIEM Monitoring', 'Log Analysis', 'Alert Triage'],
      tools: ['Splunk', 'Linux CLI', 'Bash'],
      practice: 'Wrote custom SPL queries against SSH authorization logs to identify authentication failures, brute-force timelines, and password-spraying threats. Built dashboards to track alerts and visualize metrics.'
    },
    {
      label: 'Offensive Security',
      sub: 'Penetration Testing and Vulnerability Assessment',
      accent: 'orange',
      iconBg: 'bg-orange/10 border-orange/20 text-orange',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4"/><path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z"/></svg>`,
      skills: ['OWASP Top 10', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Command Injection', 'Manual Pen Testing', 'Network Recon'],
      tools: ['DVWA', 'Kali Linux', 'Burp Suite', 'Nmap'],
      practice: 'Exploited common web application vulnerabilities like SQLi, XSS, and OS Command Injection in local sandbox targets. Achieved Remote Code Execution (RCE) and performed basic shell upgrades.'
    },
    {
      label: 'Networking & Systems',
      sub: 'Protocol Analysis and Infrastructure Security',
      accent: 'blue',
      iconBg: 'bg-blue/10 border-blue/20 text-blue',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      skills: ['Network Traffic Analysis', 'Linux Administration', 'Port Scanning', 'TCP/IP', 'Protocol Analysis'],
      tools: ['Wireshark', 'tcpdump', 'Nmap'],
      practice: 'Analyzed packet captures (PCAP) for DNS anomalies, plaintext credentials (FTP/HTTP), and abnormal TCP handshakes. Conducted progressive scans with Nmap to map service configurations.'
    },
    {
      label: 'Tools & Languages',
      sub: 'Development, Automation, and Security Toolset',
      accent: 'purple',
      iconBg: 'bg-purple/10 border-purple/20 text-purple',
      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      skills: ['Splunk SPL', 'Python Scripting', 'Bash Scripting', 'Git Version Control', 'Linux CLI', 'Markdown Reporting'],
      tools: ['Splunk', 'Python', 'Bash', 'Git', 'Linux CLI'],
      practice: 'Developed utility scripts for automated parsing and triage of log outputs. Utilized version control for code and reports, generating structured markdown files summarizing security findings.'
    }
  ];

  const accentClasses = {
    cyan: {
      text: 'text-cyan',
      border: 'border-cyan/30',
      bg: 'bg-cyan/10',
      bgActive: 'bg-cyan/5',
      borderActive: 'border-cyan/20',
      badge: 'bg-cyan/10 border-cyan/20 text-cyan',
      glow: 'bg-cyan',
      bullet: 'bg-cyan'
    },
    orange: {
      text: 'text-orange',
      border: 'border-orange/30',
      bg: 'bg-orange/10',
      bgActive: 'bg-orange/5',
      borderActive: 'border-orange/20',
      badge: 'bg-orange/10 border-orange/20 text-orange',
      glow: 'bg-orange',
      bullet: 'bg-orange'
    },
    blue: {
      text: 'text-blue',
      border: 'border-blue/30',
      bg: 'bg-blue/10',
      bgActive: 'bg-blue/5',
      borderActive: 'border-blue/20',
      badge: 'bg-blue/10 border-blue/20 text-blue',
      glow: 'bg-blue',
      bullet: 'bg-blue'
    },
    purple: {
      text: 'text-purple',
      border: 'border-purple/30',
      bg: 'bg-purple/10',
      bgActive: 'bg-purple/5',
      borderActive: 'border-purple/20',
      badge: 'bg-purple/10 border-purple/20 text-purple',
      glow: 'bg-purple',
      bullet: 'bg-purple'
    }
  };

  let activeIndex = $state(0);
  let activeTab = $derived(categories[activeIndex]);
</script>

<section id="skills" class="py-28 bg-bg-alt">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUp class="mb-14">
      <p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Skills</p>
      <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Technical Expertise</h2>
    </div>

    <!-- Dashboard Layout -->
    <div use:fadeUp={80} class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
      
      <!-- Tabs Sidebar (Desktop: vertical, Mobile: horizontal-scroll) -->
      <div 
        class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none border-b border-line lg:border-b-0 w-full"
        role="tablist"
        aria-label="Technical expertise categories"
      >
        {#each categories as cat, i}
          <button
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls="panel-{i}"
            id="tab-{i}"
            onclick={() => activeIndex = i}
            class="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink w-auto lg:w-full group cursor-pointer
              {i === activeIndex 
                ? `bg-card ${accentClasses[cat.accent].border} text-ink shadow-[0_0_15px_rgba(0,0,0,0.2)]` 
                : 'bg-transparent border-transparent text-dim hover:text-ink hover:bg-card/45'}"
          >
            <!-- Icon -->
            <div class="w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors duration-200
              {i === activeIndex 
                ? cat.iconBg 
                : 'bg-card border-line text-dim group-hover:text-ink'}">
              {@html cat.icon}
            </div>
            
            <!-- Labels -->
            <div class="flex flex-col gap-0.5 text-left">
              <span class="text-[0.88rem] font-semibold transition-colors duration-200
                {i === activeIndex ? accentClasses[cat.accent].text : 'text-dim group-hover:text-ink'}">
                {cat.label}
              </span>
              <span class="hidden lg:block text-[0.7rem] text-dim/60 font-medium">
                {cat.sub.split(',')[0]}
              </span>
            </div>
          </button>
        {/each}
      </div>

      <!-- Details Panel -->
      <div class="min-h-[380px] relative w-full">
        {#key activeIndex}
          <div
            role="tabpanel"
            id="panel-{activeIndex}"
            aria-labelledby="tab-{activeIndex}"
            in:fade={{ duration: 220 }}
            class="bg-card border border-line rounded-2xl p-6 md:p-8 card-shadow flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:card-shadow-hover"
          >
            <!-- Decorative Accent Tonal Glow -->
            <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-35 {accentClasses[activeTab.accent].glow}"></div>

            <div class="flex flex-col gap-1 pb-4 border-b border-line">
              <h3 class="text-[1.35rem] font-bold text-ink tracking-tight">{activeTab.label}</h3>
              <p class="text-[0.82rem] text-dim font-medium">{activeTab.sub}</p>
            </div>

            <!-- Section: Core Competencies -->
            <div>
              <p class="text-[0.7rem] font-semibold text-dim uppercase tracking-[0.14em] mb-3">Core Competencies</p>
              <div class="flex flex-wrap gap-2">
                {#each activeTab.skills as skill}
                  <span class="text-[0.78rem] font-medium text-muted bg-bg border border-line px-3 py-1.5 rounded-lg hover:text-ink hover:border-muted/40 transition-all duration-150 cursor-default">
                    {skill}
                  </span>
                {/each}
              </div>
            </div>

            <!-- Grid of Applied Practice and Tools -->
            <div class="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 pt-2">
              
              <!-- Left: Applied Practice -->
              <div class="bg-bg/40 border {accentClasses[activeTab.accent].borderActive} rounded-xl p-5 flex flex-col gap-2.5">
                <p class="text-[0.7rem] font-semibold {accentClasses[activeTab.accent].text} uppercase tracking-[0.14em]">Hands-On Application</p>
                <p class="text-[0.85rem] text-muted leading-relaxed">{activeTab.practice}</p>
              </div>

              <!-- Right: Toolkit -->
              <div class="bg-bg/40 border {accentClasses[activeTab.accent].borderActive} rounded-xl p-5 flex flex-col gap-3">
                <p class="text-[0.7rem] font-semibold {accentClasses[activeTab.accent].text} uppercase tracking-[0.14em]">Primary Toolkit</p>
                <div class="flex flex-col gap-2">
                  {#each activeTab.tools as tool}
                    <div class="flex items-center gap-2.5 font-mono text-[0.82rem] font-medium text-muted">
                      <div class="w-1.5 h-1.5 rounded-full {accentClasses[activeTab.accent].bullet}"></div>
                      <span>{tool}</span>
                    </div>
                  {/each}
                </div>
              </div>

            </div>

          </div>
        {/key}
      </div>

    </div>

  </div>
</section>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-none {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
