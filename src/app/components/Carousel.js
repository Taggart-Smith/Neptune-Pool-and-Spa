'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const certifications = [
  { name: "Certified Pool Operator", img: "/images/swimming-pool-top-view.jpg" },
  { name: "Poolside Sunset", img: "/images/poolside:sunset.jpg" },
  { name: "Pool Robot", img: "/images/poolsidex:robot.jpg" },
  { name: "Another Certification", img: "/images/swimming-pool-top-view.jpg" },
  { name: "Yet Another", img: "/images/poolside:sunset.jpg" },
  { name: "Yet Another", img: "/images/poolside:sunset.jpg" },
];

// Cards per page based on screen width (change if needed)
const getCardsPerPage = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
  }
  return 3;
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  // Update cardsPerPage on resize
  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(certifications.length / cardsPerPage);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerPage, totalPages]);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % totalPages);
  };

  const startIndex = current * cardsPerPage;
  const visibleCards = certifications.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
      <div className="flex gap-4 transition-transform duration-500 ease-in-out">
        {visibleCards.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm flex-1"
          >
            <Image
              src={cert.img}
              alt={cert.name}
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-center">{cert.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
