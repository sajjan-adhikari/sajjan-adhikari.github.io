<script>
  import { fadeUp } from '$lib/actions.js';

  const projects = [
    {
      accent: '#60a5fa',
      color: 'text-blue bg-blue/10 border-blue/25',
      hoverBorder: 'hover:border-blue/35',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
      date: 'Apr 2026',
      title: 'SIEM & Threat Detection',
      sub: 'Splunk Enterprise · SPL · Log Analysis',
      desc: 'Wrote SPL queries against SSH auth logs to detect brute-force and password-spraying patterns. Built a detection dashboard with alert thresholds and documented findings in a SOC-style report.',
      tags: ['Splunk', 'SIEM', 'SPL', 'Blue Team'],
      github: 'https://github.com/sajjan-adhikari/splunk-failed-login-detection'
    },
    {
      accent: '#00e5ff',
      color: 'text-cyan bg-cyan/10 border-cyan/25',
      hoverBorder: 'hover:border-cyan/40',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      date: 'Apr 2026',
      title: 'Network Traffic Analysis',
      sub: 'Wireshark · PCAP Forensics · Multi-Protocol',
      desc: 'Multi-protocol PCAP forensics with Wireshark across DNS, FTP, TCP, UDP, and SMB — identifying FTP plaintext credential exposure and TCP anomalies consistent with real SOC triage.',
      tags: ['Wireshark', 'PCAP', 'Network Forensics'],
      github: 'https://github.com/sajjan-adhikari/wireshark-network-analysis'
    },
    {
      accent: '#00ff88',
      color: 'text-green bg-green/10 border-green/25',
      hoverBorder: 'hover:border-green/40',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
      date: 'May 2026',
      title: 'Linux CLI Log Parser',
      sub: 'SSH Brute Force Investigation · Bash · grep / awk',
      desc: 'Parsed <code>/var/log/auth.log</code> with grep, awk, and sort — no SIEM required. Extracted attacker IPs, enumerated 5 targeted usernames, and confirmed a password-spraying pattern.',
      tags: ['Linux CLI', 'Bash', 'Incident Response'],
      github: 'https://github.com/sajjan-adhikari/linux-cli-log-parser'
    },
    {
      accent: '#ff8c42',
      color: 'text-orange bg-orange/10 border-orange/25',
      hoverBorder: 'hover:border-orange/35',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      date: 'May 2026',
      title: 'Web Application Penetration Testing',
      sub: 'DVWA · Kali Linux · OWASP Top 10',
      desc: 'Exploited SQLi, XSS, and Command Injection against DVWA — dumped MD5 hashes via union-based injection and achieved RCE by executing system commands through the web interface.',
      tags: ['DVWA', 'OWASP Top 10', 'SQLi / XSS', 'RCE'],
      github: 'https://github.com/sajjan-adhikari/dvwa-web-pentest'
    },
    {
      accent: '#a78bfa',
      color: 'text-purple bg-purple/10 border-purple/25',
      hoverBorder: 'hover:border-purple/35',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      date: 'May 2026',
      title: 'Network Reconnaissance',
      sub: 'Nmap · Service Enumeration · Pentest Reporting',
      desc: 'Progressive Nmap scanning (ping → aggressive) identified two open ports with exposed service versions. Documented three security findings in a penetration test report.',
      tags: ['Nmap', 'Enumeration', 'Pentest Report'],
      github: 'https://github.com/sajjan-adhikari/nmap-network-recon'
    },
    {
      accent: '#f43f5e',
      color: 'text-[#f43f5e] bg-[#f43f5e]/10 border-[#f43f5e]/25',
      hoverBorder: 'hover:border-[#f43f5e]/35',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8M8 15h8M8 7h8"/></svg>`,
      date: 'Jan 2026',
      title: 'Web Application Firewall (WAF)',
      sub: 'Python · Rule-Based Filtering · HTTP Inspection',
      desc: 'Developed a rule-based WAF in Python to inspect incoming HTTP requests. Features regex patterns to detect and block SQL injection and XSS payloads before they reach the backend.',
      tags: ['Python', 'WAF', 'Web Security'],
      github: 'https://github.com/sajjan-adhikari/projectwaf'
    }
  ];
</script>

<section id="projects" class="py-28 bg-bg">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUp class="mb-14">
      <p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Projects</p>
      <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em] mb-2">Security Projects</h2>
      <p class="text-[0.95rem] text-muted">Hands-on lab work demonstrating real-world SOC and offensive security skills</p>
    </div>

    <!-- Responsive Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, i}
        <div
          use:fadeUp={i * 65}
          class="bg-card border border-line rounded-2xl p-6 md:p-7 card-shadow flex flex-col justify-between hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 {project.hoverBorder} group"
        >
          <div class="flex flex-col gap-4">
            <!-- Header: Icon & Date -->
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 {project.color}">
                {@html project.icon}
              </div>
              <span class="text-[0.72rem] font-medium text-dim">{project.date}</span>
            </div>

            <!-- Title & Subtitle -->
            <div>
              <h3 class="text-[1.12rem] font-bold text-ink tracking-tight mb-1">{project.title}</h3>
              <p class="text-[0.78rem] font-semibold text-cyan">{project.sub}</p>
            </div>

            <!-- Description -->
            <p class="text-[0.88rem] text-muted leading-relaxed">{@html project.desc}</p>
          </div>

          <!-- Tags & Code Link Footer -->
          <div class="flex items-center justify-between mt-6 pt-4 border-t border-line/30 gap-4">
            <div class="flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <span class="text-[0.68rem] font-medium text-dim bg-bg border border-line px-2.5 py-0.5 rounded-full">{tag}</span>
              {/each}
            </div>
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 text-[0.78rem] font-bold text-ink hover:text-cyan transition-colors flex-shrink-0 group/link"
                aria-label="View code on GitHub"
              >
                <span>Code</span>
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  class="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
