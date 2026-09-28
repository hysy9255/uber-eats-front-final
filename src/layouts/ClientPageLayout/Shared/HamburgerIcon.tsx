interface HamburgerIconProps {
  css?: string;
  strokeWidth?: number;
  gap?: number;
}

const VIEWBOX_HEIGHT = 12;

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  css = "size-6",
  strokeWidth = 1.5,
  gap = 4.5,
}) => {
  const totalLineHeight = gap * 2;
  const startY = (VIEWBOX_HEIGHT - totalLineHeight) / 2;

  return (
    <svg
      viewBox="0 0 18 12"
      fill="none"
      className={`text-slate-900 ${css}`}
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    >
      <line x1="3" y1={startY} x2="15" y2={startY} />
      <line x1="3" y1={startY + gap} x2="15" y2={startY + gap} />
      <line x1="3" y1={startY + gap * 2} x2="15" y2={startY + gap * 2} />
    </svg>
  );
};

export default HamburgerIcon;
