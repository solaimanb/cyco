import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import EditUserModal from "../../../modal/EditUserModal";
import { getUser } from "../../../store/slices/editUserSlice/editUserSlice";
import { setUser } from "../../../store/slices/editUserSlice/passData";

const UserDashboard = () => {
  // let [isOpen, setIsOpen] = useState(false);
  // let [data, setData ] = useState()
  const { user, createUser, updateUserProfile } = useAuth();
  // const dispatch = useDispatch();
  // const { todos } = useSelector((state) => state.editUserSlice);
  // const status = useSelector((state) => state.editUserSlice.status);
  // useEffect(() => {
  //   if (status === "loading") {
  //     dispatch(getUser());

  //   }

  // }, [status, dispatch, todos]);

  // Handle data filtering if user is defined

//   const filter = todos && todos.filter((item) => item?.email == user?.email);
// console.log(filter);
//   useEffect(()=>{
//   dispatch(setUser(filter));
//   },[])
//   const userData = useSelector((state) => state.passData.data);
//   console.log(userData);
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const [showChangePassword, setShowChangePassword] = useState(false);
//   const [message, setMessage] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { register, handleSubmit, setValue } = useForm();
//   const [timeAgo, setTimeAgo] = useState("");

//   const userEntry = user?.metadata?.createdAt;

  // SETTING POST TIME:
  // useEffect(() => {
  //   const currentTime = new Date().getTime();
  //   const timeDifference = currentTime - userEntry;

  //   const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  //   const hoursAgo = Math.floor(minutesAgo / 60);
  //   const daysAgo = Math.floor(hoursAgo / 24);
  //   const weeksAgo = Math.floor(daysAgo / 7);
  //   const monthsAgo = Math.floor(daysAgo / 30);
  //   const yearsAgo = Math.floor(daysAgo / 365);

  //   if (yearsAgo > 0) {
  //     setTimeAgo(`${yearsAgo} year${yearsAgo === 1 ? "" : "s"} ago`);
  //   } else if (monthsAgo > 0) {
  //     setTimeAgo(`${monthsAgo} month${monthsAgo === 1 ? "" : "s"} ago`);
  //   } else if (weeksAgo > 0) {
  //     setTimeAgo(`${weeksAgo} week${weeksAgo === 1 ? "" : "s"} ago`);
  //   } else if (daysAgo > 0) {
  //     setTimeAgo(`${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`);
  //   } else if (hoursAgo > 0) {
  //     setTimeAgo(`${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`);
  //   } else {
  //     setTimeAgo(`${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`);
  //   }
  // }, [userEntry]);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedImage(file);
  // };

  // const [passwordChangeData, setPasswordChangeData] = useState({
  //   currentPassword: "",
  //   newPassword: "",
  //   confirmNewPassword: "",
  // });

  // const onSubmit = (data) => {
  //   console.log(data.image[0]);
  //   const imageUrl = data.image[0];
  //   const formData = new FormData();
  //   formData.append("image", imageUrl);

  //   const url = `https://api.imgbb.com/1/upload?key=${
  //     import.meta.env.VITE_IMGBB_KEY
  //   }`;

  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`Image upload failed with status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((imageData) => {
  //       const imageAdders = imageData.data.url;
  //       createUser(data.email, data.password)
  //         .then((result) => {
  //           updateUserProfile(data.name, imageAdders).then(() => {
  //             axios
  //               .post(`${import.meta.env.VITE_SERVER_URL}/users`, {
  //                 name: data.name,
  //                 email: data.email,
  //                 image: imageAdders,
  //                 role: data.role,
  //               })
  //               .then((data) => {
  //                 if (data.insertedId) {
  //                   Swal.fire({
  //                     position: "top-center",
  //                     icon: "success",
  //                     title: "Your Profile update Successful",
  //                     showConfirmButton: false,
  //                     timer: 1500,
  //                   });
  //                 }
  //               })
  //               .catch((error) => {
  //                 Swal.fire({
  //                   icon: "error",
  //                   title: "Oops...",
  //                   text: `${error.message}`,
  //                 });
  //               });
  //           });
  //         })
  //         .catch((error) => {
  //           Swal.fire({
  //             icon: "error",
  //             title: "Oops...",
  //             text: `${error.message}`,
  //           });
  //         });
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: `${error.message}`,
  //       });
  //     });
  // };

  // // Function to handle change password form submission
  // const onChangePasswordSubmit = (data) => {
  //   const { currentPassword, newPassword, confirmNewPassword } = data;

  //   // Check if newPassword and confirmNewPassword match
  //   if (newPassword !== confirmNewPassword) {
  //     setMessage("New passwords do not match.");
  //     return;
  //   }

  //   // Clear the form fields
  //   setValue("currentPassword", "");
  //   setValue("newPassword", "");
  //   setValue("confirmNewPassword", "");

  //   setMessage("Password changed successfully.");
  // };

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* Forum Header */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          User Profile
        </p>
      </div>

      {/* USER INFO */}
      <div className="flex flex-col mt-40 gap-5 px-4 pb-10 bg-zinc-800/40">
        <div className="relative">
          <div className="absolute -top-24 border-8 border-zinc-950 w-40 h-40 rounded-full text-xs items-center flex justify-center">
            <img
              src={user?.photoURL}
              alt="user-photo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="h-16 flex justify-end">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="absolute top-4 right-0 hover:text-cyred/60"
            >
              <FaRegEdit size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="">
            <div className="flex items-center gap-2">
              <h3 className="font-bold md:text-lg capitalize">
                {user?.displayName || "Anonymous"}
              </h3>

              <span className="badge badge-success rounded-full font-semibold text-sm">
                user
              </span>
            </div>

            <div className="mt-5">
              <span className="text-sm">
                <span className="font-bold"></span> {user?.email}
              </span>
            </div>
            <div className="text-xs text-zinc-400">
              {/* Joined <span> {timeAgo}</span> */}
            </div>
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
      <div className="flex flex-col mt-5 gap-5 p-3 bg-zinc-800/40 h-full justify-between">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5 h-full">
          <div className="w-full border border-zinc-800 rounded-sm p-2">1</div>

          <div className="w-full border border-zinc-800 rounded-sm p-2">2</div>

          <div className="w-full border border-zinc-800 rounded-sm p-2">3</div>

          <div className="w-full border border-zinc-800 rounded-sm p-2">4</div>
        </div>

          {" "}
         
        </div> */}
      </div>
      {/* {filter &&
        filter?.map((data) => (
          <EditUserModal key={data?._id} isOpen={isOpen} data={data} closeModal={closeModal} />
        ))} */}
    </section>
  );
};

export default UserDashboard;
