interface OverlayProps {
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClose }) => {
  return (
    <button
      type="button"
      aria-label="Close modal"
      onClick={onClose}
      className="absolute inset-0 bg-black/40"
    />
  );
};

export default Overlay;
