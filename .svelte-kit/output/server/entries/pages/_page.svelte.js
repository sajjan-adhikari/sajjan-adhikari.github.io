import "../../chunks/index-server.js";
import { B as clsx, V as escape_html, a as ensure_array_like, c as stringify, i as derived, l as html, n as attr_class, o as head, r as attr_style, z as attr } from "../../chunks/dev.js";
//#region src/lib/components/Nav.svelte
function Nav($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let menuOpen = false;
		$$renderer.push(`<nav class="fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-200"${attr_style("", {
			background: "rgba(28,27,31,0.7)",
			"border-bottom": "1px solid transparent",
			"backdrop-filter": "blur(20px)"
		})}><div class="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between"><a href="#hero" class="text-[1rem] font-bold text-ink tracking-tight group"><span class="text-cyan">[</span>SA<span class="text-cyan">]</span></a> <button${attr_class("nav-toggle", void 0, { "open": menuOpen })} aria-label="Toggle menu"${attr("aria-expanded", menuOpen)}><span class="block w-[22px] h-0.5 bg-muted rounded-sm transition-transform duration-200"></span> <span class="block w-[22px] h-0.5 bg-muted rounded-sm transition-all duration-200"></span> <span class="block w-[22px] h-0.5 bg-muted rounded-sm transition-transform duration-200"></span></button> <ul${attr_class("nav-links flex items-center gap-1", void 0, { "open": menuOpen })}><!--[-->`);
		const each_array = ensure_array_like([
			{
				href: "#about",
				label: "About"
			},
			{
				href: "#education",
				label: "Education"
			},
			{
				href: "#skills",
				label: "Skills"
			},
			{
				href: "#projects",
				label: "Projects"
			},
			{
				href: "#certifications",
				label: "Certifications"
			}
		]);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let link = each_array[$$index];
			$$renderer.push(`<li><a${attr("href", link.href)} class="text-[0.85rem] font-medium text-muted px-3 py-2 rounded-lg hover:text-ink hover:bg-card transition-all duration-150">${escape_html(link.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--> <li class="ml-2"><a href="#contact" class="nav-cta text-[0.85rem] font-semibold text-black bg-cyan px-4 py-2 rounded-lg hover:bg-cyan-dim transition-colors duration-200">Contact</a></li></ul></div></nav>`);
	});
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer) {
	const socials = [
		{
			label: "GitHub",
			href: "https://github.com/Sajjan-Adhikari",
			icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
		},
		{
			label: "LinkedIn",
			href: "https://linkedin.com/in/sajjan-adhikari",
			icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
		},
		{
			label: "Email",
			href: "mailto:sajjanadhikari0@gmail.com",
			icon: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
		}
	];
	const focusAreas = [
		"SIEM & Log Analysis",
		"Threat Detection",
		"Network Forensics",
		"Incident Response",
		"Vulnerability Assessment"
	];
	const stats = [
		{
			num: "6",
			label: "Projects"
		},
		{
			num: "4+",
			label: "Certifications"
		},
		{
			num: "C2",
			label: "English Level"
		},
		{
			num: "NPL",
			label: "Based in Nepal"
		}
	];
	$$renderer.push(`<section id="hero" class="relative min-h-screen flex items-center bg-bg overflow-hidden pt-16"><div class="hero-grid"></div> <div class="hero-glow"></div> <div class="max-w-[1100px] mx-auto px-6 py-24 relative z-10 w-full"><div class="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center"><div><div class="inline-flex items-center gap-2 bg-card border border-line rounded-full px-4 py-1.5 mb-10 card-shadow"><span class="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot"></span> <span class="text-[0.78rem] text-muted">Available for opportunities · Lalitpur, Nepal</span></div> <h1 class="text-[clamp(3rem,6.5vw,5rem)] font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-5">Sajjan<br/>Adhikari</h1> <p class="text-[1rem] font-semibold text-cyan mb-6 tracking-[0.02em]">SOC Analyst  ·  Threat Detection  ·  Incident Response</p> <p class="text-[0.97rem] text-muted leading-[1.85] max-w-[500px] mb-10">Cybersecurity student building hands-on expertise in SIEM operations, log forensics,
          and blue team workflows through structured lab work and industry certifications.</p> <div class="flex flex-wrap gap-3 mb-12"><a href="#projects" class="inline-flex items-center gap-2 bg-cyan text-black font-semibold text-[0.88rem] px-6 py-2.5 rounded-lg hover:bg-cyan-dim transition-colors duration-200">View Projects</a> <a href="#contact" class="inline-flex items-center gap-2 text-ink text-[0.88rem] font-medium border border-line px-6 py-2.5 rounded-lg hover:bg-card hover:border-muted/40 transition-all duration-200">Get in Touch</a></div> <div class="flex items-center gap-2"><!--[-->`);
	const each_array = ensure_array_like(socials);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let s = each_array[$$index];
		$$renderer.push(`<a${attr("href", s.href)}${attr("target", s.href.startsWith("http") ? "_blank" : void 0)}${attr("rel", s.href.startsWith("http") ? "noopener noreferrer" : void 0)}${attr("aria-label", s.label)} class="w-10 h-10 rounded-lg flex items-center justify-center text-dim hover:text-ink hover:bg-card border border-transparent hover:border-line transition-all duration-200">${html(s.icon)}</a>`);
	}
	$$renderer.push(`<!--]--></div></div> <div class="hidden lg:flex flex-col gap-4"><div class="bg-card border border-line rounded-2xl p-5 card-shadow"><p class="text-[0.68rem] font-semibold text-dim uppercase tracking-[0.14em] mb-4">Focus Areas</p> <div class="flex flex-col gap-0"><!--[-->`);
	const each_array_1 = ensure_array_like(focusAreas);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let area = each_array_1[$$index_1];
		$$renderer.push(`<div class="flex items-center gap-3 py-2.5 border-b border-line last:border-0"><div class="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0"></div> <span class="text-[0.85rem] text-muted">${escape_html(area)}</span></div>`);
	}
	$$renderer.push(`<!--]--></div></div> <div class="bg-card border border-line rounded-2xl p-5 card-shadow"><p class="text-[0.68rem] font-semibold text-dim uppercase tracking-[0.14em] mb-4">At a Glance</p> <div class="grid grid-cols-2 gap-4"><!--[-->`);
	const each_array_2 = ensure_array_like(stats);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let s = each_array_2[$$index_2];
		$$renderer.push(`<div><div class="text-[1.6rem] font-bold text-cyan leading-none mb-0.5">${escape_html(s.num)}</div> <div class="text-[0.73rem] text-dim">${escape_html(s.label)}</div></div>`);
	}
	$$renderer.push(`<!--]--></div></div></div></div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"><span class="text-[0.62rem] tracking-[0.2em] text-dim/50 uppercase">Scroll</span> <div class="w-px h-10 bg-line relative overflow-hidden"><div class="absolute inset-0 bg-cyan animate-scroll-line"></div></div></div></section>`);
}
//#endregion
//#region src/lib/components/About.svelte
function About($$renderer) {
	$$renderer.push(`<section id="about" class="py-28 bg-bg-alt"><div class="max-w-[760px] mx-auto px-6"><div class="mb-12"><p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">About</p> <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Who I Am</h2></div> <div class="flex flex-col gap-6 text-[1.05rem] text-muted leading-[1.9]"><p>I'm a BSc. CSIT student at Patan Multiple Campus with a focused interest in <span class="text-ink font-semibold">security operations and incident response</span>.
        My approach combines formal education with deliberate hands-on practice.</p> <p>Good defence requires understanding how attackers operate. I complement blue-team skills —
        SIEM monitoring, log analysis, threat detection — with offensive fundamentals covering <span class="text-ink font-semibold">OWASP Top 10</span>, manual pen testing, and network reconnaissance.</p> <p>Currently pursuing <span class="text-ink font-semibold">ISC² CC</span> and <span class="text-ink font-semibold">IBM Cybersecurity Analyst</span> certifications alongside
        active project work to build a demonstrable, job-ready portfolio.</p></div></div></section>`);
}
//#endregion
//#region src/lib/components/Education.svelte
function Education($$renderer) {
	$$renderer.push(`<section id="education" class="py-28 bg-bg"><div class="max-w-[1100px] mx-auto px-6"><div class="mb-14"><p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Education</p> <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Academic Background</h2></div> <div class="edu-timeline flex flex-col gap-6"><div class="relative"><div class="absolute -left-[calc(2rem+1px)] top-6 w-3 h-3 rounded-full bg-cyan border-2 border-bg"></div> <div class="bg-card border border-line rounded-2xl p-7 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4"><div><h3 class="text-[1rem] font-semibold text-ink mb-1">BSc. CSIT — Computer Science &amp; Information Technology</h3> <p class="text-[0.85rem] text-muted">Patan Multiple Campus · Lalitpur, Nepal</p></div> <span class="self-start text-[0.72rem] font-medium text-cyan bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full whitespace-nowrap">Jan 2023 – Present</span></div> <p class="text-[0.85rem] text-dim leading-relaxed mb-4">Relevant coursework: Computer Networks · Operating Systems · Cryptography · Data Structures · Database Systems</p> <div class="flex flex-wrap gap-2"><!--[-->`);
	const each_array = ensure_array_like([
		"Computer Science",
		"Information Technology",
		"Cybersecurity Focus"
	]);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let tag = each_array[$$index];
		$$renderer.push(`<span class="text-[0.72rem] text-muted bg-bg border border-line px-3 py-1 rounded-full">${escape_html(tag)}</span>`);
	}
	$$renderer.push(`<!--]--></div></div></div> <div class="relative"><div class="absolute -left-[calc(2rem+1px)] top-6 w-3 h-3 rounded-full bg-line border-2 border-bg"></div> <div class="bg-card border border-line rounded-2xl p-7 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300"><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4"><div><h3 class="text-[1rem] font-semibold text-ink mb-1">Senior Secondary (+2) — Computer Science</h3> <p class="text-[0.85rem] text-muted">Trinity International College · Kathmandu, Nepal</p></div> <span class="self-start text-[0.72rem] font-medium text-muted bg-card border border-line px-3 py-1 rounded-full whitespace-nowrap">Dec 2022</span></div> <p class="text-[0.85rem] text-dim leading-relaxed mb-4">Science stream with Computer Science · Physics, Chemistry, Mathematics</p> <div class="flex flex-wrap gap-2"><!--[-->`);
	const each_array_1 = ensure_array_like(["GPA: 3.47 / 4.0", "Science Stream"]);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let tag = each_array_1[$$index_1];
		$$renderer.push(`<span class="text-[0.72rem] text-muted bg-bg border border-line px-3 py-1 rounded-full">${escape_html(tag)}</span>`);
	}
	$$renderer.push(`<!--]--></div></div></div></div></div></section>`);
}
//#endregion
//#region src/lib/components/Skills.svelte
function Skills($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const categories = [
			{
				label: "Security Operations",
				sub: "Monitoring, Detection, and Incident Triage",
				accent: "cyan",
				iconBg: "bg-cyan/10 border-cyan/20 text-cyan",
				icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
				skills: [
					"SOC Operations",
					"Incident Response",
					"Threat Detection",
					"SIEM Monitoring",
					"Log Analysis",
					"Alert Triage"
				],
				tools: [
					"Splunk",
					"Linux CLI",
					"Bash"
				],
				practice: "Wrote custom SPL queries against SSH authorization logs to identify authentication failures, brute-force timelines, and password-spraying threats. Built dashboards to track alerts and visualize metrics."
			},
			{
				label: "Offensive Security",
				sub: "Penetration Testing and Vulnerability Assessment",
				accent: "orange",
				iconBg: "bg-orange/10 border-orange/20 text-orange",
				icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4"/><path d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622C17.176 19.29 21 14.591 21 9a12.02 12.02 0 00-.382-3.016z"/></svg>`,
				skills: [
					"OWASP Top 10",
					"SQL Injection",
					"Cross-Site Scripting (XSS)",
					"Command Injection",
					"Manual Pen Testing",
					"Network Recon"
				],
				tools: [
					"DVWA",
					"Kali Linux",
					"Burp Suite",
					"Nmap"
				],
				practice: "Exploited common web application vulnerabilities like SQLi, XSS, and OS Command Injection in local sandbox targets. Achieved Remote Code Execution (RCE) and performed basic shell upgrades."
			},
			{
				label: "Networking & Systems",
				sub: "Protocol Analysis and Infrastructure Security",
				accent: "blue",
				iconBg: "bg-blue/10 border-blue/20 text-blue",
				icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
				skills: [
					"Network Traffic Analysis",
					"Linux Administration",
					"Port Scanning",
					"TCP/IP",
					"Protocol Analysis"
				],
				tools: [
					"Wireshark",
					"tcpdump",
					"Nmap"
				],
				practice: "Analyzed packet captures (PCAP) for DNS anomalies, plaintext credentials (FTP/HTTP), and abnormal TCP handshakes. Conducted progressive scans with Nmap to map service configurations."
			},
			{
				label: "Tools & Languages",
				sub: "Development, Automation, and Security Toolset",
				accent: "purple",
				iconBg: "bg-purple/10 border-purple/20 text-purple",
				icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
				skills: [
					"Splunk SPL",
					"Python Scripting",
					"Bash Scripting",
					"Git Version Control",
					"Linux CLI",
					"Markdown Reporting"
				],
				tools: [
					"Splunk",
					"Python",
					"Bash",
					"Git",
					"Linux CLI"
				],
				practice: "Developed utility scripts for automated parsing and triage of log outputs. Utilized version control for code and reports, generating structured markdown files summarizing security findings."
			}
		];
		const accentClasses = {
			cyan: {
				text: "text-cyan",
				border: "border-cyan/30",
				bg: "bg-cyan/10",
				bgActive: "bg-cyan/5",
				borderActive: "border-cyan/20",
				badge: "bg-cyan/10 border-cyan/20 text-cyan",
				glow: "bg-cyan",
				bullet: "bg-cyan"
			},
			orange: {
				text: "text-orange",
				border: "border-orange/30",
				bg: "bg-orange/10",
				bgActive: "bg-orange/5",
				borderActive: "border-orange/20",
				badge: "bg-orange/10 border-orange/20 text-orange",
				glow: "bg-orange",
				bullet: "bg-orange"
			},
			blue: {
				text: "text-blue",
				border: "border-blue/30",
				bg: "bg-blue/10",
				bgActive: "bg-blue/5",
				borderActive: "border-blue/20",
				badge: "bg-blue/10 border-blue/20 text-blue",
				glow: "bg-blue",
				bullet: "bg-blue"
			},
			purple: {
				text: "text-purple",
				border: "border-purple/30",
				bg: "bg-purple/10",
				bgActive: "bg-purple/5",
				borderActive: "border-purple/20",
				badge: "bg-purple/10 border-purple/20 text-purple",
				glow: "bg-purple",
				bullet: "bg-purple"
			}
		};
		let activeIndex = 0;
		let activeTab = derived(() => categories[activeIndex]);
		$$renderer.push(`<section id="skills" class="py-28 bg-bg-alt"><div class="max-w-[1100px] mx-auto px-6"><div class="mb-14"><p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Skills</p> <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Technical Expertise</h2></div> <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start"><div class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none border-b border-line lg:border-b-0 w-full svelte-1f1pl16" role="tablist" aria-label="Technical expertise categories"><!--[-->`);
		const each_array = ensure_array_like(categories);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let cat = each_array[i];
			$$renderer.push(`<button role="tab"${attr("aria-selected", i === activeIndex)}${attr("aria-controls", `panel-${stringify(i)}`)}${attr("id", `tab-${stringify(i)}`)}${attr_class(`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink w-auto lg:w-full group cursor-pointer ${i === activeIndex ? `bg-card ${accentClasses[cat.accent].border} text-ink shadow-[0_0_15px_rgba(0,0,0,0.2)]` : "bg-transparent border-transparent text-dim hover:text-ink hover:bg-card/45"}`, "svelte-1f1pl16")}><div${attr_class(`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${stringify(i === activeIndex ? cat.iconBg : "bg-card border-line text-dim group-hover:text-ink")}`, "svelte-1f1pl16")}>${html(cat.icon)}</div> <div class="flex flex-col gap-0.5 text-left"><span${attr_class(`text-[0.88rem] font-semibold transition-colors duration-200 ${stringify(i === activeIndex ? accentClasses[cat.accent].text : "text-dim group-hover:text-ink")}`, "svelte-1f1pl16")}>${escape_html(cat.label)}</span> <span class="hidden lg:block text-[0.7rem] text-dim/60 font-medium">${escape_html(cat.sub.split(",")[0])}</span></div></button>`);
		}
		$$renderer.push(`<!--]--></div> <div class="min-h-[380px] relative w-full"><!---->`);
		{
			$$renderer.push(`<div role="tabpanel"${attr("id", `panel-${stringify(activeIndex)}`)}${attr("aria-labelledby", `tab-${stringify(activeIndex)}`)} class="bg-card border border-line rounded-2xl p-6 md:p-8 card-shadow flex flex-col gap-6 relative overflow-hidden transition-all duration-300 hover:card-shadow-hover"><div${attr_class(`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-35 ${stringify(accentClasses[activeTab().accent].glow)}`, "svelte-1f1pl16")}></div> <div class="flex flex-col gap-1 pb-4 border-b border-line"><h3 class="text-[1.35rem] font-bold text-ink tracking-tight">${escape_html(activeTab().label)}</h3> <p class="text-[0.82rem] text-dim font-medium">${escape_html(activeTab().sub)}</p></div> <div><p class="text-[0.7rem] font-semibold text-dim uppercase tracking-[0.14em] mb-3">Core Competencies</p> <div class="flex flex-wrap gap-2"><!--[-->`);
			const each_array_1 = ensure_array_like(activeTab().skills);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let skill = each_array_1[$$index_1];
				$$renderer.push(`<span class="text-[0.78rem] font-medium text-muted bg-bg border border-line px-3 py-1.5 rounded-lg hover:text-ink hover:border-muted/40 transition-all duration-150 cursor-default">${escape_html(skill)}</span>`);
			}
			$$renderer.push(`<!--]--></div></div> <div class="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 pt-2"><div${attr_class(`bg-bg/40 border ${stringify(accentClasses[activeTab().accent].borderActive)} rounded-xl p-5 flex flex-col gap-2.5`, "svelte-1f1pl16")}><p${attr_class(`text-[0.7rem] font-semibold ${stringify(accentClasses[activeTab().accent].text)} uppercase tracking-[0.14em]`, "svelte-1f1pl16")}>Hands-On Application</p> <p class="text-[0.85rem] text-muted leading-relaxed">${escape_html(activeTab().practice)}</p></div> <div${attr_class(`bg-bg/40 border ${stringify(accentClasses[activeTab().accent].borderActive)} rounded-xl p-5 flex flex-col gap-3`, "svelte-1f1pl16")}><p${attr_class(`text-[0.7rem] font-semibold ${stringify(accentClasses[activeTab().accent].text)} uppercase tracking-[0.14em]`, "svelte-1f1pl16")}>Primary Toolkit</p> <div class="flex flex-col gap-2"><!--[-->`);
			const each_array_2 = ensure_array_like(activeTab().tools);
			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let tool = each_array_2[$$index_2];
				$$renderer.push(`<div class="flex items-center gap-2.5 font-mono text-[0.82rem] font-medium text-muted"><div${attr_class(`w-1.5 h-1.5 rounded-full ${stringify(accentClasses[activeTab().accent].bullet)}`, "svelte-1f1pl16")}></div> <span>${escape_html(tool)}</span></div>`);
			}
			$$renderer.push(`<!--]--></div></div></div></div>`);
		}
		$$renderer.push(`<!----></div></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/Projects.svelte
function Projects($$renderer) {
	const projects = [
		{
			accent: "#60a5fa",
			color: "text-blue bg-blue/10 border-blue/25",
			hoverBorder: "hover:border-blue/35",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
			date: "Apr 2026",
			title: "SIEM & Threat Detection",
			sub: "Splunk Enterprise · SPL · Log Analysis",
			desc: "Wrote SPL queries against SSH auth logs to detect brute-force and password-spraying patterns. Built a detection dashboard with alert thresholds and documented findings in a SOC-style report.",
			tags: [
				"Splunk",
				"SIEM",
				"SPL",
				"Blue Team"
			],
			github: "https://github.com/sajjan-adhikari/splunk-failed-login-detection"
		},
		{
			accent: "#00e5ff",
			color: "text-cyan bg-cyan/10 border-cyan/25",
			hoverBorder: "hover:border-cyan/40",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
			date: "Apr 2026",
			title: "Network Traffic Analysis",
			sub: "Wireshark · PCAP Forensics · Multi-Protocol",
			desc: "Multi-protocol PCAP forensics with Wireshark across DNS, FTP, TCP, UDP, and SMB — identifying FTP plaintext credential exposure and TCP anomalies consistent with real SOC triage.",
			tags: [
				"Wireshark",
				"PCAP",
				"Network Forensics"
			],
			github: "https://github.com/sajjan-adhikari/wireshark-network-analysis"
		},
		{
			accent: "#00ff88",
			color: "text-green bg-green/10 border-green/25",
			hoverBorder: "hover:border-green/40",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
			date: "May 2026",
			title: "Linux CLI Log Parser",
			sub: "SSH Brute Force Investigation · Bash · grep / awk",
			desc: "Parsed <code>/var/log/auth.log</code> with grep, awk, and sort — no SIEM required. Extracted attacker IPs, enumerated 5 targeted usernames, and confirmed a password-spraying pattern.",
			tags: [
				"Linux CLI",
				"Bash",
				"Incident Response"
			],
			github: "https://github.com/sajjan-adhikari/linux-cli-log-parser"
		},
		{
			accent: "#ff8c42",
			color: "text-orange bg-orange/10 border-orange/25",
			hoverBorder: "hover:border-orange/35",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
			date: "May 2026",
			title: "Web Application Penetration Testing",
			sub: "DVWA · Kali Linux · OWASP Top 10",
			desc: "Exploited SQLi, XSS, and Command Injection against DVWA — dumped MD5 hashes via union-based injection and achieved RCE by executing system commands through the web interface.",
			tags: [
				"DVWA",
				"OWASP Top 10",
				"SQLi / XSS",
				"RCE"
			],
			github: "https://github.com/sajjan-adhikari/dvwa-web-pentest"
		},
		{
			accent: "#a78bfa",
			color: "text-purple bg-purple/10 border-purple/25",
			hoverBorder: "hover:border-purple/35",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
			date: "May 2026",
			title: "Network Reconnaissance",
			sub: "Nmap · Service Enumeration · Pentest Reporting",
			desc: "Progressive Nmap scanning (ping → aggressive) identified two open ports with exposed service versions. Documented three security findings in a penetration test report.",
			tags: [
				"Nmap",
				"Enumeration",
				"Pentest Report"
			],
			github: "https://github.com/sajjan-adhikari/nmap-network-recon"
		},
		{
			accent: "#f43f5e",
			color: "text-[#f43f5e] bg-[#f43f5e]/10 border-[#f43f5e]/25",
			hoverBorder: "hover:border-[#f43f5e]/35",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8M8 15h8M8 7h8"/></svg>`,
			date: "Jan 2026",
			title: "Web Application Firewall (WAF)",
			sub: "Python · Rule-Based Filtering · HTTP Inspection",
			desc: "Developed a rule-based WAF in Python to inspect incoming HTTP requests. Features regex patterns to detect and block SQL injection and XSS payloads before they reach the backend.",
			tags: [
				"Python",
				"WAF",
				"Web Security"
			],
			github: "https://github.com/sajjan-adhikari/projectwaf"
		}
	];
	$$renderer.push(`<section id="projects" class="py-28 bg-bg"><div class="max-w-[1100px] mx-auto px-6"><div class="mb-14"><p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Projects</p> <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em] mb-2">Security Projects</h2> <p class="text-[0.95rem] text-muted">Hands-on lab work demonstrating real-world SOC and offensive security skills</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
	const each_array = ensure_array_like(projects);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let project = each_array[i];
		$$renderer.push(`<div${attr_class(`bg-card border border-line rounded-2xl p-6 md:p-7 card-shadow flex flex-col justify-between hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 ${stringify(project.hoverBorder)} group`)}><div class="flex flex-col gap-4"><div class="flex items-center justify-between"><div${attr_class(`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${stringify(project.color)}`)}>${html(project.icon)}</div> <span class="text-[0.72rem] font-medium text-dim">${escape_html(project.date)}</span></div> <div><h3 class="text-[1.12rem] font-bold text-ink tracking-tight mb-1">${escape_html(project.title)}</h3> <p class="text-[0.78rem] font-semibold text-cyan">${escape_html(project.sub)}</p></div> <p class="text-[0.88rem] text-muted leading-relaxed">${html(project.desc)}</p></div> <div class="flex items-center justify-between mt-6 pt-4 border-t border-line/30 gap-4"><div class="flex flex-wrap gap-1.5"><!--[-->`);
		const each_array_1 = ensure_array_like(project.tags);
		for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
			let tag = each_array_1[$$index];
			$$renderer.push(`<span class="text-[0.68rem] font-medium text-dim bg-bg border border-line px-2.5 py-0.5 rounded-full">${escape_html(tag)}</span>`);
		}
		$$renderer.push(`<!--]--></div> `);
		if (project.github) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<a${attr("href", project.github)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-[0.78rem] font-bold text-ink hover:text-cyan transition-colors flex-shrink-0 group/link" aria-label="View code on GitHub"><span>Code</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/Certifications.svelte
function Certifications($$renderer) {
	const earned = [
		{
			svg: `<svg viewBox="0 0 24 24" width="26" height="26"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`,
			bg: "bg-white/5",
			name: "Google Cybersecurity Professional Certificate",
			issuer: "Google",
			accent: "hover:border-red-500/30"
		},
		{
			svg: `<svg viewBox="0 0 56 30" width="34" height="18"><rect x="0"    y="14" width="6" height="16" rx="1.5" fill="#1ba0d7"/><rect x="8.5"  y="8"  width="6" height="22" rx="1.5" fill="#1ba0d7"/><rect x="17"   y="3"  width="6" height="27" rx="1.5" fill="#1ba0d7"/><rect x="25"   y="0"  width="6" height="30" rx="1.5" fill="#1ba0d7"/><rect x="33"   y="3"  width="6" height="27" rx="1.5" fill="#1ba0d7"/><rect x="41.5" y="8"  width="6" height="22" rx="1.5" fill="#1ba0d7"/><rect x="50"   y="14" width="6" height="16" rx="1.5" fill="#1ba0d7"/></svg>`,
			bg: "bg-[#1ba0d7]/8",
			name: "Junior Cybersecurity Analyst",
			issuer: "Cisco Networking Academy",
			accent: "hover:border-[#1ba0d7]/35"
		},
		{
			svg: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M5 5l6 7-6 7" stroke="#ff6b35" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 5l6 7-6 7" stroke="#ff8c42" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
			bg: "bg-[#ff6b35]/8",
			name: "Splunk Core Certified User",
			issuer: "Splunk",
			accent: "hover:border-[#ff6b35]/35"
		},
		{
			text: "EF",
			textClass: "text-[1.1rem] font-bold text-purple",
			bg: "bg-purple/10",
			name: "EF SET English Certificate — C2 Proficient",
			issuer: "EF Standard English Test · Score: 72/100",
			accent: "hover:border-purple/35"
		}
	];
	const inProgress = [{
		text: "ISC²",
		textClass: "text-[0.9rem] font-bold text-cyan",
		bg: "bg-cyan/10",
		name: "Certified in Cybersecurity (CC)",
		issuer: "ISC²",
		accent: "hover:border-cyan/35"
	}, {
		text: "IBM",
		textClass: "text-[1.1rem] font-bold text-blue",
		bg: "bg-blue/10",
		name: "Cybersecurity Analyst Professional Certificate",
		issuer: "IBM",
		accent: "hover:border-blue/35"
	}];
	$$renderer.push(`<section id="certifications" class="py-28 bg-bg-alt"><div class="max-w-[1100px] mx-auto px-6"><div class="mb-14"><p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Certifications</p> <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Credentials</h2></div> <div class="mb-14"><div class="flex items-center gap-3 mb-5"><span class="w-1.5 h-1.5 rounded-full bg-green"></span> <p class="text-[0.75rem] font-semibold text-green uppercase tracking-[0.14em]">Earned</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
	const each_array = ensure_array_like(earned);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let cert = each_array[i];
		$$renderer.push(`<div${attr_class(`bg-card border border-line rounded-2xl p-6 flex flex-col justify-between card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group ${stringify(cert.accent)}`)}><div class="flex flex-col gap-4"><div class="flex items-start justify-between"><div${attr_class(`w-12 h-12 rounded-xl ${stringify(cert.bg)} border border-line/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105`)}>`);
		if (cert.svg) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`${html(cert.svg)}`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span${attr_class(clsx(cert.textClass))}>${escape_html(cert.text)}</span>`);
		}
		$$renderer.push(`<!--]--></div> <span class="inline-flex items-center gap-1 text-[0.65rem] font-bold text-green bg-green/10 border border-green/20 px-2.5 py-0.5 rounded-full"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="stroke-current"><polyline points="20 6 9 17 4 12"></polyline></svg> Verified</span></div> <div><h3 class="text-[0.88rem] font-bold text-ink leading-snug mb-1">${escape_html(cert.name)}</h3> <p class="text-[0.75rem] text-dim">${escape_html(cert.issuer)}</p></div></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div> <div><div class="flex items-center gap-3 mb-5"><span class="w-1.5 h-1.5 rounded-full bg-orange animate-pulse-dot"></span> <p class="text-[0.75rem] font-semibold text-orange uppercase tracking-[0.14em]">In Progress</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
	const each_array_1 = ensure_array_like(inProgress);
	for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
		let cert = each_array_1[i];
		$$renderer.push(`<div${attr_class(`bg-card border border-line rounded-2xl p-6 flex flex-col justify-between card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group ${stringify(cert.accent)}`)}><div class="flex flex-col gap-4"><div class="flex items-start justify-between"><div${attr_class(`w-12 h-12 rounded-xl ${stringify(cert.bg)} border border-line/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105`)}><span${attr_class(clsx(cert.textClass))}>${escape_html(cert.text)}</span></div> <span class="inline-flex items-center gap-1.5 text-[0.65rem] font-bold text-orange bg-orange/10 border border-orange/20 px-2.5 py-0.5 rounded-full"><span class="w-1 h-1 rounded-full bg-orange animate-pulse"></span> In Progress</span></div> <div><h3 class="text-[0.88rem] font-bold text-ink leading-snug mb-1">${escape_html(cert.name)}</h3> <p class="text-[0.75rem] text-dim">${escape_html(cert.issuer)}</p></div></div></div>`);
	}
	$$renderer.push(`<!--]--></div></div></div></section>`);
}
//#endregion
//#region src/lib/components/Contact.svelte
function Contact($$renderer) {
	const links = [
		{
			href: "mailto:sajjanadhikari0@gmail.com",
			label: "Email",
			value: "sajjanadhikari0@gmail.com",
			iconBg: "bg-cyan/10 text-cyan",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
		},
		{
			href: "https://github.com/sajjan-adhikari",
			label: "GitHub",
			value: "github.com/sajjan-adhikari",
			external: true,
			iconBg: "bg-card text-muted",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
		},
		{
			href: "https://linkedin.com/in/sajjanadhikari",
			label: "LinkedIn",
			value: "linkedin.com/in/sajjanadhikari",
			external: true,
			iconBg: "bg-blue/10 text-blue",
			icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
		}
	];
	const openFor = [
		"SOC Analyst (L1 / L2)",
		"Security Operations Internship",
		"Blue Team Collaboration",
		"CTF & Security Research"
	];
	$$renderer.push(`<section id="contact" class="py-28 bg-bg"><div class="max-w-[1100px] mx-auto px-6"><div class="mb-14"><p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Contact</p> <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Get in Touch</h2></div> <div class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start"><div><p class="text-[1.05rem] text-muted leading-[1.85] mb-8">I'm actively looking for opportunities to grow as a security professional.
          Whether it's an internship, entry-level SOC role, or a collaborative project — I'd love to connect.</p> <div class="bg-card border border-line rounded-2xl p-6 card-shadow"><p class="text-[0.68rem] font-semibold text-dim uppercase tracking-[0.14em] mb-5">Open For</p> <div class="flex flex-col gap-0"><!--[-->`);
	const each_array = ensure_array_like(openFor);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		$$renderer.push(`<div class="flex items-center gap-3 py-3 border-b border-line last:border-0"><svg class="w-4 h-4 text-cyan flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"></polyline></svg> <span class="text-[0.88rem] text-muted">${escape_html(item)}</span></div>`);
	}
	$$renderer.push(`<!--]--></div></div> <p class="text-[0.78rem] text-dim mt-6 leading-[1.7]">Based in Lalitpur, Nepal · Available remotely · Fluent in English (C2)</p></div> <div class="flex flex-col gap-3"><!--[-->`);
	const each_array_1 = ensure_array_like(links);
	for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
		let link = each_array_1[i];
		$$renderer.push(`<a${attr("href", link.href)}${attr("target", link.external ? "_blank" : void 0)}${attr("rel", link.external ? "noopener noreferrer" : void 0)} class="group bg-card border border-line rounded-2xl p-5 flex items-center gap-4 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 hover:border-muted/30 transition-all duration-300"><div${attr_class(`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stringify(link.iconBg)}`)}>${html(link.icon)}</div> <div class="flex-1 min-w-0"><p class="text-[0.7rem] font-semibold text-dim uppercase tracking-[0.1em] mb-0.5">${escape_html(link.label)}</p> <p class="text-[0.9rem] font-medium text-ink truncate">${escape_html(link.value)}</p></div> <svg class="w-4 h-4 text-dim group-hover:text-muted group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>`);
	}
	$$renderer.push(`<!--]--></div></div></div></section>`);
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer) {
	$$renderer.push(`<footer class="bg-bg border-t border-line py-10 text-center"><div class="max-w-[1100px] mx-auto px-6"><p class="text-[0.82rem] text-muted mb-2">Designed &amp; built by <span class="text-ink font-medium">Sajjan Adhikari</span> — Mahalaxmi-1, Lalitpur, Nepal</p> <p class="font-mono text-[0.7rem] text-dim tracking-[0.1em]"><span class="text-cyan">$ whoami</span>  ·  aspiring-soc-analyst</p></div></footer>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Sajjan Adhikari — Cybersecurity Portfolio</title>`);
		});
		$$renderer.push(`<meta name="description" content="Aspiring SOC Analyst and cybersecurity practitioner from Nepal. Threat detection, incident response, and security operations."/>`);
	});
	Nav($$renderer, {});
	$$renderer.push(`<!----> <main>`);
	Hero($$renderer, {});
	$$renderer.push(`<!----> `);
	About($$renderer, {});
	$$renderer.push(`<!----> `);
	Education($$renderer, {});
	$$renderer.push(`<!----> `);
	Skills($$renderer, {});
	$$renderer.push(`<!----> `);
	Projects($$renderer, {});
	$$renderer.push(`<!----> `);
	Certifications($$renderer, {});
	$$renderer.push(`<!----> `);
	Contact($$renderer, {});
	$$renderer.push(`<!----></main> `);
	Footer($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _page as default };
