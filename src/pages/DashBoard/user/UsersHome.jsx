import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const UsersHome = () => {
  const { user, createUser, updateUserProfile } = useAuth();
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const [timeAgo, setTimeAgo] = useState('');

  const userEntry = user?.metadata?.createdAt;

  // SETTING POST TIME:
  useEffect(() => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - userEntry;

    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      setTimeAgo(`${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`);
    } else if (monthsAgo > 0) {
      setTimeAgo(`${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`);
    } else if (weeksAgo > 0) {
      setTimeAgo(`${weeksAgo} week${weeksAgo === 1 ? '' : 's'} ago`);
    } else if (daysAgo > 0) {
      setTimeAgo(`${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`);
    } else if (hoursAgo > 0) {
      setTimeAgo(`${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`);
    } else {
      setTimeAgo(`${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`);
    }
  }, [userEntry]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const [passwordChangeData, setPasswordChangeData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const onSubmit = (data) => {
    console.log(data.image[0]);
    const imageUrl = data.image[0];
    const formData = new FormData();
    formData.append('image', imageUrl);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Image upload failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((imageData) => {
        const imageAdders = imageData.data.url;
        createUser(data.email, data.password)
          .then((result) => {
            updateUserProfile(data.name, imageAdders).then(() => {
              axios
                .post(`${import.meta.env.VITE_SERVER_URL}/users`, {
                  name: data.name,
                  email: data.email,
                  image: imageAdders,
                  role: data.role,
                })
                .then((data) => {
                  if (data.insertedId) {
                    Swal.fire({
                      position: 'top-center',
                      icon: 'success',
                      title: 'Your Profile update Successful',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                  });
                });
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.message}`,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        });
      });
  };

  // const handlePasswordChange = async () => {
  //   // Add client-side validation for new password and confirm new password
  //   if (
  //     passwordChangeData.newPassword !== passwordChangeData.confirmNewPassword
  //   ) {
  //     setMessage("New password and confirm new password must match.");
  //     return;
  //   }

  //   try {
  //     // Send a request to your server to change the password
  //     const response = await axios.post("/api/change-password", {
  //       currentPassword: passwordChangeData.currentPassword,
  //       newPassword: passwordChangeData.newPassword,
  //     });

  //     if (response.status === 200) {
  //       setMessage("Password changed successfully.");
  //     } else {
  //       setMessage(
  //         "Failed to change password. Please check your current password."
  //       );
  //     }
  //   } catch (error) {
  //     setMessage("An error occurred while changing the password.");
  //   }
  // };

  // Function to handle change password form submission
  const onChangePasswordSubmit = (data) => {
    const { currentPassword, newPassword, confirmNewPassword } = data;

    // Check if newPassword and confirmNewPassword match
    if (newPassword !== confirmNewPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    // Clear the form fields
    setValue('currentPassword', '');
    setValue('newPassword', '');
    setValue('confirmNewPassword', '');

    setMessage('Password changed successfully.');
  };
  const data = [
    {
      name: 'Day 1',
      timeSpent: 170,
    },
    {
      name: 'Day 2',
      timeSpent: 380,
    },
    {
      name: 'Day 3',
      timeSpent: 200,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 4',
      timeSpent: 278,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 5',
      timeSpent: 189,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 6',
      timeSpent: 239,
      pv: 40,
      amt: 200,
    },
    {
      name: 'Day 7',
      timeSpent: 349,
      pv: 40,
      amt: 200,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950 gap-3">
      {/* USER INFO */}
      <div className="flex flex-col md:flex-row gap-5 p-3 bg-zinc-900/50">
        <div className="space-y-3">
          <div className="border border-zinc-700 rounded-sm w-60 h-80">
            <img
              src={user?.photoURL}
              alt="user-photo"
              className="w-full h-full object-cover bg-black/60"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="">
            <div>
              <h3 className="font-bold md:text-lg">
                {user?.displayName || 'Anonymous'}
              </h3>

              <span className="badge badge-success rounded-full font-semibold text-sm">
                user
              </span>
            </div>

            <div className="mt-5">
              <span className="text-sm">
                <span className="font-bold">Email:</span> {user?.email}
              </span>
            </div>
            <div className="text-sm">
              Joined <span> {timeAgo}</span>
            </div>
          </div>

          <div>
            <button className="btn btn-wide btn-sm capitalize border bg-zinc-800 hover:bg-cyred/60">
              Edit Profile
            </button>
          </div>
        </div>

        {/* <div className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="Name">Username</label>
            <input type="text" placeholder={user?.displayName} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder={user?.displayName} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="p">Username</label>
            <input type="text" placeholder={user?.displayName} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Name">Username</label>
            <input type="text" placeholder={user?.displayName} />
          </div>
        </div> */}
      </div>

      {/* USER ANALYTICS */}
      <div className="flex flex-col md:flex-row gap-5 p-3 bg-zinc-900/50">
        D
      </div>
    </section>
  );
};

export default UsersHome;
// {
//   /* <div className="bg-zinc-700 bg-opacity-50 w-full p-6 mt-4 border-2 rounded-md">
//         <div className="">
//           <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pb-4 sm:pb-6">
//             Your last week spent time on{' '}
//             <span className="text-cyred font-bold">Cyco</span>
//           </h2>
//           <div style={{ width: '95%', height: 240 }}>
//             <ResponsiveContainer>
//               <AreaChart
//                 data={data}
//                 margin={{
//                   top: 10,
//                   right: 30,
//                   left: 10,
//                   bottom: 0,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip formatter={(value) => `${value} min`} />
//                 <Area
//                   type="monotone"
//                   dataKey="timeSpent"
//                   stroke="#800"
//                   fill="#800"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div> */
// }

// {
//   /* <div className="bg-zinc-700 bg-opacity-50 w-full p-6 rounded-sm">
//         <div>
//           <h2 className="">
//             Welcome{' '}
//             <span className="font-semibold">
//               {user?.displayName || user?.email}
//             </span>
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
//             <div className="flex flex-col sm:flex-row">
//               <div className="border w-[100px] h-[100px] border-cyred rounded-full bg-zinc-400 bg-opacity-40 mr-0 sm:mr-8 mb-4 sm:mb-0 relative">

//                 <label htmlFor="profileImageInput">
//                   {selectedImage ? (
//                     <img
//                       src={URL?.createObjectURL(selectedImage)}
//                       className="w-[100px] h-[100px] rounded-full cursor-pointer"
//                       alt=""
//                     />
//                   ) : user?.photoURL ? (
//                     <img
//                       src={user?.photoURL}
//                       className="w-[100px] h-[100px] rounded-full cursor-pointer"
//                       alt=""
//                     />
//                   ) : (
//                     <BiSolidCamera
//                       onChange={handleImageChange}
//                       id="profileImageInput"
//                       accept="image/*"
//                       className="top-8 text-1xl cursor-pointer absolute left-10 text-red-800"
//                     />
//                   ) }

//                 </label>
//                 <input
//                   type="file"
//                   {...register('image', { required: true })}
//                   name="image"
//                   id="profileImageInput"
//                   accept="image/*"
//                   className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
//                   onChange={handleImageChange}
//                 />
//               </div>

//               <div className="space-y-4 w-full">
//                 <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-5">
//                   <label
//                     htmlFor="displayName"
//                     defaultValue={user?.displayName}
//                     className="mr-0 sm:mr-2"
//                   >
//                     Display Name:
//                   </label>
//                   <input
//                     type="text"
//                     id="displayName"
//                     className="ml-0 sm:ml-2 p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-full sm:w-2/3"
//                     {...register('displayName')}
//                   />
//                 </div>
//                 <div className="flex justify-end pt-8 pb-4">
//                   <button
//                     type="submit"
//                     className="bg-black py-2 px-4 border-y-cyred border-2 border-x-0 rounded-md flex items-center gap-2 hover:bg-cyred duration-500"
//                   >
//                     Save Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//           {message && <p>{message}</p>}

//           <div className="flex justify-end gap-4">
//             <button
//               onClick={() => setShowChangePassword(!showChangePassword)}
//               className="bg-sky-700 py-2 px-4 text-sm rounded-md hover:bg-sky-900 flex items-center gap-2"
//             >
//               <BiSolidKey /> Change Password
//             </button>
//             <button className="bg-sky-700 py-2 px-4 text-sm rounded-md hover:bg-sky-900 flex items-center gap-2">
//               <BiExport /> Export Account data
//             </button>
//           </div>

//           {showChangePassword && (
//             <form onSubmit={handleSubmit(onChangePasswordSubmit)}>
//               <div className="mt-4">
//                 <label htmlFor="currentPassword">Current Password:</label>
//                 <input
//                   type="password"
//                   id="currentPassword"
//                   className="p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-full"
//                   {...register('currentPassword', { required: true })}
//                 />
//               </div>
//               <div className="mt-4">
//                 <label htmlFor="newPassword">New Password:</label>
//                 <input
//                   type="password"
//                   id="newPassword"
//                   className="p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-full"
//                   {...register('newPassword', { required: true })}
//                 />
//               </div>
//               <div className="mt-4">
//                 <label htmlFor="confirmNewPassword">
//                   Confirm New Password:
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmNewPassword"
//                   className="p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-full"
//                   {...register('confirmNewPassword', { required: true })}
//                 />
//               </div>
//               <div className="mt-4">
//                 <button
//                   type="submit"
//                   className="bg-black py-2 px-4 border-y-cyred border-2 border-x-0 rounded-md flex items-center gap-2 hover:bg-cyred duration-500"
//                 >
//                   Change Password
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div> */
// }
