import {
  FaBluesky,
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaMedium,
  FaReddit,
  FaSnapchat,
  FaTwitch,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { RiMailFill, RiTelegram2Fill } from "react-icons/ri";
import { SiFarcaster } from "react-icons/si";
import Odysee from "../Image/Odysee";
import Mirror from "../Image/Mirror";
const social = [
  { name: "X (Twitter)", icon: FaXTwitter, alt: "Twitter" },
  { name: "Telegram", icon: RiTelegram2Fill, alt: "Telegram" },
  { name: "Discord", icon: FaDiscord, alt: "Discord" },
  { name: "Farcaster", icon: SiFarcaster, alt: "Farcaster" },
  { name: "Medium", icon: FaMedium, alt: "Medium" },
  { name: "Mirror", icon: Mirror, alt: "Mirror" },
  { name: "Youtube", icon: FaYoutube, alt: "Youtube" },
  { name: "Github", icon: FaGithub, alt: "Github" },
  { name: "Instagram", icon: FaInstagram, alt: "Instagram" },
  { name: "Facebook", icon: FaFacebook, alt: "Facebook" },
  { name: "Linkedin", icon: FaLinkedin, alt: "Linkedin" },
  { name: "Twitch", icon: FaTwitch, alt: "Twitch" },
  { name: "Reddit", icon: FaReddit, alt: "Reddit" },
  { name: "Whatsapp", icon: FaWhatsapp, alt: "Whatsapp" },
  { name: "Snapchat", icon: FaSnapchat, alt: "Snapchat" },
  { name: "BlueSky", icon: FaBluesky, alt: "BlueSky" },
  { name: "Url", icon: FaLink, alt: "Url" },
  { name: "Email", icon: RiMailFill, alt: "Email" },
  { name: "Odysee", icon: Odysee, alt: "Odysee" },
];
export default social;
