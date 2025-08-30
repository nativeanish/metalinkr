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
  Plus,
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
import { Button } from "@/components/ui/button";
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
        { name: "Image", alt: "Image", icon: Image, description: "Upload and display images in your profile" },
        { name: "Url", alt: "Url", icon: Link2, description: "Add custom links to any website or resource" },
      ],
    },
    {
      name: "Text",
      icon: AlignCenter,
      node: [
        { name: "Text", alt: "Text", icon: AlignCenter, description: "Add formatted text blocks and paragraphs" },
        { name: "Header", alt: "Header", icon: FaHeading, description: "Create section headers and titles" },
      ],
    },
    {
      name: "File",
      icon: File,
      node: [
        { name: "PDF", alt: "PDF", icon: FaFilePdf, description: "Share PDF documents and files" },
        {
          name: "File",
          alt: "File",
          icon: FaFile,
          description: "Upload and share various file types",
        },
      ],
    },
    {
      name: "Publishing",
      icon: BookCheck,
      node: [
        { name: "Medium", alt: "Medium", icon: FaMedium, description: "Feature your Medium articles and stories" },
        { name: "Paragraph", alt: "Paragraph", icon: Paragraph, description: "Share your Paragraph blog posts" },
        { name: "Mirror", alt: "Mirror", icon: Mirror, description: "Display your Mirror publications" },
      ],
    },
    {
      name: "Video",
      icon: Clapperboard,
      node: [
        { name: "Youtube Video", alt: "YTVideo", icon: FaYoutube, description: "Embed YouTube videos and playlists" },
        { name: "Odysee Video", alt: "Odysee", icon: Odysee, description: "Share videos from Odysee platform" },
        { name: "Twitch Video", alt: "Twitch", icon: FaTwitch, description: "Feature Twitch clips and highlights" },
      ],
    },
    {
      name: "Post",
      icon: Repeat,
      node: [
        { name: "Tweet", alt: "Tweet", icon: FaRetweet, description: "Embed specific tweets and Twitter posts" },
        { name: "Facebook Post", alt: "Post", icon: FaFacebook, description: "Share Facebook posts and updates" },
        { name: "Farcaster", alt: "Farcaster", icon: SiFarcaster, description: "Display Farcaster casts and content" },
        { name: "Insta Post", alt: "Insta Post", icon: FaInstagram, description: "Feature Instagram posts and reels" },
      ],
    },
    {
      name: "Community",
      icon: Users,
      node: [
        { name: "Telegram", alt: "Telegram", icon: FaTelegram, description: "Link to Telegram groups and channels" },
        { name: "Discord", alt: "Discord", icon: FaDiscord, description: "Connect Discord servers and communities" },
        { name: "Reddit", alt: "Reddit", icon: FaReddit, description: "Share Reddit communities and discussions" },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.nav
                .find((item) => item.name === selected)
                ?.node.map((block) => (
                  <div
                    key={block.name}
                    className="group relative flex flex-col p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 min-h-[140px]"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                        <block.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {block.name}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {block.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <Button 
                        size="sm" 
                        className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add {block.name}
                      </Button>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                    
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
