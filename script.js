const profiles = window.profiles || {};

const iconMap = {
  location: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a6.75 6.75 0 0 0-6.75 6.75c0 4.82 5.63 11.55 6.07 12.08a.88.88 0 0 0 1.36 0c.44-.53 6.07-7.26 6.07-12.08A6.75 6.75 0 0 0 12 2Zm0 9.32a2.57 2.57 0 1 1 0-5.14 2.57 2.57 0 0 1 0 5.14Z"></path>
    </svg>
  `,
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.03-.56L12 11.31l6.97-5.12a1.24 1.24 0 0 0-.72-.19H5.75c-.27 0-.51.07-.72.19Zm14 2.1-6.51 4.78a.9.9 0 0 1-1.04 0L4.97 8.3v8.95c0 .43.35.78.78.78h12.5c.43 0 .78-.35.78-.78V8.29Z"></path>
    </svg>
  `,
  website: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm6.9 8.63h-2.96a15.17 15.17 0 0 0-1.07-4.15 7.04 7.04 0 0 1 4.03 4.15ZM12 4.03c.74 0 2.2 2.28 2.66 7.1H9.34C9.8 6.3 11.26 4.03 12 4.03Zm-3.87.95a15.1 15.1 0 0 0-1.07 4.15H4.1a7.04 7.04 0 0 1 4.03-4.15ZM3.54 12.88h3.27c.08 1.45.36 2.86.81 4.15A7.03 7.03 0 0 1 3.54 12.88Zm5.8 0h5.32c-.1 1.57-.42 3.03-.87 4.19-.52 1.34-1.16 2.3-1.79 2.3-.63 0-1.27-.96-1.79-2.3-.45-1.16-.77-2.62-.87-4.19Zm0-1.75c.1-1.57.42-3.03.87-4.19.52-1.34 1.16-2.3 1.79-2.3.63 0 1.27.96 1.79 2.3.45 1.16.77 2.62.87 4.19H9.34Zm7.04 5.9c.45-1.29.73-2.7.81-4.15h3.27a7.03 7.03 0 0 1-4.08 4.15Z"></path>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.42 3.5h2.31c.5 0 .94.34 1.07.82l.84 3.12c.1.37.01.76-.23 1.05L9 10.28a14.46 14.46 0 0 0 4.72 4.72l1.79-1.41c.29-.24.68-.33 1.05-.23l3.12.84c.48.13.82.57.82 1.07v2.31A1.92 1.92 0 0 1 18.58 19.5h-.33C9.6 19.5 4.5 14.4 4.5 5.75v-.33A1.92 1.92 0 0 1 6.42 3.5Z"></path>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2.25a9.74 9.74 0 0 0-8.33 14.79L2.25 21.75l4.85-1.37A9.75 9.75 0 1 0 12 2.25Zm0 17.57a7.8 7.8 0 0 1-3.97-1.09l-.28-.16-2.88.82.85-2.8-.18-.29a7.81 7.81 0 1 1 6.46 3.52Zm4.35-5.85c-.24-.12-1.42-.7-1.64-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.17-.71-.64-1.19-1.43-1.33-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.49-.4-.42-.54-.43-.14 0-.3-.01-.46-.01a.9.9 0 0 0-.65.3c-.22.24-.85.83-.85 2.03s.87 2.35.99 2.52c.12.16 1.7 2.59 4.12 3.63.58.25 1.04.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"></path>
    </svg>
  `,
  contact: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.25 3h11.5A1.75 1.75 0 0 1 19.5 4.75v14.5A1.75 1.75 0 0 1 17.75 21H6.25A1.75 1.75 0 0 1 4.5 19.25V4.75A1.75 1.75 0 0 1 6.25 3Zm0 1.75v14.5h11.5V4.75H6.25ZM12 7a2.38 2.38 0 1 1 0 4.75A2.38 2.38 0 0 1 12 7Zm0 6c1.95 0 3.73.88 4.94 2.34a.88.88 0 0 1-.68 1.41H7.74a.88.88 0 0 1-.68-1.41A6.36 6.36 0 0 1 12 13Z"></path>
    </svg>
  `
};

function getRequestedSlug() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("person");
  const fromHash = window.location.hash.replace(/^#/, "");
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const lastPathPart = pathParts[pathParts.length - 1] || "";
  const normalizedLastPath = lastPathPart.replace(/\.html$/i, "");

  if (fromQuery) {
    return fromQuery.toLowerCase();
  }

  if (fromHash) {
    return fromHash.toLowerCase();
  }

  if (profiles[normalizedLastPath?.toLowerCase()]) {
    return normalizedLastPath.toLowerCase();
  }

  return "saed-kamel";
}

