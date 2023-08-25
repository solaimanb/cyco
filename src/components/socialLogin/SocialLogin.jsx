import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);

        // Redirect the user to the home page or replace current entry
        navigate(from, { replace: true });
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline border-[#800000] text-[#800000]"
        >
          <FaGoogle size={18} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
