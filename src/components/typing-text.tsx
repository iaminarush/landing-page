import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

interface TypingTextProps {
  /** The full sentence you want to type */
  text: string;
  /** Tailwind classes for each *word* (same length as split words) */
  wordClasses?: string[];
  /** Typing speed per character (seconds) */
  charDuration?: number;
  /** Optional callback when typing finishes */
  onComplete?: () => void;
  /** Base class for the wrapper (optional) */
  className?: string;
}

export default function TypingText({
  text,
  wordClasses = [],
  charDuration = 0.06,
  onComplete,
  className = "",
}: TypingTextProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const cursor = cursorRef.current;
    if (!wrapper || !cursor) return;

    // 1. Split into chars (keeps words as parent elements)
    const split = new SplitText(wrapper, {
      type: "chars,words",
      charsClass: "typing-char overflow-hidden inline-block", // hide overflow for smooth reveal
      wordsClass: "typing-word inline-block",
    });
    splitRef.current = split;

    // Apply custom Tailwind classes to each word
    split.words.forEach((wordEl, i) => {
      const cls = wordClasses[i];
      if (cls) wordEl.className = `${wordEl.className} ${cls}`;
    });

    // Hide everything first
    gsap.set(split.chars, { yPercent: 110, opacity: 0 });

    // 2. Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Remove cursor when done
        gsap.set(cursor, { display: "none" });
        onComplete?.();
      },
    });

    // Type each character
    tl.to(split.chars, {
      yPercent: 0,
      opacity: 1,
      duration: charDuration,
      stagger: charDuration,
      ease: "power1.out",
    });

    // Blink cursor during typing
    tl.to(
      cursor,
      {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.4,
        ease: "none",
      },
      0
    );

    return () => {
      tl.kill();
      split.revert();
    };
  }, [text, wordClasses, charDuration, onComplete]);

  const words = text.split(" ");

  return (
    <span className={`relative inline-block ${className}`} ref={wrapperRef}>
      {words.map((word, idx) => (
        <span key={idx}>
          {word.split("").map((char, cIdx) => (
            <span key={cIdx}>{char}</span>
          ))}
          {idx < words.length - 1 && <span> </span>}
        </span>
      ))}
      <span
        ref={cursorRef}
        className="inline-block w-0.5 bg-current animate-pulse ml-0.5"
        style={{ height: "1.2em", verticalAlign: "baseline" }}
      />
    </span>
  );
}
