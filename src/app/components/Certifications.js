"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const certifications = [
  { name: "Certified Pool Operator", img: "/images/swimming-pool-top-view.jpg" },
  { name: "Poolside Sunset", img: "/images/poolside:sunset.jpg" },
  { name: "Pool Robot", img: "/images/poolsidex:robot.jpg" },
  { name: "Another Certification", img: "/images/swimming-pool-top-view.jpg" },
  { name: "Yet Another", img: "/images/poolside:sunset.jpg" },
];

export default function Certifications() {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Update visible items on resize
  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth < 640 ? 2 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Extended list for looping
  const extended = [...certifications, ...certifications.slice(0, visible)];

  // Move to next slide
  const next = () => {
    setIndex((prev) => prev + 1);
  };

  // Auto scroll
  useEffect(() => {
    intervalRef.current = setInterval(next, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause on hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stop = () => clearInterval(intervalRef.current);
    const start = () => (intervalRef.current = setInterval(next, 4000));

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    return () => {
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  }, []);

  // Seamless loop
  useEffect(() => {
    if (index === certifications.length) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(0);
      }, 500); // Match CSS transition duration
    } else {
      setTransitionEnabled(true);
    }
  }, [index]);

  const translatePercent = -(index * (100 / visible));

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto py-12 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            width: `${(extended.length * 100) / visible}%`,
            transform: `translateX(${translatePercent}%)`,
          }}
        >
          {extended.map((cert, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-2 sm:px-4"
              style={{ width: `${100 / extended.length}%` }}
            >
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
                <div className="relative w-48 h-32 mb-4">
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 640px) 120px, 192px"
                  />
                </div>
                <span className="text-base font-medium text-center">{cert.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
