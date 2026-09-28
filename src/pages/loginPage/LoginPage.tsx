import LoginPolicy from "./components/LoginPolicy";
import LogInBannerImg from "./components/LogInBannerImg/LogInBannerImg";
import ErrorModal from "./components/ErrorModal";
import { Fragment } from "react";
import CreateAccountLinkButton from "./components/CreateAccountLinkButton";
import SignInButton from "./components/SignInButton";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import KeepMeSignedInSection from "./components/KeepMeSignedInSection";
import LoginPageHeader from "./components/LoginPageHeader";
import { useLoginPage } from "./useLoginPage";

export default function LoginPage() {
  const { register, errors, handleSignIn, loginError, setLoginError } =
    useLoginPage();

  return (
    <Fragment>
      <main className="grid grid-cols-1 min-[950px]:grid-cols-2 max-w-[950px] mx-auto min-h-screen content-center">
        <section
          className={`rounded-2xl ring-1 ring-black/10 shadow-sm
                        p-5 flex flex-col `}
        >
          <LoginPageHeader />
          <form className="mt-6 space-y-4">
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <KeepMeSignedInSection />
            <SignInButton onSignIn={handleSignIn} />
          </form>

          <p className="mt-6 text-sm text-slate-600">
            Don’t have an account? <CreateAccountLinkButton />
          </p>
          <LoginPolicy />
        </section>

        <LogInBannerImg className="rounded-2xl bg-cover bg-center" />
      </main>
      {loginError && (
        <ErrorModal
          onClickClose={() => setLoginError(undefined)}
          errorMessage={loginError}
        />
      )}
    </Fragment>
  );
}
