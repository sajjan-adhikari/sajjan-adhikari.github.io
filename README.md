# Cybersecurity Portfolio — Sajjan Adhikari

A premium, interactive, and responsive cybersecurity portfolio website built to showcase skills, credentials, and hands-on laboratory projects in Security Operations (SOC), threat detection, and offensive security.

Live site hosted at: **[sajjan-adhikari.github.io](https://sajjan-adhikari.github.io)**

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

The portfolio is preconfigured for zero-friction static deployment utilizing **GitHub Actions**:

1. **Deploy Workflow:** The pipeline at `.github/workflows/deploy.yml` triggers automatically whenever you push code changes to the `main` or `master` branch. It compiles the static files and generates `build/404.html` fallback assets.
2. **Jekyll Bypass:** The project contains a `static/.nojekyll` bypass configuration to ensure GitHub Pages does not ignore underscore directory assets (such as `_app/`).
3. **Repository Settings:**
   * Go to your repository settings on GitHub.
   * Navigate to **Pages** in the left sidebar menu.
   * Under **Build and deployment > Source**, set the dropdown source choice to **GitHub Actions**.
