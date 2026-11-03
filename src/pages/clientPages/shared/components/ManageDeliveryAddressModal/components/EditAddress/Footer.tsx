// interface FooterProps {
//   closeAddAddress: () => void;
//   handleSave: () => void;
// }

// const Footer: React.FC<FooterProps> = ({ closeAddAddress, handleSave }) => {
//   return (
//     <div
//       className="
//     flex
//     h-[68px]
//     shrink-0
//     items-center
//     justify-end
//     gap-3
//     border-t
//     border-gray-100
//     px-8
//   "
//     >
//       <button
//         type="button"
//         onClick={closeAddAddress}
//         className="
//         hover:cursor-pointer
//         h-9
//         min-w-[110px]
//         rounded-lg
//         border
//         border-gray-200
//         bg-white
//         px-5
//         text-[12px]
//         font-semibold
//         text-gray-700
//         transition
//         hover:bg-gray-50
//       "
//       >
//         Cancel
//       </button>

//       <button
//         type="button"
//         onClick={handleSave}
//         className="
//         hover:cursor-pointer
//         h-9
//         min-w-[145px]
//         rounded-lg
//         bg-green-600
//         px-5
//         text-[12px]
//         font-semibold
//         text-white
//         transition
//         hover:bg-green-700
//       "
//       >
//         Save address
//       </button>
//     </div>
//   );
// };

// export default Footer;

interface FooterProps {
  closeAddAddress: () => void;
  handleSave: () => void;
}

const Footer: React.FC<FooterProps> = ({ closeAddAddress, handleSave }) => {
  return (
    <div
      className="
        grid shrink-0 grid-cols-2
        items-center gap-2
        border-t border-gray-100
        bg-white
        px-4 py-3

        md:flex md:h-[68px]
        md:justify-end md:gap-3
        md:px-8 md:py-0
      "
    >
      <button
        type="button"
        onClick={closeAddAddress}
        className="
          h-10 min-w-0
          rounded-lg
          border border-gray-200
          bg-white
          px-3
          text-[11px] font-semibold
          text-gray-700
          whitespace-nowrap
          transition

          hover:cursor-pointer
          hover:bg-gray-50

          md:h-9
          md:min-w-[110px]
          md:px-5
          md:text-[12px]
        "
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="
          h-10 min-w-0
          rounded-lg
          bg-green-600
          px-3
          text-[11px] font-semibold
          text-white
          whitespace-nowrap
          transition

          hover:cursor-pointer
          hover:bg-green-700

          md:h-9
          md:min-w-[145px]
          md:px-5
          md:text-[12px]
        "
      >
        Save address
      </button>
    </div>
  );
};

export default Footer;
