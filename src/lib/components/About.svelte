<script>
  import { fadeUp } from '$lib/actions.js';
</script>

<section id="about" class="py-28 bg-bg-alt">
  <div class="max-w-[760px] mx-auto px-6">

    <div use:fadeUp class="mb-12">
      <p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">About</p>
      <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Who I Am</h2>
    </div>

    <div class="flex flex-col gap-6 text-[1.05rem] text-muted leading-[1.9]">
      <p use:fadeUp>
        I'm a BSc. CSIT student at Patan Multiple Campus with a focused interest in
        <span class="text-ink font-semibold">security operations and incident response</span>.
        My approach combines formal education with deliberate hands-on practice.
      </p>
      <p use:fadeUp={80}>
        Good defence requires understanding how attackers operate. I complement blue-team skills —
        SIEM monitoring, log analysis, threat detection — with offensive fundamentals covering
        <span class="text-ink font-semibold">OWASP Top 10</span>, manual pen testing, and network reconnaissance.
      </p>
      <p use:fadeUp={160}>
        Currently pursuing <span class="text-ink font-semibold">ISC² CC</span> and
        <span class="text-ink font-semibold">IBM Cybersecurity Analyst</span> certifications alongside
        active project work to build a demonstrable, job-ready portfolio.
      </p>
    </div>

  </div>
</section>
