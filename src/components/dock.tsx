import type { ReactNode } from "react";
import { FloatingDock } from "./aceternity/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const FLOATING_DOCK_ITEMS: { title: string; icon: ReactNode; href: string }[] =
  [
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/iaminarush/",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-neutral-300" />,
      href: "mailto:patrickcheng@tutanota.com",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/patrick-cheng-020643166/",
    },
  ];

export const Dock = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed bottom-8 flex items-center justify-center w-full h-[12rem]"
    >
      <FloatingDock items={FLOATING_DOCK_ITEMS} />
    </motion.div>
  );
};
