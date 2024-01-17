import {
  Code,
  Image,
  LayoutDashboard,
  MessageCircle,
  Music,
  Settings,
  Video,
} from "lucide-react";

export const availOptions = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-[#7E6363]",
    bgColor: "bg-[#F5EEE6]",
  },
  {
    name: "Conversation",
    icon: MessageCircle,
    href: "/conversation-generation",
    color: "text-[#65B741]",
    bgColor: "bg-[#F5EEE6]",
  },
  {
    name: "Image Generation",
    icon: Image,
    href: "/image-generation",
    color: "text-[#FF004D]",
    bgColor: "bg-[#F5EEE6]",
  },
  {
    name: "Music Generation",
    icon: Music,
    href: "/music-generation",
    color: "text-[#DC84F3]",
    bgColor: "bg-[#F5EEE6]",
  },
  {
    name: "Video Generation",
    icon: Video,
    href: "/video-generation",
    color: "text-[#11235A]",
    bgColor: "bg-[#F5EEE6]",
  },
  {
    name: "Code Generation",
    icon: Code,
    href: "/code-generation",
    color: "text-[#FF9800]",
    bgColor: "bg-[#F5EEE6]",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-[#7E6363]",
    bgColor: "bg-[#F5EEE6]",
  },
];
