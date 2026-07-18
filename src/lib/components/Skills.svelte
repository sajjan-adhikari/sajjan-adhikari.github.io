<script>
  import { fadeUp, fadeUpSpring } from '$lib/actions.js';

  const categories = [
    {
      label: 'Security Operations',
      icon: 'shield',
      skills: ['SOC Operations', 'Incident Response', 'Threat Detection', 'SIEM Monitoring', 'Log Analysis', 'Alert Triage'],
      tools: ['Splunk', 'Linux CLI', 'Bash'],
    },
    {
      label: 'Offensive Security',
      icon: 'target',
      skills: ['OWASP Top 10', 'SQL Injection', 'XSS', 'Command Injection', 'Manual Pen Testing', 'Network Recon'],
      tools: ['DVWA', 'Kali Linux', 'Burp Suite', 'Nmap'],
    },
    {
      label: 'Networking & Systems',
      icon: 'network',
      skills: ['Network Traffic Analysis', 'Linux Administration', 'Port Scanning', 'TCP/IP', 'Protocol Analysis'],
      tools: ['Wireshark', 'tcpdump', 'Nmap'],
    },
    {
      label: 'Tools & Languages',
      icon: 'code',
      skills: ['Splunk SPL', 'Python Scripting', 'Bash Scripting', 'Git', 'Linux CLI', 'Markdown Reporting'],
      tools: ['Splunk', 'Python', 'Bash', 'Git', 'Linux CLI'],
    },
  ];

  const icons = {
    shield: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    target: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    network: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>',
    code: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  };
</script>

<section id="deliver" class="section-alt py-16 md:py-28 bg-bg-alt">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUpSpring class="mb-14 max-w-[600px]">
      <p class="section-label">What I deliver</p>
      <h2 class="section-title">Technical capabilities</h2>
      <p class="text-[0.92rem] text-muted mt-3 leading-relaxed">
        Core competencies built through hands-on labs, certifications, and real-world practice in security operations and beyond.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each categories as cat, i}
        {@const row = Math.floor(i / 2)}
        <div use:fadeUpSpring={80 + row * 80} class="card p-5 flex flex-col relative overflow-hidden">
          <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-teal/0 via-teal/25 to-teal/0"></div>
          <div class="flex items-center gap-2.5 mb-4 pb-3 border-b border-line/60">
            <span class="w-9 h-9 rounded-xl bg-teal/12 border border-teal/15 flex items-center justify-center text-teal flex-shrink-0">
              {@html icons[cat.icon]}
            </span>
            <h3 class="text-[0.95rem] font-bold text-ink">{cat.label}</h3>
            <span class="ml-auto text-[0.65rem] font-semibold text-dim/70 tabular-nums">0{i + 1}</span>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-auto">
            {#each cat.skills as skill, j}
              <span
                use:fadeUp={80 + row * 80 + j * 25}
                class="inline-flex items-center px-2.5 py-1 rounded-md text-[0.78rem] font-medium text-muted bg-bg border border-line/60 hover:border-teal/30 hover:text-ink transition-colors duration-200 cursor-default"
              >{skill}</span>
            {/each}
          </div>

          {#if cat.tools.length}
            <div class="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-line/60 text-[0.7rem]">
              <span class="font-semibold text-dim/40 uppercase tracking-wider mr-0.5 text-[0.65rem]">tools</span>
              <div class="flex flex-wrap items-center gap-1.5">
                {#each cat.tools as tool, j}
                  <code class="text-[0.72rem] text-teal/70 bg-teal/5 border border-teal/10 px-1.5 py-0.5 rounded">{tool}</code>
                {/each}
              </div>
              <span class="ml-auto text-[0.6rem] text-dim/60 tabular-nums">{cat.skills.length} skills</span>
            </div>
          {/if}
        </div>
      {/each}
    </div>

  </div>
</section>
