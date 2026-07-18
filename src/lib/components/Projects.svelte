<script>
  import { fadeUpSpring, fadeUpScale } from '$lib/actions.js';

  const typeColors = {
    SOC:       { bg: 'color-mix(in srgb, var(--color-teal) 15%, transparent)', text: 'var(--color-teal)' },
    Forensics: { bg: 'color-mix(in srgb, #f87171 15%, transparent)',           text: '#f87171' },
    IR:        { bg: 'color-mix(in srgb, #fb923c 15%, transparent)',           text: '#fb923c' },
    Offensive: { bg: 'color-mix(in srgb, #a78bfa 15%, transparent)',           text: '#a78bfa' },
    Recon:     { bg: 'color-mix(in srgb, #60a5fa 15%, transparent)',           text: '#60a5fa' },
    Defensive: { bg: 'color-mix(in srgb, #4ade80 15%, transparent)',           text: '#4ade80' },
  };

  const projects = [
    {
      type: 'SOC',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
      date: 'April 2026',
      title: 'SIEM & Threat Detection',
      sub: 'Splunk Enterprise &middot; SPL &middot; Log Analysis',
      desc: 'Wrote SPL queries against SSH auth logs to detect brute-force and password-spraying patterns. Built a detection dashboard with alert thresholds and documented findings in a SOC-style report.',
      tags: ['Splunk', 'SIEM', 'SPL', 'Blue Team'],
      github: 'https://github.com/sajjan-adhikari/splunk-failed-login-detection'
    },
    {
      type: 'Forensics',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      date: 'April 2026',
      title: 'Network Traffic Analysis',
      sub: 'Wireshark &middot; PCAP Forensics',
      desc: 'Multi-protocol PCAP forensics across DNS, FTP, TCP, UDP, and SMB — identifying plaintext credential exposure and TCP anomalies consistent with SOC triage workflows.',
      tags: ['Wireshark', 'PCAP', 'Network Forensics'],
      github: 'https://github.com/sajjan-adhikari/wireshark-network-analysis'
    },
    {
      type: 'IR',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
      date: 'May 2026',
      title: 'Linux CLI Log Parser',
      sub: 'SSH Brute Force Investigation',
      desc: 'Parsed <code>/var/log/auth.log</code> with grep, awk, and sort — no SIEM required. Extracted attacker IPs, enumerated 5 targeted usernames, and confirmed a password-spraying pattern.',
      tags: ['Linux CLI', 'Bash', 'Incident Response'],
      github: 'https://github.com/sajjan-adhikari/linux-cli-log-parser'
    },
    {
      type: 'Offensive',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      date: 'May 2026',
      title: 'Web App Pentesting',
      sub: 'DVWA &middot; Kali Linux &middot; OWASP Top 10',
      desc: 'Exploited SQLi, XSS, and Command Injection against DVWA — dumped MD5 hashes via union-based injection and achieved RCE through the web interface.',
      tags: ['DVWA', 'OWASP Top 10', 'SQLi / XSS', 'RCE'],
      github: 'https://github.com/sajjan-adhikari/dvwa-web-pentest'
    },
    {
      type: 'Recon',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      date: 'May 2026',
      title: 'Network Reconnaissance',
      sub: 'Nmap &middot; Service Enumeration',
      desc: 'Progressive Nmap scanning (ping → aggressive) identified two open ports with exposed service versions. Documented three security findings in a pentest report.',
      tags: ['Nmap', 'Enumeration', 'Pentest Report'],
      github: 'https://github.com/sajjan-adhikari/nmap-network-recon'
    },
    {
      type: 'Defensive',
      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8M8 15h8M8 7h8"/></svg>`,
      date: 'January 2026',
      title: 'Web Application Firewall',
      sub: 'Python &middot; Rule-Based Filtering',
      desc: 'Developed a rule-based WAF in Python that inspects incoming HTTP requests. Uses regex patterns to detect and block SQL injection and XSS payloads before they reach the backend.',
      tags: ['Python', 'WAF', 'Web Security'],
      github: 'https://github.com/sajjan-adhikari/projectwaf'
    }
  ];
</script>

<section id="proof" class="py-16 md:py-28 bg-bg">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUpScale class="mb-14 max-w-[600px]">
      <p class="section-label">Proof of work</p>
      <h2 class="section-title mb-3">Security projects</h2>
      <p class="text-[0.95rem] text-muted leading-relaxed">
        Hands-on lab work demonstrating real-world SOC and offensive security skills through structured, documented projects.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each projects as project, i}
        {@const row = Math.floor(i / 3)}
        <div use:fadeUpSpring={80 + row * 60} class="card p-5 flex flex-col justify-between group/project" class:lg:col-span-2={i === 0}>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-lg bg-bg border border-line flex items-center justify-center flex-shrink-0" style="color: {typeColors[project.type].text}">
                {@html project.icon}
              </div>
              <span class="text-[0.65rem] font-medium text-dim/60">{project.date}</span>
              <span class="text-[0.6rem] font-semibold px-2 py-0.5 rounded-full ml-auto" style="background: {typeColors[project.type].bg}; color: {typeColors[project.type].text}">{project.type}</span>
            </div>

            <div>
              {#if project.github}
                <a href={project.github} target="_blank" rel="noopener noreferrer" class="group/title" aria-label={`View ${project.title} code on GitHub`}>
                  <h3 class="text-[0.95rem] font-semibold text-ink group-hover/title:text-teal transition-colors duration-200">{project.title}</h3>
                </a>
              {:else}
                <h3 class="text-[0.95rem] font-semibold text-ink">{project.title}</h3>
              {/if}
              <p class="text-[0.72rem] text-dim mt-0.5">{@html project.sub}</p>
            </div>

            <p class="text-[0.85rem] text-muted leading-relaxed">{@html project.desc}</p>
          </div>

          <div class="flex items-center justify-between mt-4 pt-3 border-t border-line gap-3">
            <div class="flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <span class="tag text-[0.68rem] text-dim px-2">{tag}</span>
              {/each}
            </div>
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1 text-[0.75rem] font-medium text-dim hover:text-ink transition-colors flex-shrink-0"
                aria-label="View code on GitHub"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
