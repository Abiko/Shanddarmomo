"use client";

import { useEffect, useRef, useState } from "react";
import { restaurant } from "@/lib/restaurant";

export function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    function updateVisibility() {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }

      if (window.scrollY <= 180) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);
      hideTimer.current = window.setTimeout(() => setIsVisible(false), 2400);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current);
      }
    };
  }, []);

  return (
    <div
      className={`mobile-contact-actions sm:hidden ${
        isVisible ? "mobile-contact-actions-visible" : ""
      }`}
      aria-label="Quick contact"
    >
      <a
        href={`tel:${restaurant.phoneHref}`}
        className="mobile-contact-button bg-[#d94f20] text-white hover:bg-[#c54419]"
        aria-label={`Call ${restaurant.name}`}
      >
        Call
      </a>
      <a
        href={restaurant.whatsappHref}
        className="mobile-contact-button bg-[#126b58] text-white hover:bg-[#0e5446]"
        aria-label={`Message ${restaurant.name} on WhatsApp`}
      >
        WA
      </a>
    </div>
  );
}
