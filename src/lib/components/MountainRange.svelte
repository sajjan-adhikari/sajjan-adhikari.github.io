<script lang="ts">
  let { class: className = '' }: { class?: string } = $props();
</script>

<div class="mountains {className}">
  <svg
    viewBox="0 0 1440 520"
    preserveAspectRatio="xMidYMax slice"
    class="mountains-svg"
    role="img"
    aria-label="Nepali Himalayan mountain range"
  >
    <defs>
      <linearGradient id="mg-moon" x1="0.5" y1="1" x2="0.5" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255,0)" />
        <stop offset="45%" stop-color="rgba(255,255,255,0)" />
        <stop offset="58%" stop-color="rgba(255,255,255,0.03)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0.08)" />
      </linearGradient>
      <linearGradient id="mg-layer5" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.07)" />
        <stop offset="30%" stop-color="rgba(255,255,255,0.035)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </linearGradient>
      <linearGradient id="mg-layer4" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.11)" />
        <stop offset="35%" stop-color="rgba(255,255,255,0.055)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </linearGradient>
      <linearGradient id="mg-layer3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.16)" />
        <stop offset="40%" stop-color="rgba(255,255,255,0.08)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </linearGradient>
      <linearGradient id="mg-layer2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.22)" />
        <stop offset="45%" stop-color="rgba(255,255,255,0.12)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </linearGradient>
      <linearGradient id="mg-layer1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.3)" />
        <stop offset="50%" stop-color="rgba(255,255,255,0.16)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>

    <circle cx="760" cy="50" r="40" fill="url(#mg-moon)" />

    <!-- Layer 5: High Himalaya — flowing curves -->
    <path
      class="mountains-layer mountains-layer--back"
      stroke="rgba(255,255,255,0.05)"
      stroke-width="0.8"
      d="M0,520 L0,340
        Q75,325 150,195 Q225,290 300,265
        Q380,240 460,135 Q530,260 600,225
        Q678,195 755,38 Q835,250 900,185
        Q980,220 1060,105 Q1130,250 1200,175
        Q1265,240 1330,145 Q1385,270 1440,210
        L1440,520 Z"
    />

    <!-- Layer 4: Secondary peaks -->
    <path
      class="mountains-layer mountains-layer--mid4"
      stroke="rgba(255,255,255,0.06)"
      stroke-width="0.7"
      d="M0,520 L0,375
        Q80,365 160,260 Q240,330 320,295
        Q400,275 480,195 Q550,290 620,255
        Q700,230 780,110 Q860,280 920,220
        Q990,260 1060,165 Q1130,280 1180,230
        Q1240,265 1320,195 Q1380,290 1440,240
        L1440,520 Z"
    />

    <!-- Layer 3: Mid ridges -->
    <path
      class="mountains-layer mountains-layer--mid3"
      stroke="rgba(255,255,255,0.07)"
      stroke-width="0.6"
      d="M0,520 L0,405
        Q85,395 170,315 Q255,370 340,340
        Q425,320 510,260 Q580,350 650,320
        Q730,300 810,215 Q890,340 950,295
        Q1020,330 1100,265 Q1170,340 1240,305
        Q1300,335 1380,280 L1440,310
        L1440,520 Z"
    />

    <!-- Layer 2: Lower hills -->
    <path
      class="mountains-layer mountains-layer--mid2"
      stroke="rgba(255,255,255,0.08)"
      stroke-width="0.5"
      d="M0,520 L0,435
        Q90,425 180,370 Q270,410 360,385
        Q450,365 540,320 Q620,395 700,370
        Q790,350 880,300 Q960,385 1040,355
        Q1110,380 1190,340 Q1260,395 1340,360
        Q1390,380 1440,360
        L1440,520 Z"
    />

    <!-- Layer 1: Foreground terrain -->
    <path
      class="mountains-layer mountains-layer--front"
      stroke="rgba(255,255,255,0.09)"
      stroke-width="0.4"
      d="M0,520 L0,470
        Q100,460 200,415 Q300,450 400,430
        Q500,412 600,378 Q700,440 800,415
        Q900,395 1000,365 Q1100,425 1200,395
        Q1300,410 1400,380 L1440,385
        L1440,520 Z"
    />
  </svg>
</div>

<style>
  .mountains {
    position: absolute;
    inset: auto 0 0 0;
    height: 72vh;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }

  .mountains-svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .mountains-layer {
    fill: rgba(255,255,255,0.03);
  }

  .mountains-layer--back {
    fill: url(#mg-layer5);
    animation: drift-back 30s ease-in-out infinite alternate;
  }

  .mountains-layer--mid4 {
    fill: url(#mg-layer4);
    animation: drift-mid4 24s ease-in-out infinite alternate-reverse;
  }

  .mountains-layer--mid3 {
    fill: url(#mg-layer3);
    animation: drift-mid3 19s ease-in-out infinite alternate;
  }

  .mountains-layer--mid2 {
    fill: url(#mg-layer2);
    animation: drift-mid2 14s ease-in-out infinite alternate-reverse;
  }

  .mountains-layer--front {
    fill: url(#mg-layer1);
    animation: drift-front 10s ease-in-out infinite alternate;
  }

  @keyframes drift-back {
    0% { transform: translateX(-3px); }
    100% { transform: translateX(3px); }
  }
  @keyframes drift-mid4 {
    0% { transform: translateX(-4px); }
    100% { transform: translateX(4px); }
  }
  @keyframes drift-mid3 {
    0% { transform: translateX(-5px); }
    100% { transform: translateX(5px); }
  }
  @keyframes drift-mid2 {
    0% { transform: translateX(-6px); }
    100% { transform: translateX(6px); }
  }
  @keyframes drift-front {
    0% { transform: translateX(-7px); }
    100% { transform: translateX(7px); }
  }

  @media (max-width: 768px) {
    .mountains {
      height: 42vh;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .mountains-layer {
      animation: none;
    }
  }
</style>
