import { LucideIcon } from "lucide-react";

interface CoinPreviewProps {
  icon: LucideIcon;
  topText?: string;
  bottomText?: string;
  size?: "small" | "medium" | "large";
  color?: string;
}

export function CoinPreview({
  icon: Icon,
  topText = "",
  bottomText = "",
  size = "medium",
  color = "bg-gradient-to-br from-amber-400 to-yellow-600"
}: CoinPreviewProps) {
  const sizes = {
    small: { dimension: 96, radius: 42, fontSize: 9, iconSize: "w-10 h-10" },
    medium: { dimension: 192, radius: 84, fontSize: 16, iconSize: "w-20 h-20" },
    large: { dimension: 256, radius: 112, fontSize: 20, iconSize: "w-28 h-28" },
  };

  const { dimension, radius, fontSize, iconSize } = sizes[size];
  const pathId = `curve-${size}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative inline-block">
      {/* Outer ring */}
      <div
        className={`rounded-full ${color} shadow-2xl relative flex items-center justify-center`}
        style={{ width: dimension, height: dimension }}
      >
        {/* Inner circle */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-inner">
          {/* Center icon area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
              <Icon className={`${iconSize} text-amber-900 stroke-[1.5]`} />
            </div>
          </div>

          {/* SVG for curved text */}
          <svg
            className="absolute inset-0"
            viewBox={`0 0 ${dimension} ${dimension}`}
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Top curve (reads left to right) */}
              <path
                id={`${pathId}-top`}
                d={`M ${dimension * 0.15} ${dimension / 2} A ${radius} ${radius} 0 0 1 ${dimension * 0.85} ${dimension / 2}`}
                fill="none"
              />
              {/* Bottom curve (reads left to right, arcing downward) */}
              <path
                id={`${pathId}-bottom`}
                d={`M ${dimension * 0.15} ${dimension / 2} A ${radius} ${radius} 0 0 0 ${dimension * 0.85} ${dimension / 2}`}
                fill="none"
              />
            </defs>

            {/* Top text */}
            {topText && (
              <text
                fontSize={fontSize}
                fontWeight="bold"
                fill="#78350f"
                letterSpacing="0.05em"
              >
                <textPath href={`#${pathId}-top`} startOffset="50%" textAnchor="middle">
                  {topText}
                </textPath>
              </text>
            )}

            {/* Bottom text */}
            {bottomText && (
              <text
                fontSize={fontSize}
                fontWeight="bold"
                fill="#78350f"
                letterSpacing="0.05em"
              >
                <textPath href={`#${pathId}-bottom`} startOffset="50%" textAnchor="middle">
                  {bottomText}
                </textPath>
              </text>
            )}
          </svg>
        </div>

        {/* Metallic edge effect */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-200/30"></div>
      </div>

      {/* Shadow underneath */}
      <div
        className="absolute inset-0 rounded-full bg-black/20 blur-md -z-10 translate-y-2"
        style={{ width: dimension, height: dimension }}
      ></div>
    </div>
  );
}
