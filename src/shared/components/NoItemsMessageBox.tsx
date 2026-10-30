interface NoItemsMessageBoxProps {
  title: string;
  content: string;
}

const NoItemsMessageBox: React.FC<NoItemsMessageBoxProps> = ({
  title,
  content,
}) => {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white/60 py-14 text-center">
      <div className="text-gray-900 font-semibold">{title}</div>
      <div className="text-sm text-gray-500 mt-2">{content}</div>
    </div>
  );
};

export default NoItemsMessageBox;
