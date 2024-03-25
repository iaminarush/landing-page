import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { CustomPin } from "../aceternity/custom-3d-pin";
import { GithubSVG, LinkedInSVG, MailSVG } from "./svgs";

export const Links = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed bottom-8"
    >
      <div className="flex justify-center gap-x-8">
        <CustomPin
          linkProps={{
            href: "https://github.com/iaminarush",
            target: "_blank",
          }}
        >
          <SvgWrapper>
            <GithubSVG />
          </SvgWrapper>
        </CustomPin>

        <CustomPin linkProps={{ href: "mailto:patrickcheng@tutanota.com" }}>
          <SvgWrapper>
            <MailSVG />
          </SvgWrapper>
        </CustomPin>

        <CustomPin
          linkProps={{
            href: "https://www.linkedin.com/in/patrick-cheng-020643166/",
            target: "_blank",
          }}
        >
          <SvgWrapper>
            <LinkedInSVG />
          </SvgWrapper>
        </CustomPin>
      </div>
    </motion.div>
  );
};

const SvgWrapper = ({ children }: { children: ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer z-20 duration-700"
    viewBox="0 0 512 512"
    width="28px"
    height="28px"
  >
    {children}
  </svg>
);
