"use client";

import { useEffect, useMemo, useState } from "react";
import { User } from "lucide-react";

type TestimonialItem = {
  quote: string;
  title: string;
  name: string;
  role: string;
  result: string;
  avatar?: string;
};

interface TestimonialsProps {
  items: TestimonialItem[];
  className?: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials({ items, className = "" }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const slides = useMemo(() => {
    if (items.length <= 1) return [items];
    const result: TestimonialItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
      result.push([items[i], items[(i + 1) % items.length]]);
    }
    return result;
  }, [items]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  if (!items.length) return null;

  return (
    <div className={`w-full py-6 lg:py-8 ${className}`}>
      <div className="flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-deep-blue-foreground text-center">
            Trusted by <span className="gradient-text">Leading Organizations</span>
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((group, slideIndex) => (
                <div key={slideIndex} className="min-w-full grid gap-4 lg:grid-cols-2">
                  {group.map((item, index) => (
                    <article
                      key={`${item.name}-${index}`}
                      className="bg-deep-blue-foreground/8 border border-deep-blue-foreground/15 rounded-2xl p-5 min-h-[220px] flex flex-col justify-between backdrop-blur-md"
                    >
                      <User className="w-6 h-6 stroke-1 text-primary/80" />

                      <div className="flex flex-col gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-deep-blue-foreground mb-1.5">{item.title}</h3>
                          <p className="text-sm text-deep-blue-foreground/80 leading-relaxed">{item.quote}</p>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-deep-blue-foreground/60">By</span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-xs">
                            {item.avatar ? <img src={item.avatar} alt={item.name} className="h-full w-full rounded-full object-cover" /> : initials(item.name)}
                          </span>
                          <span className="text-deep-blue-foreground font-semibold">{item.name}</span>
                        </div>
                        <p className="text-xs text-deep-blue-foreground/65">{item.role}</p>
                        <span className="inline-flex w-fit rounded-full bg-primary/12 px-3 py-1 text-xs font-bold text-primary">
                          {item.result}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <div className="flex justify-center gap-2 pt-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimonial slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? "w-8 bg-primary" : "w-2.5 bg-deep-blue-foreground/35"
                  }`}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
