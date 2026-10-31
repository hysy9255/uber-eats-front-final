import CloseButton from "./CloseButton";

interface FooterProps {
  onClose: () => void;
}

const Footer: React.FC<FooterProps> = ({ onClose }) => {
  return (
    <div
      className="
    flex
    justify-end
    border-t
    border-gray-100
    bg-gray-50/70
    px-7
    py-5
  "
    >
      <CloseButton onClick={onClose} />
    </div>
  );
};

export default Footer;
