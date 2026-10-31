interface ModalLayoutProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ children }) => {
  return (
    <div
      className="
        relative
        z-10
        w-full
        max-w-[520px]
        overflow-hidden
        rounded-[28px]
        bg-white
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]
    "
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};

export default ModalLayout;
