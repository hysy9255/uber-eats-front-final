// import { ArrowLeft, X } from "lucide-react";

// interface HeaderProps {
//   closeAddAddress: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ closeAddAddress }) => {
//   return (
//     <div
//       className="
//     flex
//     h-[88px]
//     shrink-0
//     items-center
//     justify-between
//     border-b
//     border-gray-100
//     px-8
//   "
//     >
//       <div className="flex items-center gap-4">
//         <button
//           type="button"
//           onClick={closeAddAddress}
//           className="
//         flex
//         h-10
//         w-10
//         shrink-0
//         items-center
//         justify-center
//         rounded-xl
//         border
//         border-gray-200
//         bg-white
//         text-gray-700
//         transition
//         hover:bg-gray-50
//       "
//         >
//           <ArrowLeft className="h-5 w-5" />
//         </button>

//         <div>
//           <h2 className="text-[22px] font-bold tracking-[-0.03em] text-gray-950">
//             Edit delivery address
//           </h2>

//           <p className="mt-0.5 text-[12px] text-gray-500">
//             Edit your delivery address.
//           </p>
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={closeAddAddress}
//         className="
//       flex
//       h-9
//       w-9
//       items-center
//       justify-center
//       rounded-full
//       bg-gray-100
//       text-gray-500
//       transition
//       hover:bg-gray-200
//       hover:text-gray-800
//     "
//       >
//         <X className="h-4 w-4" />
//       </button>
//     </div>
//   );
// };

// export default Header;

import { ArrowLeft, X } from "lucide-react";

interface HeaderProps {
  closeAddAddress: () => void;
}

const Header: React.FC<HeaderProps> = ({ closeAddAddress }) => {
  return (
    <div
      className="
        flex min-h-[64px] shrink-0
        items-center justify-between
        gap-2
        border-b border-gray-100
        px-4 py-3

        md:h-[88px]
        md:px-8 md:py-0
      "
    >
      <div className="flex min-w-0 items-center gap-2.5 md:gap-4">
        <button
          type="button"
          onClick={closeAddAddress}
          aria-label="Back to addresses"
          className="
            flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-lg border border-gray-200
            bg-white text-gray-700
            transition

            hover:cursor-pointer
            hover:bg-gray-50

            md:h-10 md:w-10
            md:rounded-xl
          "
        >
          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        <div className="min-w-0">
          <h2
            className="
              text-[16px] font-bold
              leading-5 tracking-[-0.03em]
              text-gray-950

              md:text-[22px]
              md:leading-normal
            "
          >
            Edit delivery address
          </h2>

          <p
            className="
              mt-0.5 text-[11px]
              leading-4 text-gray-500

              md:text-[12px]
            "
          >
            Edit your delivery address.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={closeAddAddress}
        aria-label="Close"
        className="
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full bg-gray-100
          text-gray-500 transition

          hover:cursor-pointer
          hover:bg-gray-200
          hover:text-gray-800

          md:h-9 md:w-9
        "
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Header;
