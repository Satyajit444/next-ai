"use client";

import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <div
        className="leading-normal tracking-normal text-indigo-400 grayscale-0 blur-[30%] bg-cover bg-fixed h-screen"
        style={{ backgroundImage: "url('header.png')" }}
      >
        <div className="h-full">
          {/* <!--Main--> */}
          <div className="px-[5%] pt-24  mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full xl:w-[40%] justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                The
                <div className="flex gap-y-3">
                  <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                    Top-Tier &nbsp;
                  </div>
                  <div>
                    <TypewriterComponent
                      options={{
                        strings: [
                          "UI Toolkit",
                          "Utility Classes",
                          "UI Components",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </h1>
              <p className="text-sm text-white my-8 text-center md:text-left">
                Transform your web design with the Top-Tier UI Toolkit,
                delivering unparalleled versatility and performance in a single,
                customizable suite.
              </p>
            </div>

            {/* <!--Right Col--> */}
            <div className="w-full xl:w-3/5 p-12 overflow-hidden">
              <img
                className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src="macbook.svg"
                alt="Macbook Image"
              />
              {/* <Cards/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
