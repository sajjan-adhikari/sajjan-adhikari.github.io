<script>
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 24; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() { menuOpen = false; }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-200"
  style:background={scrolled ? 'rgba(28,27,31,0.96)' : 'rgba(28,27,31,0.7)'}
  style:border-bottom={scrolled ? '1px solid var(--color-line)' : '1px solid transparent'}
  style:backdrop-filter="blur(20px)"
>
  <div class="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">

    <a href="#hero" class="text-[1rem] font-bold text-ink tracking-tight group">
      <span class="text-cyan">[</span>SA<span class="text-cyan">]</span>
    </a>

    <button
      class="nav-toggle"
      class:open={menuOpen}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span class="block w-[22px] h-0.5 bg-muted rounded-sm transition-transform duration-200"></span>
      <span class="block w-[22px] h-0.5 bg-muted rounded-sm transition-all duration-200"></span>
      <span class="block w-[22px] h-0.5 bg-muted rounded-sm transition-transform duration-200"></span>
    </button>

    <ul class="nav-links flex items-center gap-1" class:open={menuOpen}>
      {#each [
        { href: '#about',          label: 'About'          },
        { href: '#education',      label: 'Education'      },
        { href: '#skills',         label: 'Skills'         },
        { href: '#projects',       label: 'Projects'       },
        { href: '#certifications', label: 'Certifications' },
      ] as link}
        <li>
          <a
            href={link.href}
            onclick={close}
            class="text-[0.85rem] font-medium text-muted px-3 py-2 rounded-lg hover:text-ink hover:bg-card transition-all duration-150"
          >{link.label}</a>
        </li>
      {/each}
      <li class="ml-2">
        <a
          href="#contact"
          onclick={close}
          class="nav-cta text-[0.85rem] font-semibold text-black bg-cyan px-4 py-2 rounded-lg hover:bg-cyan-dim transition-colors duration-200"
        >Contact</a>
      </li>
    </ul>

  </div>
</nav>
