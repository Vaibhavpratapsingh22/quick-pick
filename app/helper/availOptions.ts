import {
  Code,
  Image,
  LayoutDashboard,
  MessageCircle,
  Music,
  Video,
} from "lucide-react";

export const availOptions = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Conversation",
    icon: MessageCircle,
    href: "/conversation-generation",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Image Generation",
    icon: Image,
    href: "/image-generation",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "Music Generation",
    icon: Music,
    href: "/music-generation",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Video Generation",
    icon: Video,
    href: "/video-generation",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Code Generation",
    icon: Code,
    href: "/code-generation",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];
