import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Content = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Hello I am Patrick, a frontend developer building web and mobile
          applications using React and React Native for
          <Experience />
          years.
        </div>
      </motion.div>
    </>
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
    <span className="font-space text-rose-400" id="experience">
      {" "}
      {experience}{" "}
    </span>
  );
};
