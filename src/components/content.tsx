import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FlickeringGrid } from "./ui/flickering-grid";
import { TypingAnimation } from "./ui/typing-animation";

// export const Content = () => {
//   return (
//     <div className="container mx-auto">
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col gap-4 items-center justify-center px-4"
//       >
//         <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
//           Hello I am Patrick, a frontend developer building web and mobile
//           applications using React and React Native for
//           <Experience />
//           years.
//         </div>
//       </motion.div>
//     </div>
//   );
// };

export const Content = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("reisze", handleResize);
  }, []);

  return (
    <div className="bg-background relative h-dvh w-full overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={dimensions.height + 10}
        width={dimensions.width + 10}
      />
      <div className="container mx-auto">
        <div className="relative flex flex-col gap-4 items-center justify-center px-4">
          <span>
            <TypingAnimation
              className="text-3xl md:text-7xl font-space font-bold dark:text-white text-center tracking-tight"
              cursorStyle="underscore"
              typeSpeed={75}
            >
              Hello I am Patrick, a frontend developer building web and mobile
              applications using React and React Native for
            </TypingAnimation>
            {/* <Experience /> */}
          </span>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [experience, setExperience] = useState(
    dayjs()
      .diff(dayjs("2021-08-23", "YYYY-MM-DD"), "year", true)
      .toString()
      .substring(0, 11)
  );

  useEffect(() => {
    setInterval(() => {
      let time = dayjs().diff(dayjs("2021-08-23", "YYYY-MM-DD"), "year", true);
      setExperience(time.toString().substring(0, 11));
    }, 75);
  }, []);

  return (
    <TypingAnimation className="font-space text-rose-400">
      {experience}
    </TypingAnimation>
  );

  return (
    <span className="font-space text-rose-400" id="experience">
      {" "}
      {experience}{" "}
    </span>
  );
};
