interface SignInButtonProps {
  onSignIn: () => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({ onSignIn }) => {
  return (
    <button
      onClick={onSignIn}
      className="w-full h-12 rounded-full bg-black text-white font-semibold
                transition duration-200
                hover:bg-black/90 active:bg-black/80
                focus:outline-none focus-visible:ring-2 
                focus-visible:ring-black/30 focus-visible:ring-offset-2
                 focus-visible:ring-offset-white
                disabled:opacity-60 disabled:pointer-events-none
                hover:cursor-pointer
                "
    >
      Sign in
    </button>
  );
};

export default SignInButton;
