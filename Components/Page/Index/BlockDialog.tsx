import {
  MessageCircle,
  AlignCenter,
  Users,
  Clapperboard,
  File,
  Repeat,
  BookCheck,
  Link,
  Image,
  Link2,
} from "lucide-react";
import { SiFarcaster } from "react-icons/si";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import Paragraph from "../../../Image/Paragraph";
import Odysee from "../../../Image/Odysee";
import Mirror from "../../../Image/Mirror";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  FaDiscord,
  FaFacebook,
  FaFile,
  FaFilePdf,
  FaHeading,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaRetweet,
  FaTelegram,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import social from "../../../utils/social";
const data = {
  nav: [
    { name: "Social", icon: MessageCircle, node: social },
    {
      name: "General",
      icon: Link,
      node: [
        { name: "Image", alt: "Image", icon: Image },
        { name: "Url", alt: "Url", icon: Link2 },
      ],
    },
    {
      name: "Text",
      icon: AlignCenter,
      node: [
        { name: "Text", alt: "Text", icon: AlignCenter },
        { name: "Header", alt: "Header", icon: FaHeading },
      ],
    },
    {
      name: "File",
      icon: File,
      node: [
        { name: "PDF", alt: "PDF", icon: FaFilePdf },
        {
          name: "File",
          alt: "File",
          icon: FaFile,
        },
      ],
    },
    {
      name: "Publishing",
      icon: BookCheck,
      node: [
        { name: "Medium", alt: "Medium", icon: FaMedium },
        { name: "Paragraph", alt: "Paragraph", icon: Paragraph },
        { name: "Mirror", alt: "Mirror", icon: Mirror },
      ],
    },
    {
      name: "Video",
      icon: Clapperboard,
      node: [
        { name: "Youtube Video", alt: "YTVideo", icon: FaYoutube },
        { name: "Odysee Video", alt: "Odysee", icon: Odysee },
        { name: "Twitch Video", alt: "Twitch", icon: FaTwitch },
      ],
    },
    {
      name: "Post",
      icon: Repeat,
      node: [
        { name: "Tweet", alt: "Tweet", icon: FaRetweet },
        { name: "Facebook Post", alt: "Post", icon: FaFacebook },
        { name: "Farcaster", alt: "Farcaster", icon: SiFarcaster },
        { name: "Insta Post", alt: "Insta Post", icon: FaInstagram },
      ],
    },
    {
      name: "Community",
      icon: Users,
      node: [
        { name: "Telegram", alt: "Telegram", icon: FaTelegram },
        { name: "Discord", alt: "Discord", icon: FaDiscord },
        { name: "Reddit", alt: "Reddit", icon: FaReddit },
      ],
    },
  ],
};

export default function BlockDialog() {
  const [selected, setSelected] = useState(data.nav[0].name);
  return (
    <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
      <DialogTitle className="sr-only">Settings</DialogTitle>
      <DialogDescription className="sr-only">
        Customize your settings here.
      </DialogDescription>
      <SidebarProvider className="items-start">
        <Sidebar collapsible="none" className="hidden md:flex">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {data.nav.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={item.name === selected}
                      >
                        <button onClick={() => setSelected(item.name)}>
                          <item.icon />
                          <span>{item.name}</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Add Block</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{selected}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.nav
                .find((item) => item.name === selected)
                ?.node.map((block) => (
                  <div
                    key={block.name}
                    className="group relative flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 cursor-pointer min-h-[120px]"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <block.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                        {block.name}
                      </span>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    
                    {/* Selection indicator */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
            </div>
          </div>
        </main>
      </SidebarProvider>
    </DialogContent>
  );
}
