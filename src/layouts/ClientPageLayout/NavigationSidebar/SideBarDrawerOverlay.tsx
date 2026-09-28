interface SideBarDrawerOverlayProps {
  isOpen: boolean;
  onClick: () => void;
  css: string;
}

export const SideBarDrawerOverlay: React.FC<SideBarDrawerOverlayProps> = ({
  isOpen,
  onClick,
  css,
}) => {
  return (
    <div
      className={`
        ${css}
          fixed inset-0 bg-black/50
          transition-opacity duration-300 ease-out
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      onClick={onClick}
    />
  );
};
