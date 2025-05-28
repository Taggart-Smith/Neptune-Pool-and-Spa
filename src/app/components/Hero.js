import Image from "next/image";

export default function Hero({ title, subtitle, image, cta }) {
  return (
    <section className="hero relative flex flex-col items-center justify-center text-center py-16 bg-blue-50 my-8">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
      )}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-6">{subtitle}</p>
        {cta}
      </div>
    </section>
  );
}