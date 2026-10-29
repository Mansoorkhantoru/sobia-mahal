import Link from "next/link";

const values = [
  {
    icon: "⌂",
    title: "Heritage",
    description: "Preserving our rich history and cultural identity.",
  },
  {
    icon: "✧",
    title: "Education",
    description: "Inspiring learning and future generations.",
  },
  {
    icon: "♜",
    title: "Tourism",
    description: "Creating memorable cultural experiences.",
  },
  {
    icon: "❋",
    title: "Community",
    description: "Bringing people together through tradition.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f8f1df] text-[#332820]">
    

      <section className="relative flex min-h-[430px] items-center bg-[url('/images/title-hero.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#152219]/60 via-[#152219]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4b779]">
            Our Heritage · Our Identity
          </p>

          <h1 className="mb-4 font-serif text-5xl text-white sm:text-6xl lg:text-7xl">
            Our Story
          </h1>

          <h2 className="mb-5 max-w-xl font-serif text-2xl leading-relaxed text-white sm:text-3xl">
            Preserving History.
            <br />
            Inspiring Future Generations.
          </h2>

          <p className="max-w-md text-sm leading-7 text-[#f2eadc] sm:text-base">
            Discover the timeless beauty of our heritage, where history,
            culture and elegance come together.
          </p>

          <div className="mt-7 h-0.5 w-16 bg-[#b99a5b]" />
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#a78b55]">
            A Legacy of Purpose
          </p>

          <h2 className="mb-6 font-serif text-4xl text-[#30251f] sm:text-5xl">
            Founder’s Vision
          </h2>

          <p className="mb-4 text-sm leading-7 text-[#746454] sm:text-base">
            Every great legacy begins with a vision. Sobia Mahal represents
            a commitment to preserving our cultural heritage while creating
            a place that inspires generations to come.
          </p>

          <p className="mb-7 text-sm leading-7 text-[#746454] sm:text-base">
            Through heritage, education and tourism, our vision is to bring
            history to life and create meaningful experiences that connect
            people with our past.
          </p>

          <Link
            href="/about/story"
            className="inline-flex items-center gap-4 rounded-lg bg-[#a33a74] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a33a98]"
          >
            Read Full Story <span>→</span>
          </Link>
        </div>

        <div className="relative pr-2 pb-2">
          <img
            src="/images/founder.jpeg"
            alt="Founder of Sobia Mahal"
            className="relative z-10 h-[280px] w-full rounded-lg border border-[#b99a5b]/50 object-cover sm:h-[460px] lg:h-[500px]"
          />
          <div className="absolute right-0 bottom-0 h-24 w-24 border-r-2 border-b-2 border-[#b99a5b]" />
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-4 px-6">
        <span className="h-px w-24 bg-[#b99a5b]/60 sm:w-36" />
        <span className="text-2xl text-[#b99a5b]">✧</span>
        <span className="h-px w-24 bg-[#b99a5b]/60 sm:w-36" />
      </div>

      {/* Values */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-10 sm:px-10 sm:py-14 lg:grid-cols-4 lg:px-16">
        {values.map((value, index) => (
          <article
            key={value.title}
            className={`border-[#b99a5b]/30 px-3 py-7 text-center sm:px-6 ${
              index % 2 === 0 ? "border-r" : ""
            } ${
              index < 2 ? "border-b lg:border-b-0" : ""
            } ${
              index === 1 ? "lg:border-r" : ""
            } ${
              index === 3 ? "lg:border-r-0" : ""
            }`}
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#b99a5b] font-serif text-3xl text-[#b99a5b] transition hover:bg-[#792c4c] hover:text-white">
              {value.icon}
            </div>

            <h3 className="mb-2 font-serif text-xl font-semibold text-[#30251f] sm:text-2xl">
              {value.title}
            </h3>

            <p className="mx-auto max-w-[220px] text-xs leading-6 text-[#746454] sm:text-sm">
              {value.description}
            </p>
          </article>
        ))}
      </section>

      {/* Closing Section */}
      <section className="border-y border-[#b99a5b]/25 bg-[#f0e5cd] px-6 py-16 text-center sm:px-10 sm:py-20">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#a78b55]">
          The Sobia Mahal Promise
        </p>

        <h2 className="mx-auto mb-5 max-w-3xl font-serif text-3xl text-[#30251f] sm:text-4xl lg:text-5xl">
          Honouring Our Past, Inspiring Our Future
        </h2>

        <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-[#746454] sm:text-base">
          A place where heritage lives on and every visit becomes part
          of a timeless story.
        </p>

        <Link
          href="/#visit"
          className="inline-flex items-center gap-3 rounded-lg bg-[#a33a74] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a33a98]"
        >
          Discover Sobia Mahal →
        </Link>
      </section>

      {/* Footer */}
      {/* <footer className="bg-[#492033] px-6 py-10 text-center text-[#f8f1df]">
        <Link href="/" className="font-serif text-2xl tracking-[0.15em]">
          SOBIA MAHAL
        </Link>

        <p className="mt-3 text-sm text-[#e0d1c0]">
          A legacy of heritage, culture and elegance.
        </p>

        <div className="mx-auto my-6 h-px max-w-xs bg-[#b99a5b]/40" />

        <p className="text-xs text-[#cdbba8]">
          © {new Date().getFullYear()} Sobia Mahal. All rights reserved.
        </p>
      </footer> */}
    </main>
  );
}