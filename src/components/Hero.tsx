export function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-terracota">
          Café de especialidad de barrio
        </p>
        <h1 className="font-display text-5xl leading-tight font-semibold sm:text-6xl">
          Tu pausa favorita del día, a la vuelta de casa.
        </h1>
        <p className="mt-6 max-w-md text-lg text-tostado">
          Tostamos nuestro propio café, horneamos todas las mañanas y te guardamos la mesa de la ventana.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#reservar"
            className="rounded-full bg-terracota px-7 py-3 font-medium text-white transition hover:bg-terracota-oscura"
          >
            Reservar mesa
          </a>
          <a
            href="#menu"
            className="rounded-full border border-espresso px-7 py-3 font-medium transition hover:bg-espresso hover:text-crema"
          >
            Ver el menú
          </a>
        </div>
      </div>

      {/* Ilustración hecha con CSS: una taza vista desde arriba. Sin imágenes externas. */}
      <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-sm">
        <div className="absolute inset-0 rounded-full bg-crema-oscura" />
        <div className="absolute inset-[12%] rounded-full bg-white shadow-xl" />
        <div className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle_at_40%_35%,#8a5a3c,#3b2416_70%)]" />
        <div className="absolute inset-[38%] rounded-full border-4 border-[#e9d6bf]/70" />
        <div className="absolute top-1/2 -right-2 h-16 w-10 -translate-y-1/2 rounded-r-full border-8 border-l-0 border-white" />
      </div>
    </section>
  );
}
