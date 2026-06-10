<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Education from '$lib/components/Education.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Certifications from '$lib/components/Certifications.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Sajjan Adhikari — Cybersecurity Portfolio</title>
  <meta name="description" content="Aspiring SOC Analyst and cybersecurity practitioner from Nepal. Threat detection, incident response, and security operations." />
</svelte:head>

<Nav />
<main>
  <Hero />
  <About />
  <Education />
  <Skills />
  <Projects />
  <Certifications />
  <Contact />
</main>
<Footer />
