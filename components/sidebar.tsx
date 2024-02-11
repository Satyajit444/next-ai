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
} from "lucide-react";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Docs",
    icon: BookOpen,
    href: "/dashboard",
    color: "text-sky-500",
    docLists: [
      {
        label: "Install",
        icon: BookOpen,
        href: "/dashboard/nested-route-1",
        color: "text-black-500",
      },
      {
        label: "Use",
        icon: BookOpen,
        href: "/dashboard/nested-route-2",
        color: "text-blue-300",
      },
      {
        label: "Customize components",
        icon: BookOpen,
        href: "/dashboard/nested-route-3",
        color: "text-gray-700",
      },
      {
        label: "Colors",
        icon: BookOpen,
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
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Theme Generator",
    icon: Palette,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Store",
    icon: Store,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Blog",
    icon: Rss,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Resources",
    icon: Boxes,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Playground",
    icon: Play,
    href: "/settings",
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#fff] text-white">
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
          {routes.map((route) => (
            <div key={route.label} className="space-y-1">
              {/* Main Route */}
              <Link
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:font-bold hover:bg-[#d8d7d7] rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-[#333] hover:bg-[#333]"
                    : "text-black"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>

              {/* Nested Routes (docLists) */}
              {route.docLists && (
                <div className="pl-6 space-y-1">
                  {route.docLists.map((docList) => (
                    <Link
                      key={docList.href}
                      href={docList.href}
                      className={cn(
                        "text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:font-semibold rounded-lg transition",
                        pathname === docList.href
                          ? "text-white bg-[#333] hover:bg-[#333]"
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
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};
