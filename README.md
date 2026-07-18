# Cybersecurity Portfolio — Sajjan Adhikari

A premium, interactive, and responsive cybersecurity portfolio website built to showcase skills, credentials, and hands-on laboratory projects in Security Operations (SOC), threat detection, and offensive security.

Live sites: **[sajjanadhikari.com.np](https://sajjanadhikari.com.np)** · **[sajjan-adhikari.github.io](https://sajjan-adhikari.github.io)**

---

## 🚀 Key Features

* **Interactive Skills Dashboard:** A custom-built, cybersecurity-themed tabbed console showcasing core competencies, primary toolkits, and descriptive narratives detailing practical lab application.
* **Responsive Projects Grid:** Displays real-world SOC and penetration testing lab summaries at a glance, organized in a symmetrical, responsive layout complete with GitHub repository code links.
* **Credentials & Badging:** Showcases earned certifications (Google, Cisco, Splunk, EF SET C2) with green "Verified" checkmark icons, and active studies (ISC² CC, IBM) with orange pulsing in-progress tags.
* **Material Design 3 Dark Tones:** Styled using a sleek dark-mode palette, complete with harmonious accent glows, vector icons, and smooth Svelte animations.
* **100% Lighthouse Compliant:** Built to meet top accessibility (a11y) guidelines using semantic elements and standard WAI-ARIA tab list attributes (`tablist`, `tab`, `tabpanel`).

---

## 🛠️ Tech Stack

* **Framework:** SvelteKit 2 / Svelte 5 (reactive states, derived values, transition bindings)
* **Styling:** Tailwind CSS v4 & custom properties
* **Static Builder:** `@sveltejs/adapter-static`
* **Package Manager:** `pnpm`
* **Bundler:** Vite

---

## 💻 Local Development & Setup

### Prerequisites
Make sure you have Node.js (version 20 or 24 recommended) and `pnpm` installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sajjan-adhikari/sajjan-adhikari.github.io.git
   cd sajjan-adhikari.github.io
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Compile the static production build:**
   ```bash
   pnpm build
   ```
   The static site assets will be compiled inside the `build/` directory.

---

## 📦 Deployment to GitHub Pages

Deploys automatically via **GitHub Actions** on every push to `main`. The workflow at `.github/workflows/deploy.yml` builds with `adapter-static` and publishes the `build/` directory to Pages.

**Required repo settings:**
- Pages → Source → **GitHub Actions** (not "Deploy from a branch")
