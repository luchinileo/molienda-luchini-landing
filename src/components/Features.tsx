import { FEATURES } from "@/data/content";

export function Features() {
  return (
    <section id="nosotros" className="bg-espresso text-crema">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="max-w-xl font-display text-4xl font-semibold">Hacemos pocas cosas, pero las hacemos bien.</h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <li key={feature.title}>
              <span className="font-display text-5xl text-[#e0a37f]">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-crema/80">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
