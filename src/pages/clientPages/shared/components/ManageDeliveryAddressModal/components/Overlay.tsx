interface OverlayProps {
  closeAddressPopUp: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ closeAddressPopUp }) => {
  return (
    <div
      className="
          absolute inset-0
          bg-black/45
          backdrop-blur-[2px]
        "
      onClick={closeAddressPopUp}
    />
  );
};

export default Overlay;
