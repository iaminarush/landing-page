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
  return (
    <>
      <></>
    </>
  );
}
