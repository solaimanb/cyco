import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);

      // Redirect the user to the home page or replace current entry
      navigate(from, { replace: true });
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
