<script>
  import { fadeUp } from '$lib/actions.js';
</script>

<section id="education" class="py-28 bg-bg">
  <div class="max-w-[1100px] mx-auto px-6">

    <div use:fadeUp class="mb-14">
      <p class="text-[0.72rem] font-semibold text-cyan tracking-[0.15em] uppercase mb-3">Education</p>
      <h2 class="text-[2.2rem] font-bold text-ink tracking-[-0.02em]">Academic Background</h2>
    </div>

    <div class="edu-timeline flex flex-col gap-6">

      <div use:fadeUp class="relative">
        <div class="absolute -left-[calc(2rem+1px)] top-6 w-3 h-3 rounded-full bg-cyan border-2 border-bg"></div>
        <div class="bg-card border border-line rounded-2xl p-7 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 class="text-[1rem] font-semibold text-ink mb-1">BSc. CSIT — Computer Science &amp; Information Technology</h3>
              <p class="text-[0.85rem] text-muted">Patan Multiple Campus · Lalitpur, Nepal</p>
            </div>
            <span class="self-start text-[0.72rem] font-medium text-cyan bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full whitespace-nowrap">Jan 2023 – Present</span>
          </div>
          <p class="text-[0.85rem] text-dim leading-relaxed mb-4">
            Relevant coursework: Computer Networks · Operating Systems · Cryptography · Data Structures · Database Systems
          </p>
          <div class="flex flex-wrap gap-2">
            {#each ['Computer Science', 'Information Technology', 'Cybersecurity Focus'] as tag}
              <span class="text-[0.72rem] text-muted bg-bg border border-line px-3 py-1 rounded-full">{tag}</span>
            {/each}
          </div>
        </div>
      </div>

      <div use:fadeUp={80} class="relative">
        <div class="absolute -left-[calc(2rem+1px)] top-6 w-3 h-3 rounded-full bg-line border-2 border-bg"></div>
        <div class="bg-card border border-line rounded-2xl p-7 card-shadow hover:card-shadow-hover hover:-translate-y-0.5 transition-all duration-300">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 class="text-[1rem] font-semibold text-ink mb-1">Senior Secondary (+2) — Computer Science</h3>
              <p class="text-[0.85rem] text-muted">Trinity International College · Kathmandu, Nepal</p>
            </div>
            <span class="self-start text-[0.72rem] font-medium text-muted bg-card border border-line px-3 py-1 rounded-full whitespace-nowrap">Dec 2022</span>
          </div>
          <p class="text-[0.85rem] text-dim leading-relaxed mb-4">
            Science stream with Computer Science · Physics, Chemistry, Mathematics
          </p>
          <div class="flex flex-wrap gap-2">
            {#each ['GPA: 3.47 / 4.0', 'Science Stream'] as tag}
              <span class="text-[0.72rem] text-muted bg-bg border border-line px-3 py-1 rounded-full">{tag}</span>
            {/each}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
