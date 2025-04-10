"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const ImagRef = useRef(null);

  useEffect(() => {
    const ImageElement = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        ImageElement.classList.add("scrolled");
      } else {
        ImageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold ms:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Career Coach for <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidane, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="Flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          <Link href="/https://www.youtube.com/roadsidecoder">
            <Button size="lg" className="px-8" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>

        <div>
          <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={ImageRef} className="hero-image">
              <Image
                src={"/banner.jpeg"}
                width={1200}
                height={720}
                alt="Banner AI-Career-Coach"
                className="rounded-lg shadow-2x1 border mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
