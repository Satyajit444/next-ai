"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {

  return (
    <nav className="p-4 bg-glass fixed flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-14 w-14 mr-4">
          <Image fill alt="Logo" src="/saka.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          SAKA Ui
        </h1>
      </Link>
      {/* <div className="flex items-center gap-x-2">
        <Link href={'/dashboard'}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div> */}
    </nav>
  )
}