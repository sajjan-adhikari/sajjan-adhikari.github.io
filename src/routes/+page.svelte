<script>
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Education from '$lib/components/Education.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Certifications from '$lib/components/Certifications.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let progress = $state(0);

  onMount(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<svelte:head>
  <title>Sajjan Adhikari — Cybersecurity Portfolio</title>
  <meta name="description" content="Aspiring SOC Analyst and cybersecurity practitioner from Nepal. Threat detection, incident response, and security operations." />
</svelte:head>

<div class="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none" style="transform: scaleX({progress}); transform-origin: left; background: var(--color-teal);"></div>

<a href="#main-content" class="skip-link">Skip to content</a>

<Nav />
<main id="main-content">
  <Hero />

  <section class="border-y border-line bg-bg-alt">
    <div class="max-w-[1100px] mx-auto px-6 py-6 md:py-8">
      <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {#each [
          { n: '6', l: 'Security projects' },
          { n: '6', l: 'Certifications' },
          { n: 'C2', l: 'English proficiency' },
          { n: '5', l: 'Core competencies' },
        ] as stat}
          <div class="flex items-center gap-2.5">
            <span class="text-[1.4rem] md:text-[1.8rem] font-black text-teal leading-none">{stat.n}</span>
            <span class="text-[0.78rem] text-dim leading-tight max-w-[80px]">{stat.l}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <About />
  <Education />
  <Skills />
  <Projects />
  <Certifications />
  <Contact />
</main>
<Footer />
