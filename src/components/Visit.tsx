import { CONTACT, HOURS } from "@/data/content";
import { ReservationForm } from "./ReservationForm";

export function Visit() {
  return (
    <section id="visitanos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-semibold">Visitanos</h2>
          <address className="mt-6 not-italic text-tostado">
            <p>{CONTACT.address}</p>
            <p className="mt-1">
              <a className="underline hover:text-espresso" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </p>
          </address>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-terracota">Horarios</h3>
          <dl className="mt-4 divide-y divide-crema-oscura">
            {HOURS.map((row) => (
              <div key={row.days} className="flex justify-between py-3">
                <dt>{row.days}</dt>
                <dd className="font-medium">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="reservar" className="scroll-mt-24">
          <h2 className="font-display text-4xl font-semibold">Reservá tu mesa</h2>
          <p className="mt-3 mb-6 text-tostado">Para grupos de más de 8, escribinos por WhatsApp.</p>
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
