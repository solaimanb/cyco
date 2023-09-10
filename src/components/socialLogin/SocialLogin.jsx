import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((data) => {
        const loggedUser = data.user;

        const userData = {
          username: loggedUser.displayName,
          role: "user",
          email: loggedUser.email,
          photoUrl: loggedUser.photoURL,
        };

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong during registration.",
        });
      });
  };

  return (
    <>
      <div className="divider"></div>
      <div className="">
        <button
          onClick={handleGoogleSignIn}
          className="text-cyred font-bold text- flex items-center"
        >
          <FaGoogle size={25} />
          oogle
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
