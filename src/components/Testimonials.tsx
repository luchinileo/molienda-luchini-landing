import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-crema-oscura">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-4xl font-semibold">Lo que dicen los vecinos</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.author}>
              <figure className="h-full rounded-2xl bg-crema p-6 shadow-sm">
                <blockquote className="font-display text-lg leading-relaxed">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-tostado">— {testimonial.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
