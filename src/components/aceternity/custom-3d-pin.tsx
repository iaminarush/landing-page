import {
  useState,
  type ReactNode,
  type HTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";

export const CustomPin = ({
  children,
  linkProps,
}: {
  children: ReactNode;
  linkProps: AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
  const [transform, setTransform] = useState("translate(0%,0%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(0%,0%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(0%,0%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group cursor-pointer"
      {...linkProps}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
      >
        <div
          style={{ transform }}
          className="transition duration-700 bg-black p-2 rounded-xl border border-white/[0.1] shadow-[0_8px_16px_rgb(0_0_0/0.4)] group-hover/pin:border-white/[0.2]"
        >
          {children}
        </div>
      </div>
      <Pin />
    </a>
  );
};

export const Pin = () => {
  return (
    <div>
      <></>
    </div>
  );
};
