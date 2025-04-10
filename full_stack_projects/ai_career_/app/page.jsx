import { features } from "@/components/data/features";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <section>
        <div>
          <h2>Powerful Features for Your Career Growth</h2>
          {features.map((feature, index) => {

          })}
        </div>
      </section>
    </div>
  );
}
