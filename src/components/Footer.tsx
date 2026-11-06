import { BUSINESS_NAME, CONTACT, SOCIAL, type SocialNetwork } from "@/data/content";

// Íconos dibujados con SVG propio: no dependen de ninguna librería ni imagen externa.
function SocialIcon({ network }: { network: SocialNetwork }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (network === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    );
  }

  if (network === "facebook") {
    return (
      <svg {...common}>
        <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1-2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso text-crema/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-crema">{BUSINESS_NAME}</p>
          <p className="mt-2 text-sm">Café de especialidad de barrio</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold tracking-widest text-crema uppercase">Dónde estamos</p>
          <p className="mt-3">{CONTACT.address}</p>
          <a href={CONTACT.phoneHref} className="mt-1 inline-block underline hover:text-crema">
            {CONTACT.phone}
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-crema uppercase">Seguinos</p>
          <ul className="mt-3 space-y-3">
            {SOCIAL.map((item) => (
              <li key={item.network}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:text-crema"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-crema/30 transition group-hover:border-crema group-hover:bg-crema group-hover:text-espresso">
                    <SocialIcon network={item.network} />
                  </span>
                  <span className="text-sm">
                    <span className="sr-only">{item.label}: </span>
                    {item.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-crema/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs sm:px-6">
          © {BUSINESS_NAME}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
