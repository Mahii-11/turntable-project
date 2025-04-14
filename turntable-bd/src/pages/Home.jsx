import Hero from "../components/home/Hero";
import Showcase from "../components/home/Showcase";
import Features from "../components/home/Features";
import Experience from "../components/home/Experience";
import Gallery from "../components/home/Gallery";
import CallToAction from "../components/home/CallToAction";
import { useEffect } from "react";
import React from "react";
import Featured from "../ui/Featured";
import TestimonialSection from "../ui/TestimonialSection";
import FAQSection from "../ui/FAQSection";

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden -mt-9">
      <Hero />
      <Showcase />
      <Features />
      <Experience />
      <Gallery />
      <CallToAction />
      <Featured />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}
