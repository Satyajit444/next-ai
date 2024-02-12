"use client";

import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export default function Components() {

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Discover a Comprehensive Component Library
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Effortlessly construct webpages with our extensive collection of
          components...
        </p>
      </div>

      <div className="text-white font-bold py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>Empower Your UI with Saka-UI</h1>
          <div className="  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: ["Versatile Components", "Seamless Integration"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Elevate your web development experience with the extensive Saka-UI
          component list.
        </div>
        <div>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Try it Out Now
          </Button>
        </div>
      </div>
    </div>
  );
}
