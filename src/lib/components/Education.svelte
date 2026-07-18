<script>
  import { fadeUp, fadeUpScale } from '$lib/actions.js';
</script>

<section id="education" class="py-16 md:py-28 bg-bg">
  <div class="max-w-[680px] mx-auto px-6">

    <div use:fadeUpScale class="mb-14">
      <p class="section-label">Education</p>
      <h2 class="section-title">Academic & professional growth</h2>
    </div>

    <div class="flex flex-col gap-6 relative pl-8">
      <div class="absolute left-[9px] top-3 bottom-3 w-px bg-line"></div>

      <div use:fadeUp class="relative">
        <div class="absolute -left-8 top-6 w-3 h-3 rounded-full bg-teal border-[3px] border-bg"></div>
        <div class="card edu-card p-5">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 class="text-[0.95rem] font-semibold text-ink mb-0.5">BSc. CSIT — Computer Science &amp; Information Technology</h3>
              <p class="text-[0.85rem] text-muted">Patan Multiple Campus &middot; Lalitpur, Nepal</p>
            </div>
            <span class="self-start text-[0.72rem] font-medium text-teal bg-teal/10 px-3 py-0.5 rounded-full whitespace-nowrap">Jan 2023 – Present</span>
          </div>
          <p class="text-[0.85rem] text-dim leading-relaxed mb-3">
            Relevant coursework: Computer Networks &middot; Operating Systems &middot; Cryptography &middot; Data Structures &middot; Database Systems
          </p>
          <div class="flex flex-wrap gap-1.5">
            {#each ['Computer Science', 'Information Technology', 'Cybersecurity Focus'] as tag}
              <span class="tag text-[0.72rem] text-muted px-2.5">{tag}</span>
            {/each}
          </div>
        </div>
      </div>

      <div use:fadeUp={80} class="relative">
        <div class="absolute -left-8 top-6 w-3 h-3 rounded-full bg-dim/60 border-[3px] border-bg"></div>
        <div class="card edu-card p-5">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 class="text-[0.95rem] font-semibold text-ink mb-0.5">Senior Secondary (+2) — Computer Science</h3>
              <p class="text-[0.85rem] text-muted">Trinity International College &middot; Kathmandu, Nepal</p>
            </div>
            <span class="self-start text-[0.72rem] font-medium text-dim bg-card border border-line px-3 py-0.5 rounded-full whitespace-nowrap">Dec 2022</span>
          </div>
          <p class="text-[0.85rem] text-dim leading-relaxed mb-3">
            Science stream with Computer Science &middot; Physics, Chemistry, Mathematics
          </p>
          <div class="flex flex-wrap gap-1.5">
            {#each ['GPA: 3.47 / 4.0', 'Science Stream'] as tag}
              <span class="tag text-[0.72rem] text-muted px-2.5">{tag}</span>
            {/each}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
