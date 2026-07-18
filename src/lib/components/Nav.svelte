<script>
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let hidden = $state(false);
  let menuOpen = $state(false);
  let lastY = $state(0);
  let activeSection = $state('');
  let isNavigating = $state(false);
  let themeOpen = $state(false);

  let theme = $state('teal');
  if (typeof document !== 'undefined') {
    theme = document.documentElement.dataset.theme || 'teal';
  }

  const sections = ['approach', 'education', 'deliver', 'proof', 'validation'];
  const MOBILE_BREAKPOINT = 680;

  const themes = [
    { id: 'teal',  color: '#2dd4bf', label: 'Teal'   },
    { id: 'amber', color: '#fbbf24', label: 'Amber'  },
    { id: 'red',   color: '#f87171', label: 'Red'    },
    { id: 'purple',color: '#a78bfa', label: 'Purple' },
    { id: 'blue',  color: '#60a5fa', label: 'Blue'   },
    { id: 'green', color: '#4ade80', label: 'Green'  },
    { id: 'pink',  color: '#f472b6', label: 'Pink'   },
    { id: 'orange',color: '#fb923c', label: 'Orange' },
    { id: 'cyan',  color: '#22d3ee', label: 'Cyan'   },
  ];

  function scrollTo(id) {
    menuOpen = false;
    hidden = false;
    isNavigating = true;

    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    setTimeout(() => { isNavigating = false; }, 800);
  }

  function handleResize() {
    if (window.innerWidth > MOBILE_BREAKPOINT && menuOpen) {
      menuOpen = false;
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      if (themeOpen) { themeOpen = false; return; }
      if (menuOpen) menuOpen = false;
    }
  }

  function selectTheme(id) {
    theme = id;
    document.documentElement.dataset.theme = id;
    localStorage.setItem('sa_theme', id);
    themeOpen = false;
  }

  $effect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  });

  onMount(() => {
    const onScroll = () => {
      if (isNavigating) { lastY = window.scrollY; return; }
      const y = window.scrollY;
      scrolled = y > 40;
      hidden = y > 1500 && y > lastY + 100;
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeSection = entry.target.id;
        }
      },
      { threshold: 0.3 }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeydown);
      observer.disconnect();
    };
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-[100] h-12 transition-all duration-500"
  style:background={scrolled ? 'rgba(12,12,15,0.92)' : 'rgba(12,12,15,0)'}
  style:backdrop-filter={scrolled ? 'blur(20px)' : 'none'}
  style:border-bottom={scrolled ? '1px solid #1e1e23' : '1px solid transparent'}
  style:opacity={hidden ? '0' : '1'}
  style:pointer-events={hidden ? 'none' : 'auto'}
  style:transform={hidden ? 'translateY(-100%)' : 'translateY(0)'}
>
  <div class="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between gap-2">

    <button onclick={() => scrollTo('hero')} class="text-[0.95rem] font-bold tracking-tight text-ink/70 hover:text-teal transition-colors duration-200 group">
      <span class="text-teal group-hover:text-ink transition-colors duration-200">[</span>SA<span class="text-teal group-hover:text-ink transition-colors duration-200">]</span>
    </button>

    <ul class="nav-links flex items-center" class:open={menuOpen}>
      {#each [
        { href: 'approach',   label: 'Approach'       },
        { href: 'education',  label: 'Education'      },
        { href: 'deliver',    label: 'What I Deliver' },
        { href: 'proof',      label: 'Proof of Work'  },
        { href: 'validation', label: 'Validation'     },
      ] as link}
        <li>
          <button
            onclick={() => scrollTo(link.href)}
            class="nav-link text-[0.82rem] font-medium text-dim px-3 py-1.5 rounded-lg hover:text-ink transition-colors duration-200"
            class:active={activeSection === link.href}
          >{link.label}</button>
        </li>
      {/each}
      <li class="ml-auto md:ml-3">
        <button
          onclick={() => scrollTo('work')}
          class="btn-primary text-[0.82rem] font-semibold text-black bg-teal px-6 py-3 md:px-4 md:py-1.5 rounded-lg hover:bg-teal-dim active:scale-[0.97]"
        >Work With Me</button>
      </li>
    </ul>

    <div class="flex items-center gap-1 md:gap-2">
      <div class="relative">
        <button
          onclick={() => themeOpen = !themeOpen}
          aria-label="Switch theme"
          class="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[0.72rem] font-medium text-dim hover:text-ink bg-card/50 hover:bg-card border cursor-pointer transition-all duration-200"
          style="border-color: color-mix(in srgb, {themes.find(t => t.id === theme)?.color || '#2dd4bf'} 45%, transparent);"
        >
          <span class="w-2.5 h-2.5 rounded-full" style="background: {themes.find(t => t.id === theme)?.color || '#2dd4bf'}"></span>
          <span class="w-[52px] text-center inline-block">{themes.find(t => t.id === theme)?.label || 'Teal'}</span>
        </button>
        {#if themeOpen}
          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 bg-card border border-line rounded-xl shadow-xl z-50 grid grid-cols-3 gap-1 w-[204px]">
            {#each themes as t}
              <button
                onclick={() => selectTheme(t.id)}
                aria-label={t.label}
                class="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all duration-150 hover:bg-card-hover"
                class:theme-dot--active={theme === t.id}
              >
                <span class="w-5 h-5 rounded-full" style="background: {t.color}"></span>
                <span class="text-[0.58rem] text-dim whitespace-nowrap">{t.label}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>
      <button
        class="nav-toggle"
        class:open={menuOpen}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onclick={() => (menuOpen = !menuOpen)}
      >
        <span class="block w-[18px] h-0.5 bg-muted/80 rounded-full"></span>
        <span class="block w-[18px] h-0.5 bg-muted/80 rounded-full"></span>
        <span class="block w-[18px] h-0.5 bg-muted/80 rounded-full"></span>
      </button>
    </div>

  </div>
</nav>

{#if menuOpen}
  <div
    role="presentation"
    class="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm md:hidden"
    onclick={() => (menuOpen = false)}
  ></div>
{/if}

{#if themeOpen}
  <div role="presentation" class="fixed inset-0 z-40" onclick={() => themeOpen = false}></div>
{/if}
