import { Link } from "react-router-dom";

const CreateAccountLinkButton = () => {
  return (
    <Link to="/create-account-choice" className="font-medium hover:underline">
      Create account
    </Link>
  );
};

export default CreateAccountLinkButton;
