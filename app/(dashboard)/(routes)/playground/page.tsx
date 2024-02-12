"use client";

import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export default function Playground() {

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore The most powerful component library
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Build webpages in less time...
        </p>
      </div>

      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>The Top-Tier UI Toolkit</h1>
          <div className="  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: ["Utility Classes", "UI Components"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Build your web pages faster with saka-ui.
        </div>
        <div>
            <Button
              variant="premium"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Let's have a try.
            </Button>
        </div>
      </div>
    </div>
  );
}
