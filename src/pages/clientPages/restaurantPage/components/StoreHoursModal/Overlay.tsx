interface OverlayProps {
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
  return (
    <div
      className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
      onClick={onClick}
    />
  );
};

export default Overlay;
