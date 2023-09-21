import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveUser } from '../../api/saveUser';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
  const { googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        saveUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.error('Registration error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message || 'Something went wrong during registration.',
        });
      });
  };

  // const handleGoogleSignIn = () => {
  //   googleSignIn()
  //     .then((data) => {
  //       const loggedUser = data.user;

  //       const userData = {
  //         username: loggedUser.displayName,
  //         role: "user",
  //         email: loggedUser.email,
  //         photoUrl: loggedUser.photoURL,
  //       };

  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.error("Registration error:", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: error.message || "Something went wrong during registration.",
  //       });
  //     });
  // };

  return (
    <div className="w-full">
      <button
        onClick={handleGoogleSignIn}
        className="text-cyred mx-auto font-bold flex items-center pb-2"
      >
        <FaGoogle size={25} />
        oogle
      </button>
    </div>
  );
};

export default SocialLogin;
