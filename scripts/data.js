window.resourceData = {
  tags: {
    free: "Free",
    paid: "Paid",
    commercial: "Commercial",
    api: "API",
    inspiration: "Inspiration",
    download: "Download",
    community: "Community",
    vector: "Vector",
    video: "Video",
    animation: "Animation",
    utility: "Utility",
    collab: "Collaboration",
    ai: "AI"
  },
  ui: {
    heroEyebrow: "Browse cross-platform creative assets",
    heroSub: "Jump into a curated toolbox. Each glowing tile opens a focused resource stack for designers and makers.",
    ctaExplore: "Browse all decks",
    ctaJump: "Random pick",
    categoryEyebrow: "Curated by theme",
    categoryTitle: "Resource vault for makers",
    footerNote: "Handpicked by me & Updated frequently",
    breadcrumb: "Collection",
    backHome: "Back to home",
    copyList: "Copy all links",
    copySuccess: "Copied!",
    emptyState: "This category is not available. Head back to the grid and try again."
  },
  categories: [
    {
      id: "fonts",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <path d="M30 68l10-34h8l10 34" fill="none" stroke="#1c150e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34 56h20" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/>
  <path d="M60 36h11" stroke="#1c150e" stroke-width="3" stroke-linecap="round"/>
  <path d="M60 36v20" stroke="#1c150e" stroke-width="3" stroke-linecap="round"/>
</svg>`,
      label: "Font libraries",
      meta: "Open + commercial fonts"
    },
    {
      id: "images",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <rect x="22" y="24" width="56" height="40" rx="10" fill="#fff"/>
  <circle cx="36" cy="36" r="7" fill="var(--accent)"/>
  <path d="M26 60l11-13 11 9 9-12 17 16v12H26z" fill="#ffe3c6"/>
</svg>`,
      label: "Images & video",
      meta: "Premium stock hubs"
    },
    {
      id: "illustrations",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <rect x="24" y="24" width="52" height="26" rx="10" fill="var(--accent)"/>
  <circle cx="40" cy="37" r="6" fill="#fff"/>
  <path d="M34 64c6-7 26-7 32 0" stroke="#1c150e" stroke-width="4" stroke-linecap="round"/>
  <path d="M52 52l10 16" stroke="#1c150e" stroke-width="3" stroke-linecap="round"/>
</svg>`,
      label: "Illustrations",
      meta: "Stylized character sets"
    },
    {
      id: "icons",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <rect x="26" y="26" width="16" height="16" rx="4" fill="var(--accent)"/>
  <rect x="58" y="26" width="16" height="16" rx="4" fill="#1c150e"/>
  <rect x="26" y="58" width="16" height="16" rx="4" fill="#1c150e"/>
  <rect x="58" y="58" width="16" height="16" rx="4" fill="var(--accent)"/>
</svg>`,
      label: "Icon sets",
      meta: "Versatile vector packs"
    },
    {
      id: "avatars",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <circle cx="50" cy="40" r="12" fill="var(--accent)"/>
  <path d="M28 76c4-11 14-18 22-18s18 7 22 18" fill="#ffe3c6"/>
</svg>`,
      label: "Avatars & mock data",
      meta: "Generate realistic faces"
    },
    {
      id: "inspiration",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <path d="M50 24c9 0 18 7 18 18 0 6-3 11-7 14l-2 2v6H41v-6l-2-2c-4-3-7-8-7-14 0-11 9-18 18-18z" fill="var(--accent)"/>
  <rect x="42" y="66" width="16" height="5" rx="2.5" fill="#1c150e"/>
  <rect x="40" y="73" width="20" height="4" rx="2" fill="#1c150e" opacity="0.7"/>
</svg>`,
      label: "Inspiration",
      meta: "Trend boards & showcases"
    },
    {
      id: "colors",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <circle cx="38" cy="38" r="9" fill="var(--accent)"/>
  <circle cx="60" cy="36" r="9" fill="#ffb276"/>
  <circle cx="44" cy="60" r="9" fill="#1c150e"/>
  <circle cx="64" cy="58" r="9" fill="#ffe3c6" stroke="#1c150e" stroke-width="2"/>
</svg>`,
      label: "Color palettes",
      meta: "AI + manual helpers"
    },
    {
      id: "tools",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <rect x="24" y="26" width="52" height="12" rx="6" fill="var(--accent)"/>
  <rect x="24" y="44" width="34" height="10" rx="5" fill="#1c150e" opacity="0.9"/>
  <rect x="24" y="60" width="44" height="10" rx="5" fill="#ffe3c6" stroke="#1c150e" stroke-width="2"/>
</svg>`,
      label: "Design & dev",
      meta: "Collaboration essentials"
    },
    {
      id: "utilities",
      icon: `<svg viewBox="0 0 100 100">
  <rect x="12" y="12" width="76" height="76" rx="22" fill="#f5ede1"/>
  <line x1="30" y1="32" x2="70" y2="32" stroke="#1c150e" stroke-width="3" stroke-linecap="round"/>
  <circle cx="40" cy="32" r="4" fill="var(--accent)"/>
  <line x1="30" y1="50" x2="70" y2="50" stroke="#1c150e" stroke-width="3" stroke-linecap="round"/>
  <circle cx="58" cy="50" r="4" fill="var(--accent)"/>
  <line x1="30" y1="68" x2="70" y2="68" stroke="#1c150e" stroke-width="3" stroke-linecap="round"/>
  <circle cx="34" cy="68" r="4" fill="var(--accent)"/>
</svg>`,
      label: "Utilities",
      meta: "Handy productivity tools"
    }
  ],
  resources: {
    fonts: [
      {
        name: "Google Fonts",
        url: "https://www.google.com/fonts",
        description: "Official open-source library with variable fonts and multi-language coverage.",
        tags: ["free", "commercial", "api"]
      },
      {
        name: "Font Squirrel",
        url: "https://www.fontsquirrel.com/",
        description: "Hand-picked free fonts cleared for commercial projects, plus ready-to-go downloads.",
        tags: ["free", "commercial", "download"]
      },
      {
        name: "MyFonts",
        url: "https://www.myfonts.com/",
        description: "One of the largest commercial marketplaces, including exclusive foundry releases.",
        tags: ["paid", "commercial"]
      },
      {
        name: "Fontshare",
        url: "https://www.fontshare.com/",
        description: "Premium-quality free fonts from Indian Type Foundry with desktop/web kits.",
        tags: ["free", "commercial"]
      },
      {
        name: "Dafont",
        url: "https://www.dafont.com/",
        description: "Eclectic display fonts for campaigns, titles, and indie experiments.",
        tags: ["free", "download"]
      },
      {
        name: "Adobe Fonts",
        url: "https://fonts.adobe.com/",
        description: "Creative Cloud synced library of licensed typefaces ready for desktop and web.",
        tags: ["paid", "commercial"]
      }
    ],
    images: [
      {
        name: "Unsplash",
        url: "https://unsplash.com/",
        description: "Free high-resolution photography from creators worldwide.",
        tags: ["free", "commercial", "download"]
      },
      {
        name: "Pexels",
        url: "https://www.pexels.com/",
        description: "Photos and short-form video assets with multilingual search support.",
        tags: ["free", "commercial", "video"]
      },
      {
        name: "ISO Republic",
        url: "https://isorepublic.com/",
        description: "Premium-looking royalty-free photography for editorial and commercial work.",
        tags: ["free", "commercial"]
      },
      {
        name: "Pixabay",
        url: "https://pixabay.com/",
        description: "One-stop hub combining photos, vectors, illustrations, and stock video.",
        tags: ["free", "commercial", "vector"]
      },
      {
        name: "Coverr",
        url: "https://coverr.co/",
        description: "Loop-ready background videos designed for hero sections and web headers.",
        tags: ["free", "video", "commercial"]
      },
      {
        name: "Mixkit",
        url: "https://mixkit.co/",
        description: "Royalty-free stock videos, music, and sound effects in curated categories.",
        tags: ["free", "video", "download"]
      },
      {
        name: "Life of Vids",
        url: "https://www.lifeofvids.com/",
        description: "High-frame-rate footage published by a creative studio with no copyright limits.",
        tags: ["free", "video"]
      },
      {
        name: "Giphy",
        url: "https://giphy.com/",
        description: "The largest GIF search engine with APIs for chat, apps, and prototypes.",
        tags: ["free", "api", "animation"]
      }
    ],
    illustrations: [
      {
        name: "unDraw",
        url: "https://undraw.co/illustrations",
        description: "Open-source illustrations that let you set custom brand colors instantly.",
        tags: ["free", "commercial", "vector"]
      },
      {
        name: "Open Peeps",
        url: "https://www.openpeeps.com/",
        description: "Hand-drawn avatar system with modular parts to mix and match.",
        tags: ["free", "vector"]
      },
      {
        name: "Humaaans",
        url: "https://www.humaaans.com/",
        description: "Diverse character builder featuring swappable poses and outfits.",
        tags: ["free", "commercial", "vector"]
      },
      {
        name: "ManyPixels",
        url: "https://www.manypixels.co/gallery",
        description: "Weekly updated illustration packs covering popular product themes.",
        tags: ["free", "download"]
      },
      {
        name: "IRA Design",
        url: "https://iradesign.io/",
        description: "Gradient-heavy illustration kit complete with layered files and Figma support.",
        tags: ["free", "download"]
      }
    ],
    icons: [
      {
        name: "Ionicons",
        url: "https://ionic.io/ionicons",
        description: "Mobile-first line and filled icons crafted for iOS and Android patterns.",
        tags: ["free", "vector", "commercial"]
      },
      {
        name: "Heroicons",
        url: "https://heroicons.com/",
        description: "SVG icons from the Tailwind team in outline and solid styles.",
        tags: ["free", "vector"]
      },
      {
        name: "Phosphor Icons",
        url: "https://phosphoricons.com/",
        description: "Flexible icon family with multiple weights and adjustable strokes.",
        tags: ["free", "vector", "api"]
      },
      {
        name: "Font Awesome",
        url: "https://fontawesome.com/",
        description: "Classic icon font plus SVG set with free and Pro tiers.",
        tags: ["free", "paid", "commercial"]
      },
      {
        name: "Line Awesome",
        url: "https://icons8.com/line-awesome",
        description: "Line-style alternative designed as a drop-in replacement for Font Awesome.",
        tags: ["free", "vector"]
      },
      {
        name: "iconmonstr",
        url: "https://iconmonstr.com/",
        description: "Clean black-and-white icons with direct SVG download.",
        tags: ["free", "download"]
      },
      {
        name: "Icons8",
        url: "https://icons8.com/",
        description: "Full UI asset suite with icons, illustrations, and API access.",
        tags: ["free", "paid", "api"]
      },
      {
        name: "Icomoon",
        url: "https://icomoon.io/",
        description: "Build custom icon fonts and SVG sprites from your own selections.",
        tags: ["free", "download"]
      },
      {
        name: "IconJar",
        url: "https://geticonjar.com/",
        description: "macOS icon manager for keeping huge libraries searchable.",
        tags: ["paid", "utility"]
      },
      {
        name: "Lucide",
        url: "https://lucide.dev/",
        description: "Community-driven evolution of Feather icons with more glyphs.",
        tags: ["free", "vector", "commercial"]
      },
      {
        name: "Radix Icons",
        url: "https://icons.radix-ui.com/",
        description: "Systematic icon set from the Radix UI team.",
        tags: ["free", "vector"]
      },
      {
        name: "CSS.gg",
        url: "https://css.gg/",
        description: "Icons available in CSS or SVG formats for flexible embedding.",
        tags: ["free", "vector"]
      },
      {
        name: "Remix Icon",
        url: "https://remixicon.com/",
        description: "Popular open-source UI icon set with consistent strokes.",
        tags: ["free", "vector", "commercial"]
      }
    ],
    avatars: [
      {
        name: "UI Faces",
        url: "https://uifaces.co/",
        description: "Real human avatars with license filters and curated packs.",
        tags: ["free", "commercial"]
      },
      {
        name: "Random User",
        url: "https://randomuser.me/",
        description: "API that returns mock profiles complete with avatars and metadata.",
        tags: ["free", "api"]
      },
      {
        name: "Dicebear",
        url: "https://www.dicebear.com/",
        description: "Generate SVG avatars in dozens of art styles via API or UI.",
        tags: ["free", "api", "vector"]
      },
      {
        name: "Avatar Maker",
        url: "https://avatarmaker.com/",
        description: "Browser-based cartoon avatar creator with instant download.",
        tags: ["free", "download"]
      }
    ],
    inspiration: [
      {
        name: "Dribbble",
        url: "https://dribbble.com/",
        description: "Global community for sharing UI/UX shots and in-progress work.",
        tags: ["free", "community", "inspiration"]
      },
      {
        name: "Behance",
        url: "https://www.behance.net/",
        description: "Adobe-owned portfolio platform for creative disciplines.",
        tags: ["free", "community"]
      },
      {
        name: "Awwwards",
        url: "https://www.awwwards.com/",
        description: "Award showcase highlighting cutting-edge web experiences.",
        tags: ["paid", "inspiration"]
      },
      {
        name: "Collect UI",
        url: "https://collectui.com/",
        description: "UI inspiration sorted by product scenarios and flows.",
        tags: ["free", "inspiration"]
      },
      {
        name: "Page Collective",
        url: "https://pagecollective.com/",
        description: "High-fidelity landing page gallery for SaaS and startups.",
        tags: ["free", "inspiration"]
      }
    ],
    colors: [
      {
        name: "Coolors",
        url: "https://coolors.co/",
        description: "Generate, lock, and export modern palettes in seconds.",
        tags: ["free", "utility"]
      },
      {
        name: "Huemint",
        url: "https://huemint.com/",
        description: "AI-assisted palette suggestions for branding and UI.",
        tags: ["free", "ai"]
      },
      {
        name: "Color Hunt",
        url: "https://colorhunt.co/",
        description: "Community-curated four-color combinations.",
        tags: ["free", "community"]
      },
      {
        name: "Adobe Color",
        url: "https://color.adobe.com/create/color-wheel",
        description: "Professional color wheel with harmony rules and accessibility checks.",
        tags: ["free", "utility"]
      }
    ],
    tools: [
      {
        name: "Figma",
        url: "https://www.figma.com/",
        description: "Collaborative UI design and prototyping platform for product teams.",
        tags: ["free", "paid", "collab"]
      },
      {
        name: "Canva",
        url: "https://www.canva.com/",
        description: "Template-driven visual design suite for marketing and social content.",
        tags: ["free", "paid"]
      },
      {
        name: "Zeplin",
        url: "https://zeplin.io/",
        description: "Bridges design specs to development with components and documentation.",
        tags: ["paid", "collab"]
      },
      {
        name: "CodePen",
        url: "https://codepen.io/",
        description: "Online playground for experimenting with HTML, CSS, and JS.",
        tags: ["free", "community"]
      },
      {
        name: "CSS-Tricks",
        url: "https://css-tricks.com/",
        description: "Articles, guides, and patterns for front-end developers.",
        tags: ["free", "inspiration"]
      },
      {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io/",
        description: "Real-world challenges with feedback from the community.",
        tags: ["free", "community"]
      },
      {
        name: "UI DevTools",
        url: "https://uidevtools.com/",
        description: "Directory packed with UI generators, debuggers, and utilities.",
        tags: ["free", "utility"]
      }
    ],
    utilities: [
      {
        name: "Remove.bg",
        url: "https://www.remove.bg/",
        description: "AI-powered background remover with batch support.",
        tags: ["paid", "free", "ai"]
      },
      {
        name: "TinyPNG",
        url: "https://tinypng.com/",
        description: "Smart compression for PNG and JPG assets without quality loss.",
        tags: ["free", "utility"]
      },
      {
        name: "Webframe",
        url: "https://webframe.xyz/",
        description: "Gallery of real SaaS landing pages categorized by product type.",
        tags: ["free", "inspiration"]
      }
    ]
  }
};
