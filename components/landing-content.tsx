"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Frontend Developer",
    description:
      "This UI library has greatly enhanced my web development projects! The components are intuitive and easy to customize.",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "UI/UX Designer",
    description:
      "As a designer, I love the aesthetics and flexibility this UI library provides. It's my go-to tool for creating visually stunning interfaces.",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "Tech Entrepreneur",
    description:
      "Implementing this UI library has streamlined our product development. It's an indispensable asset for our team, making our applications more user-friendly.",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "Financial Analyst",
    description:
      "Using this UI library has significantly improved the user experience of our financial applications. The attention to detail and responsiveness is unmatched, well worth the investment!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Voices of Satisfaction
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
