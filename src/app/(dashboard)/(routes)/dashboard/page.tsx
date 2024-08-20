"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="mb-8 space-y-4">
      <div className="text-center text-2xl font-bold md:text-4xl">
        <h1>Explore the power of AI</h1>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
        <div className="space-y-4 px-4 md:px-20 lg:px-32">
          {tools.map((tool) => (
            <Card
              onClick={() => {
                router.push(tool.href);
              }}
              key={tool.href}
              className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                  <tool.icon className={cn("h-8 w-8", tool.color)} />
                </div>
                <div className="text-lg font-semibold md:text-xl">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="h-5 w-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
