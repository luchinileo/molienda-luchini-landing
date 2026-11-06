"use client";

import { useState } from "react";
import { BUSINESS_NAME, NAV_LINKS } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-crema-oscura bg-crema/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#inicio" className="font-display text-2xl font-semibold tracking-tight">
          {BUSINESS_NAME}
        </a>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-tostado transition hover:text-espresso">
              {link.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="rounded-full bg-terracota px-5 py-2 font-medium text-white transition hover:bg-terracota-oscura"
          >
            Reservar mesa
          </a>
        </nav>

        {/* Botón del menú en celular */}
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-crema-oscura px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {[...NAV_LINKS, { href: "#reservar", label: "Reservar mesa" }].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block py-3 text-lg" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
