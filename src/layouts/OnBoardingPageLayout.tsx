import { Outlet } from "react-router-dom";

const OnBoardingPageLayout = () => {
  return (
    <div className={`min-h-screen`}>
      <Outlet />
    </div>
  );
};

export default OnBoardingPageLayout;
