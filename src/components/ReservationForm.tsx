"use client";

import { useState, type FormEvent } from "react";

// Fecha local en formato AAAA-MM-DD (toISOString usaría UTC y de noche daría "mañana").
function localToday(): string {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

type Errors = Partial<Record<"name" | "email" | "date" | "people", string>>;

// Valida los datos del formulario. Está separada del componente para poder testearla sola.
export function validateReservation(data: FormData, today: string): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const date = String(data.get("date") ?? "");
  const people = Number(data.get("people"));

  if (name.length < 2) errors.name = "Escribí tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Revisá el email.";
  if (!date) errors.date = "Elegí una fecha.";
  else if (date < today) errors.date = "La fecha no puede ser en el pasado.";
  if (!Number.isInteger(people) || people < 1 || people > 8) errors.people = "Entre 1 y 8 personas.";

  return errors;
}

export function ReservationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found = validateReservation(data, localToday());
    setErrors(found);
    // Sin backend: en un proyecto real acá se enviaría la reserva a una API.
    if (Object.keys(found).length === 0) setSentTo(String(data.get("name")).trim());
  }

  if (sentTo) {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="font-display text-2xl font-semibold">¡Listo, {sentTo}!</p>
        <p className="mt-2 text-tostado">Te escribimos por email para confirmar tu mesa.</p>
        <button type="button" className="mt-6 font-medium text-terracota underline" onClick={() => setSentTo(null)}>
          Hacer otra reserva
        </button>
      </div>
    );
  }

  const field = "mt-1 w-full rounded-lg border border-tostado/40 bg-white px-4 py-3 focus:border-terracota focus:outline-2 focus:outline-terracota";

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <Field label="Nombre" name="name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
      </Field>
      <Field label="Email" name="email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
      </Field>
      <Field label="Fecha" name="date" error={errors.date}>
        <input id="date" name="date" type="date" onFocus={(e) => (e.currentTarget.min = localToday())} className={field} aria-invalid={!!errors.date} aria-describedby={errors.date ? "date-error" : undefined} />
      </Field>
      <Field label="Personas" name="people" error={errors.people}>
        <input id="people" name="people" type="number" min={1} max={8} defaultValue={2} className={field} aria-invalid={!!errors.people} aria-describedby={errors.people ? "people-error" : undefined} />
      </Field>
      <button
        type="submit"
        className="rounded-full bg-terracota px-7 py-3 font-medium text-white transition hover:bg-terracota-oscura sm:col-span-2"
      >
        Reservar
      </button>
    </form>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-terracota">
          {error}
        </p>
      )}
    </div>
  );
}