function applyTheme(theme) {
  const root = document.documentElement;

  root.style.setProperty("--bg-main", theme.bgMain);
  root.style.setProperty("--bg-surface", theme.bgSurface);
  root.style.setProperty("--bg-surface-strong", theme.bgSurfaceStrong);
  root.style.setProperty("--text-main", theme.textMain);
  root.style.setProperty("--text-soft", theme.textSoft);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-soft", theme.accentSoft);
  root.style.setProperty("--shadow", theme.shadow);
  root.style.setProperty("--card-border", theme.cardBorder);
}

function formatPhoneForDisplay(phone) {
  if (phone === "+201001040999") {
    return "+20 100 104 0999";
  }

  return phone;
}

function buildMapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function buildWhatsappUrl(phone) {
  return `https://wa.me/${phone.replace(/[^\d]/g, "")}`;
}

function buildVCard(profile) {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name}`,
    `ORG:${profile.company}`,
    `TITLE:${profile.role}`,
    `TEL;TYPE=CELL:${profile.phone}`,
    `EMAIL;TYPE=INTERNET:${profile.email}`,
    `URL:${profile.website}`,
    `ADR;TYPE=WORK:;;${profile.address};;;;`,
    "END:VCARD"
  ].join("\n");
}

function buildAvatarFallback(profile) {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${profile.theme.bgMain}" />
          <stop offset="100%" stop-color="${profile.theme.accent}" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" fill="url(#bg)" rx="160" />
      <text
        x="50%"
        y="52%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="108"
        font-weight="700"
      >${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createActionLink({ label, value, href, icon, delay, download, onClick }) {
  const link = document.createElement("a");
  link.className = "action-link";
  link.href = href || "#";
  link.style.animationDelay = `${delay}ms`;

  if (download) {
    link.setAttribute("download", download);
  }

  if (href && !download && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  if (onClick) {
    link.addEventListener("click", onClick);
  }

  link.innerHTML = `
    <span class="action-icon">${iconMap[icon]}</span>
    <span class="action-content">
      <span class="action-label">${label}</span>
      <span class="action-value">${value}</span>
    </span>
    <span class="action-chevron" aria-hidden="true">&rsaquo;</span>
  `;

  return link;
}

function createContactDownload(profile) {
  const content = buildVCard(profile);
  const blob = new Blob([content], { type: "text/vcard;charset=utf-8" });
  return URL.createObjectURL(blob);
}

function renderProfile(profile) {
  applyTheme(profile.theme);
  document.documentElement.style.setProperty("--avatar-position", profile.imagePosition);

  document.title = `${profile.name} | Digital Business Card`;
  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileRole").textContent = profile.role;
  document.getElementById("profileCompany").textContent = profile.company;
  document.getElementById("profileTagline").textContent = profile.tagline;

  const image = document.getElementById("profileImage");
  image.src = profile.image;
  image.alt = `${profile.name} profile photo`;
  image.onerror = () => {
    image.onerror = null;
    image.src = buildAvatarFallback(profile);
  };

  const actionList = document.getElementById("actionList");
  const vCardUrl = createContactDownload(profile);

  const actions = [
    {
      label: "Address",
      value: profile.address,
      href: buildMapsUrl(profile.address),
      icon: "location"
    },
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "email"
    },
    {
      label: "Website",
      value: profile.website.replace(/^https?:\/\//, ""),
      href: profile.website,
      icon: "website"
    },
    {
      label: "Phone",
      value: formatPhoneForDisplay(profile.phone),
      href: `tel:${profile.phone}`,
      icon: "phone"
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: buildWhatsappUrl(profile.whatsapp),
      icon: "whatsapp"
    },
    {
      label: "Contact",
      value: "Save contact",
      href: vCardUrl,
      icon: "contact",
      download: `${profile.slug}.vcf`
    }
  ];

  actionList.innerHTML = "";
  actions.forEach((action, index) => {
    actionList.appendChild(createActionLink({ ...action, delay: 120 + index * 70 }));
  });
}

function renderMissingProfile(slug) {
  const fallback = profiles["saed-kamel"];

  renderProfile(fallback);
  document.getElementById("profileTagline").textContent =
    `Profile "${slug}" was not found yet. Add it in profiles.js.`;
}

const requestedSlug = getRequestedSlug();
const currentProfile = profiles[requestedSlug];

if (currentProfile) {
  renderProfile(currentProfile);
} else {
  renderMissingProfile(requestedSlug);
}
