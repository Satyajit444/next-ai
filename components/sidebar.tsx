"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  BookOpen,
  Component,
  Palette,
  Store,
  Rss,
  Boxes,
  Play,
  CloudCog,
  Paintbrush2,
  Hand,
  ChevronDown,
  ChevronUp,
  BrainCog,
} from "lucide-react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useState } from "react";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Docs",
    icon: BookOpen,
    href: "/dashboard",
    color: "text-sky-500",
    subDomains: [
      {
        label: "Install",
        icon: CloudCog,
        href: "/dashboard/nested-route-1",
        color: "text-black-500",
      },
      {
        label: "Use",
        icon: Hand,
        href: "/dashboard/nested-route-2",
        color: "text-blue-300",
      },
      {
        label: "Customize components",
        icon: BrainCog,
        href: "/dashboard/nested-route-3",
        color: "text-gray-700",
      },
      {
        label: "Colors",
        icon: Paintbrush2,
        href: "/dashboard/nested-route-4",
        color: "text-red-500",
      },
      {
        label: "Themes",
        icon: Palette,
        href: "/dashboard/nested-route-4",
        color: "text-green-400",
      },
    ],
  },
  {
    label: "Components",
    icon: Component,
    href: "/components",
    color: "text-violet-500",
  },
  {
    label: "Theme Generator",
    icon: Palette,
    color: "text-pink-700",
    href: "/theme",
  },
  {
    label: "Store",
    icon: Store,
    color: "text-orange-700",
    href: "/store",
  },
  {
    label: "Blog",
    icon: Rss,
    color: "text-emerald-500",
    href: "/blog",
  },
  {
    label: "Resources",
    icon: Boxes,
    color: "text-green-700",
    href: "/resources",
  },
  {
    label: "Playground",
    icon: Play,
    href: "/playground",
  },
];

interface Route {
  label: string;
  href: string;
  subDomains?: DocList[];
}

interface DocList {
  label: string;
  href: string;
}

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [openRoute, setOpenRoute] = useState<string | null>(null);

  const handleRouteClick = (href: string) => {
    setOpenRoute((prevRoute) => (prevRoute === href ? null : href));
  };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-glass">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/saka.png" />
          </div>
          <h1
            className={cn("text-2xl font-bold text-black", poppins.className)}
          >
            SAKA Ui
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route, index) => (
            <div
              key={route.label}
              className="space-y-1"
              onClick={() => handleRouteClick(route.href)}
            >
              {/* Main Route */}
              <Link
                href={route.href}
                className={cn(
                  "text-sm group flex px-3 py-2 w-full justify-start cursor-pointer  hover:bg-[#d8d7d7] rounded-lg transition",
                  pathname === route.href
                    ? "text-black bg-[#d8d7d7]"
                    : "text-black"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
                {route.subDomains && route.subDomains.length > 0 ? (
                  <>
                    {openRoute === route.href ? <ChevronUp /> : <ChevronDown />}
                  </>
                ) : null}
              </Link>

              {index === 2 ? (
                <div className="h-10 flex items-center">
                  <hr className="w-full" />
                </div>
              ) : null}

              {/* Nested Routes (subDomains) */}

              {openRoute === route.href && route.subDomains && (
                <div className="pl-6 space-y-1">
                  {route.subDomains.map((docList) => (
                    <Link
                      key={docList.href}
                      href={docList.href}
                      className={cn(
                        "text-xs group flex px-3 py-1.5 w-full justify-start hover:bg-[#d8d7d7] font-medium cursor-pointer hover:font-semibold rounded-lg transition",
                        pathname === docList.href
                          ? "text-white bg-[#d8d7d7]"
                          : "text-black"
                      )}
                    >
                      <div className="flex items-center flex-1">
                        <docList.icon
                          className={cn("h-5 w-5 mr-3", docList.color)}
                        />
                        {docList.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
