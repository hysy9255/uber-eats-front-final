import { useCallback, useEffect, useState } from "react";
import {
  BellIcon,
  CalendarIcon,
  CameraIcon,
  ChevronRightIcon,
  ClockIcon,
  CreditCardIcon,
  DeliveryIcon,
  EditIcon,
  FoodIcon,
  HeartIcon,
  LocationIcon,
  LogoutIcon,
  MailIcon,
  OrderIcon,
  PhoneIcon,
  PromotionIcon,
  UserIcon,
  WalletIcon,
} from "./Icons";
import { ProfileRow } from "./ProfileRow";
import { ProfileSection } from "./ProfileSection";
import { getToken } from "../../shared/utils/getToken";
import { getMyProfile } from "../../shared/api/getMyProfile/getMyProfile";
import type { UserProfileDTO } from "../../shared/api/getMyProfile/userProfile.dto";

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfileDTO>();

  const token = getToken();
  if (!token) {
    throw new Error("Token not found");
  }

  const loadProfileData = useCallback(async () => {
    const profileData = await getMyProfile(token);
    console.log(profileData);
    setProfile(profileData);
  }, [token]);

  useEffect(() => {
    loadProfileData();
  }, [loadProfileData]);

  const mockProfile = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phoneNumber: "+82 10-1234-5678",
    profileImgUrl: null as string | null,
    memberSince: "May 2024",
    paymentLast4: "4242",
    uberCash: 0,
    promotionCount: 2,
  };

  const handleEditProfile = () => {
    console.log("Edit profile");
  };

  const handlePersonalInformation = () => {
    console.log("Personal information");
  };

  const handleAddressBook = () => {
    console.log("Address book");
  };

  const handlePaymentMethods = () => {
    console.log("Payment methods");
  };

  const handleUberCash = () => {
    console.log("Uber cash");
  };

  const handlePromotions = () => {
    console.log("Promotions");
  };

  const handleDeliveryPreferences = () => {
    console.log("Delivery preferences");
  };

  const handleCuisinePreferences = () => {
    console.log("Cuisine preferences");
  };

  const handleNotificationSettings = () => {
    console.log("Notification settings");
  };

  const handleOrderHistory = () => {
    console.log("Order history");
  };

  const handleFavorites = () => {
    console.log("Favorites");
  };

  const handleRecentSearches = () => {
    console.log("Recent searches");
  };

  const handleHelpCenter = () => {
    console.log("Help center");
  };

  const handleSignOut = () => {
    console.log("Sign out");
  };

  return (
    <div
      className="
        w-full
        bg-white
        rounded-2xl
        p-5
        flex flex-col
        gap-y-5
      "
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-950">My Profile</h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage your account, payments and preferences
        </p>
      </div>

      {/* Profile Card */}
      <div
        className="
          rounded-2xl
          bg-[#f0faf6]
          px-5
          py-5
          flex
          items-center
          gap-x-5
        "
      >
        {/* Profile Image */}
        <div className="relative shrink-0">
          <div
            className="
              w-[92px]
              h-[92px]
              rounded-full
              bg-white
              border
              border-green-100
              shadow-sm
              overflow-hidden
              flex
              items-center
              justify-center
            "
          >
            {profile?.profileImgUrl ? (
              <img
                src={profile.profileImgUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <UserIcon className="w-12 h-12 text-gray-500" />
            )}
          </div>

          <button
            type="button"
            className="
              absolute
              bottom-0
              right-0
              w-7
              h-7
              rounded-full
              bg-black
              text-white
              flex
              items-center
              justify-center
              border-2
              border-white
              cursor-pointer
            "
          >
            <CameraIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-x-4">
            {/* <div className="flex flex-col gap-y-4 sm:flex-row sm:items-start sm:justify-between sm:gap-x-4"> */}
            <div>
              <h2 className="text-2xl font-bold text-gray-950">
                {profile?.name}
              </h2>

              {/* <div className="flex items-center gap-x-4 mt-3 text-sm"> */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm">
                <div className="flex items-center gap-x-2 text-gray-700">
                  <MailIcon className="w-4 h-4 text-green-600" />
                  {profile?.email}
                </div>

                <div className="flex items-center gap-x-2 text-gray-700">
                  <PhoneIcon className="w-4 h-4 text-green-600" />
                  {profile?.phoneNumber}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleEditProfile}
              className="
                self-start
                shrink-0
                px-4
                py-2
                rounded-full
                bg-green-100
                text-green-700
                text-xs
                font-semibold
                flex
                items-center
                gap-x-2
                hover:bg-green-200
                cursor-pointer
              "
            >
              <EditIcon className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between">
            <div className="flex items-start gap-x-2">
              <CalendarIcon className="w-4 h-4 text-gray-600 mt-0.5" />

              <div>
                <div className="text-xs text-gray-500">Member since</div>

                <div className="text-sm font-medium text-gray-800">
                  {mockProfile.memberSince}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="
                min-w-[190px]
                bg-white
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                flex
                items-center
                gap-x-3
                shadow-sm
                hover:bg-gray-50
                cursor-pointer
              "
            >
              <span className="w-2.5 h-2.5 bg-green-600 rotate-45" />

              <div className="flex-1 text-left">
                <div className="text-xs font-semibold text-gray-800">
                  Uber Eats Member
                </div>

                <div className="text-xs text-gray-500">0 points</div>
              </div>

              <ChevronRightIcon className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Account */}
      <ProfileSection title="Account">
        <ProfileRow
          icon={<UserIcon className="w-5 h-5" />}
          title="Personal Information"
          description="Name, email, phone number"
          onClick={handlePersonalInformation}
        />

        <ProfileRow
          icon={<LocationIcon className="w-5 h-5" />}
          title="Address Book"
          description="Saved addresses and delivery locations"
          onClick={handleAddressBook}
        />
      </ProfileSection>

      {/* Payments */}
      <ProfileSection title="Payments">
        <ProfileRow
          icon={<CreditCardIcon className="w-5 h-5" />}
          title="Payment Methods"
          description="Manage cards and payment options"
          right={
            <div className="flex items-center gap-x-3">
              <span
                className="
                  border
                  border-gray-200
                  rounded
                  px-1.5
                  py-0.5
                  text-[10px]
                  font-bold
                  text-blue-700
                "
              >
                VISA
              </span>

              <span className="text-xs text-gray-700">
                •••• {mockProfile.paymentLast4}
              </span>
            </div>
          }
          onClick={handlePaymentMethods}
        />

        <ProfileRow
          icon={<WalletIcon className="w-5 h-5" />}
          title="Uber Cash"
          description="Add balance to your Uber Cash"
          right={
            <span className="text-sm text-green-600 font-medium">
              ₩{mockProfile.uberCash.toLocaleString()}
            </span>
          }
          onClick={handleUberCash}
        />

        <ProfileRow
          icon={<PromotionIcon className="w-5 h-5" />}
          title="Promotions"
          description="Your available offers and rewards"
          right={
            <span
              className="
                bg-green-100
                text-green-700
                rounded-full
                px-3
                py-1
                text-xs
                font-medium
              "
            >
              {mockProfile.promotionCount} available
            </span>
          }
          onClick={handlePromotions}
        />
      </ProfileSection>

      {/* Preferences */}
      <ProfileSection title="Preferences">
        <ProfileRow
          icon={<DeliveryIcon className="w-5 h-5" />}
          title="Delivery Preferences"
          description="Manage delivery instructions and preferences"
          onClick={handleDeliveryPreferences}
        />

        <ProfileRow
          icon={<FoodIcon className="w-5 h-5" />}
          title="Cuisine Preferences"
          description="Tell us what you love"
          onClick={handleCuisinePreferences}
        />

        <ProfileRow
          icon={<BellIcon className="w-5 h-5" />}
          title="Notification Settings"
          description="Manage your email and push notifications"
          onClick={handleNotificationSettings}
        />
      </ProfileSection>

      {/* Activity */}
      <ProfileSection title="Activity">
        <ProfileRow
          icon={<OrderIcon className="w-5 h-5" />}
          title="Order History"
          description="View your past orders"
          onClick={handleOrderHistory}
        />

        <ProfileRow
          icon={<HeartIcon className="w-5 h-5" />}
          title="Favorites"
          description="Your favorite restaurants and cuisines"
          onClick={handleFavorites}
        />

        <ProfileRow
          icon={<ClockIcon className="w-5 h-5" />}
          title="Recent Searches"
          description="Your recent searches and views"
          onClick={handleRecentSearches}
        />
      </ProfileSection>

      {/* Help */}
      <div
        className="
          bg-[#f0faf6]
          rounded-xl
          px-4
          py-4
          flex
          justify-between
          items-center
        "
      >
        <div>
          <div className="text-sm font-semibold text-gray-800">Need help?</div>

          <div className="text-xs text-gray-500 mt-1">
            Visit our{" "}
            <span className="text-green-600 font-medium">Help Center</span> for
            support with your account, orders, and more.
          </div>
        </div>

        <button
          type="button"
          onClick={handleHelpCenter}
          className="
            border
            border-green-200
            text-green-700
            rounded-lg
            px-4
            py-2
            text-xs
            font-medium
            hover:bg-green-50
            cursor-pointer
          "
        >
          Help Center
        </button>
      </div>

      {/* Sign Out */}
      <button
        type="button"
        onClick={handleSignOut}
        className="
          border
          border-gray-200
          rounded-xl
          px-4
          py-4
          flex
          items-center
          gap-x-4
          hover:bg-red-50
          transition
          cursor-pointer
        "
      >
        <LogoutIcon className="w-5 h-5 text-red-500" />

        <div className="flex-1 text-left">
          <div className="text-sm font-semibold text-red-500">Sign out</div>

          <div className="text-xs text-gray-500 mt-0.5">
            Sign out from your account
          </div>
        </div>

        <ChevronRightIcon className="w-4 h-4 text-gray-700" />
      </button>
    </div>
  );
};

export default ProfilePage;
