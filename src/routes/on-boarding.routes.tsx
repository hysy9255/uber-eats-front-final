import ClientStep1Account from "../pages/onboardingPages/clientOnboardingPages/ClientStep1AccountPage/ClientStep1AccountPage";
import ClientStep2Address from "../pages/onboardingPages/clientOnboardingPages/ClientStep2AddressPage/ClientStep2AddressPage";
import ClientStep3Review from "../pages/onboardingPages/clientOnboardingPages/ClientStep3ReviewPage/ClientStep3ReviewPage";
import ClientOnBoardFlow from "../pages/onboardingPages/clientOnboardingPages/shared/ClientOnBoardFlow";
import OwnerStep1Account from "../pages/onboardingPages/ownerOnboardingPages/OwnerStep1AccountPage/OwnerStep1AccountPage";
import OwnerStep2Business from "../pages/onboardingPages/ownerOnboardingPages/OwnerStep2BusinessPage/OwnerStep2BusinessPage";
import OwnerStep3Location from "../pages/onboardingPages/ownerOnboardingPages/OwnerStep3LocationPage/OwnerStep3LocationPage";
import OwnerStep4Review from "../pages/onboardingPages/ownerOnboardingPages/OwnerStep4ReviewPage/OwnerStep4ReviewPage";
import OwnerOnBoardFlow from "../pages/onboardingPages/ownerOnboardingPages/Shared/OwnerOnBoardFlow";
import OnBoardingPageLayout from "../layouts/OnBoardingPageLayout";
import RequireGuest from "../shared/components/RequireGuest";

export const onboardingRoutes = [
  {
    element: <RequireGuest />,
    children: [
      {
        element: <OnBoardingPageLayout />,
        children: [
          {
            path: "/on-board",
            children: [
              {
                path: "client",
                element: <ClientOnBoardFlow />,
                children: [
                  {
                    path: "step1",
                    element: <ClientStep1Account />,
                  },
                  {
                    path: "step2",
                    element: <ClientStep2Address />,
                  },
                  {
                    path: "step3",
                    element: <ClientStep3Review />,
                  },
                ],
              },
              {
                path: "owner",
                element: <OwnerOnBoardFlow />,
                children: [
                  {
                    path: "step1",
                    element: <OwnerStep1Account />,
                  },
                  {
                    path: "step2",
                    element: <OwnerStep2Business />,
                  },
                  {
                    path: "step3",
                    element: <OwnerStep3Location />,
                  },
                  {
                    path: "step4",
                    element: <OwnerStep4Review />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
