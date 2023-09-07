import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();

  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      const data = await googleSignIn();
      const loggedUser = data.user;

      const userData = {
        username: loggedUser.displayName,
        role: 'user',
        email: loggedUser.email,
        photoUrl: loggedUser.photoURL,
      };

      const response = await axiosSecure.post('/register', userData);

      if (response.status === 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'SignUp Successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      } else {
        // Handle error response
        throw new Error(response.data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong during registration.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="divider"></div>
      <div className="">
        <button
          onClick={handleGoogleSignIn}
          className="text-cyred font-bold text- flex items-center"
          disabled={isLoading}
        >
          <FaGoogle size={25} />
          oogle
        </button>
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default SocialLogin;
