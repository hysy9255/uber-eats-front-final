interface OverlayProps {
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClose }) => {
  return (
    <div
      className="
          absolute inset-0
          bg-black/45
          backdrop-blur-[2px]
        "
      onClick={onClose}
    />
  );
};

export default Overlay;
