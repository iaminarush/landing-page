import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FlickeringGrid } from "./ui/flickering-grid";
import { HyperText } from "./ui/hyper-text";

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
    <div className="bg-background relative h-dvh w-full overflow-hidden flex flex-col justify-center items-center">
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
        <div className="relative flex flex-col gap-4 items-center justify-center px-4 text-center">
          <div className="inline-flex items-baseline flex-wrap">
            <TextPortion />
          </div>
        </div>
      </div>
    </div>
  );
};

const TextPortion = () => {
  const [completed, setCompleted] = useState(false);
  const [experience, setExperience] = useState(
    dayjs()
      .diff(dayjs("2021-08-23", "YYYY-MM-DD"), "year", true)
      .toString()
      .substring(0, 11)
  );

  useEffect(() => {
    if (!completed) return;
    const interval = setInterval(() => {
      let time = dayjs().diff(dayjs("2021-08-23", "YYYY-MM-DD"), "year", true);
      setExperience(time.toString().substring(0, 11));
    }, 75);
    return () => clearInterval(interval);
  }, [completed]);

  const prefix =
    "Hello I am Patrick a front end developer building web and mobile applications using React and React Native for ";
  const suffix = " years";
  const contentString = prefix + experience + suffix;

  const highlightRange = {
    start: prefix.length,
    end: prefix.length + experience.length,
    className: "text-rose-400",
  };

  return (
    <HyperText
      animateOnHover={false}
      className=""
      animateOnce={true}
      highlightRange={highlightRange}
      onAnimationComplete={() => setCompleted(true)}
    >
      {contentString}
    </HyperText>
  );
};
