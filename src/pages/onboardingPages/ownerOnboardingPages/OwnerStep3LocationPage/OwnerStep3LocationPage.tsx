// import { useOutletContext } from "react-router-dom";
// import type { OwnerOnBoardContext } from "../Shared/OwnerOnBoardFlow";
// import { useOwnerStep3LocationAndTime } from "./useOwnerStep3Location";
// import OnBoardSteps from "../../shared/components/OnBoardSteps";
// import { CREATE_OWNER_PAGE_STEPS } from "../constants/createOwnerPageSteps";
// import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
// import OnBoardDescription from "../../shared/components/OnBoardDescription";
// import { OwnerStep3RightPanel } from "./components/OwnerStep3RightPanel";
// import OwnerStep3LocationAndTimeInputs from "./components/OwnerStep3LocationInputs";
// import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

// const OwnerStep3Location = () => {
//   const { handleExit } = useOutletContext<OwnerOnBoardContext>();
//   const { handleBack, handleContinue } = useOwnerStep3LocationAndTime();

//   return (
//     <div className="mx-auto max-w-[1100px]">
//       <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={2} />
//       <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
//         <OnBoardHeadline
//           title="Set up your location & hours"
//           subtitle="Customers will see this on your store page."
//         />
//         <OnBoardDescription description={OwnerStep3RightPanel} />
//         <OwnerStep3LocationAndTimeInputs />
//       </div>
//       <OnBoardStepNavigation
//         onBack={handleBack}
//         onExit={handleExit}
//         onContinue={handleContinue}
//         continueLabel="Continue"
//       />
//     </div>
//   );
// };

// export default OwnerStep3Location;

import { useOutletContext } from "react-router-dom";
import type { OwnerOnBoardContext } from "../Shared/OwnerOnBoardFlow";
import { useOwnerStep3LocationAndTime } from "./useOwnerStep3Location";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import { CREATE_OWNER_PAGE_STEPS } from "../constants/createOwnerPageSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import { OwnerStep3RightPanel } from "./components/OwnerStep3RightPanel";
import OwnerStep3LocationAndTimeInputs from "./components/OwnerStep3LocationInputs";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const OwnerStep3Location = () => {
  const { handleExit } = useOutletContext<OwnerOnBoardContext>();

  const { handleBack, handleContinue } = useOwnerStep3LocationAndTime();

  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={2} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
        <OnBoardHeadline
          title="Set up your location & hours"
          subtitle="Customers will see this on your store page."
        />

        <OnBoardDescription description={OwnerStep3RightPanel} />

        <OwnerStep3LocationAndTimeInputs />
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-8 w-full max-w-[900px] border-t border-gray-100 pt-5 sm:mt-10 sm:pt-6">
        <OnBoardStepNavigation
          onBack={handleBack}
          onExit={handleExit}
          onContinue={handleContinue}
          continueLabel="Continue"
        />
      </div>
    </main>
  );
};

export default OwnerStep3Location;
