import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock.tsx";

export const DockContainer = () => {
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
      <Dock>
        <DockIcon>
          <a href="https://github.com/iaminarush/" target="_blank">
            <IconBrandGithub className="h-full w-full text-neutral-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a href="mailto:patrickcheng@tutanota.com">
            <IconMail className="h-full w-full text-neutral-300" />
          </a>
        </DockIcon>

        <DockIcon>
          <a
            href="https://www.linkedin.com/in/patrick-cheng-020643166/"
            target="_blank"
          >
            <IconBrandLinkedin className="h-full w-full text-neutral-300" />
          </a>
        </DockIcon>
      </Dock>
    </motion.div>
  );
};
