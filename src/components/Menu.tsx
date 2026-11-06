import { MENU, formatPrice } from "@/data/content";

export function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-4xl font-semibold">Menú</h2>
      <p className="mt-3 text-tostado">Precios finales. Leche vegetal sin costo extra.</p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {MENU.map((section) => (
          <div key={section.category}>
            <h3 className="border-b border-crema-oscura pb-3 text-sm font-semibold uppercase tracking-widest text-terracota">
              {section.category}
            </h3>
            <ul className="divide-y divide-crema-oscura">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-tostado">{item.description}</p>
                  </div>
                  <p className="font-display text-lg whitespace-nowrap">{formatPrice(item.price)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
