import React from "react";

function sanitizeWhatsAppNumber(value) {
  return String(value || "").replace(/\D/g, "");
}

function createWhatsAppLink(number, message = "Hi, please send me The Dupeshop ZA catalogue.") {
  const cleanNumber = sanitizeWhatsAppNumber(number);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

function runBasicTests() {
  console.assert(sanitizeWhatsAppNumber("+27 80 000 0000") === "27800000000", "Should remove spaces and plus sign");
  console.assert(sanitizeWhatsAppNumber("078-000-0000") === "0780000000", "Should remove dashes");
  console.assert(createWhatsAppLink("+27 80 000 0000").startsWith("https://wa.me/27800000000"), "Should create a valid WhatsApp link");
}

runBasicTests();

const Button = ({ children, variant = "solid", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-200";
  const styles =
    variant === "outline"
      ? "border border-yellow-500/60 text-yellow-300 hover:bg-yellow-500/10"
      : "bg-yellow-500 text-black hover:bg-yellow-400";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-[1.5rem] border border-yellow-500/20 bg-zinc-950 text-white shadow-xl shadow-black/20 ${className}`}>
    {children}
  </div>
);

const IconBadge = ({ icon }) => (
  <span className="mr-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-lg text-yellow-300">
    {icon}
  </span>
);

export default function DupeshopLandingPage() {
  const whatsappNumber = "27794427393";
  const whatsappLink = createWhatsAppLink(whatsappNumber);

  const categories = [
    { title: "Office Scents", desc: "Clean, fresh and professional fragrances for everyday wear.", icon: "💼" },
    { title: "Date Night", desc: "Warm, sweet and memorable scents with a luxury feel.", icon: "🌙" },
    { title: "Compliment Getters", desc: "Bold Dubai fragrances made to stand out.", icon: "✨" },
  ];

  const trustPoints = [
    { title: "100% Authentic", desc: "Only genuine Dubai fragrance brands. No fakes. No watered-down oils.", icon: "✓" },
    { title: "Curated Picks", desc: "We help you choose based on what you like, not just what is trending.", icon: "★" },
    { title: "Local Delivery", desc: "Courier options available across South Africa.", icon: "🚚" },
  ];

  const brands = ["Lattafa", "Afnan", "Armaf", "French Avenue", "Rasasi", "Khadlaj"];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-8 md:px-16 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.24),transparent_34%),linear-gradient(135deg,rgba(234,179,8,0.16),#000_45%,#000)]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-lg font-semibold tracking-[0.25em] text-yellow-400 md:text-xl">THE DUPESHOP ZA</div>
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <Button>WhatsApp Catalogue</Button>
            </a>
          </nav>

          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 px-4 py-2 text-sm text-yellow-300">
                <span>♛</span> Premium Dubai Fragrances
              </div>

              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Smell expensive. <span className="text-yellow-400">Pay smart.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                100% authentic Dubai fragrances inspired by luxury designer scents — curated for office wear, date nights and serious compliment power.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <Button className="px-8 py-4 text-base">💬 Order on WhatsApp</Button>
                </a>
                <a href="#best-sellers">
                  <Button variant="outline" className="px-8 py-4 text-base">View Best Sellers</Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto aspect-[4/5] max-w-md rounded-[2rem] border border-yellow-500/30 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-2xl shadow-yellow-500/10">
                <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-yellow-500/20 bg-black/70 text-center">
                  <div className="px-6">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10 text-5xl">✦</div>
                    <p className="text-3xl font-semibold text-yellow-400">Lattafa Khamrah Qahwa</p>
                    <p className="mt-3 text-zinc-400">The perfect warm luxury gift this Mother’s Day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <Card key={point.title}>
              <div className="p-6">
                <div className="mb-4 flex items-center">
                  <IconBadge icon={point.icon} />
                  <h3 className="text-xl font-semibold">{point.title}</h3>
                </div>
                <p className="text-zinc-400">{point.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="best-sellers" className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold">Shop by Vibe</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">Not sure what to buy? Start with the occasion.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((cat) => (
              <Card key={cat.title} className="bg-gradient-to-b from-zinc-950 to-black">
                <div className="p-8">
                  <div className="mb-5 text-4xl">{cat.icon}</div>
                  <h3 className="text-2xl font-semibold text-yellow-400">{cat.title}</h3>
                  <p className="mt-3 text-zinc-400">{cat.desc}</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <Button className="mt-6">Ask for Recommendations</Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold">Brands We Stock</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span key={brand} className="rounded-full border border-yellow-500/30 px-5 py-2 text-yellow-300">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">Need help choosing?</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            Tell us what you currently wear, your budget and the occasion. We’ll recommend the best Dubai alternative.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <Button className="mt-8 px-10 py-4 text-lg">💬 Message The Dupeshop ZA</Button>
          </a>
        </div>
      </section>
    </main>
  );
}
