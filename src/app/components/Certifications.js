'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const certifications = [
  { name: "Certified Pool Operator", img: "/images/swimming-pool-top-view.jpg" },
  { name: "Poolside Sunset", img: "/images/poolside-sunset.jpg" },
  { name: "Pool Robot", img: "/images/poolsidex:robot.jpg" },
  { name: "Another Certification", img: "/images/swimming-pool-top-view.jpg" },
  { name: "Yet Another", img: "/images/poolside-sunset.jpg" },
  { name: "Yet Another", img: "/images/poolside-sunset.jpg" },
];

const Certifications = () => {
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef();

  // Responsive cards per page
  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(window.innerWidth < 768 ? 2 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate cards for seamless looping
  const extended = [...certifications, ...certifications.slice(0, cardsPerPage)];

  // Auto-advance one card at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerPage]);

  // Handle seamless loop transition
  useEffect(() => {
    if (current === certifications.length) {
      timeoutRef.current = setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 500); // match transition duration
    } else {
      setTransition(true);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Calculate translateX
  const translateX = -(current * (100 / extended.length));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 pb-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${(extended.length * 100) / cardsPerPage}%`,
            transform: `translateX(${translateX}%)`,
            transition: transition ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {extended.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 mx-3"
              style={{
                width: `calc(${100 / extended.length}% - 1.5rem)`, // 1.5rem = mx-3 left+right
                flexBasis: `calc(${100 / extended.length}% - 1.5rem)`,
              }}
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
      </div>
    </div>
  );
};

export default Certifications;
