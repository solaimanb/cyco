import React, { useState } from "react";
import {
  BiExport,
  BiSolidCamera,
  BiSolidKey,
  BiSolidSave,
} from "react-icons/bi";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useForm } from "react-hook-form";

const UsersHome = () => {
  const { user, updateUserProfile } = useAuth();

  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit, setValue } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const { displayName } = data;

      if (selectedImage) {
        const formData = new FormData();
        formData.append("profileImage", selectedImage);

        // Upload the profile image
        const response = await axios.post(
          "http://localhost:8080/register",
          formData
        );

        if (response.status === 200) {
          // Update the user's profile with the new image URL and name
          const updatedUser = await updateUserProfile({
            displayName,
            photoURL: response.data.imageUrl,
          });

          if (updatedUser) {
            setMessage("Profile updated successfully");
          } else {
            setMessage("Failed to update profile");
          }
        }
      } else {
        // If no profile image is selected, update only the display name
        const updatedUser = await updateUserProfile({ displayName });
        if (updatedUser) {
          setMessage("Profile updated successfully");
        } else {
          setMessage("Failed to update profile");
        }
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while updating the profile");
    }
  };

  const data = [
    {
      name: "Day 1",
      timeSpent: 170,
    },
    {
      name: "Day 2",
      timeSpent: 380,
    },
    {
      name: "Day 3",
      timeSpent: 200,
      pv: 40,
      amt: 200,
    },
    {
      name: "Day 4",
      timeSpent: 278,
      pv: 40,
      amt: 200,
    },
    {
      name: "Day 5",
      timeSpent: 189,
      pv: 40,
      amt: 200,
    },
    {
      name: "Day 6",
      timeSpent: 239,
      pv: 40,
      amt: 200,
    },
    {
      name: "Day 7",
      timeSpent: 349,
      pv: 40,
      amt: 200,
    },
  ];

  return (
    <div className="px-2">
      <div className="bg-zinc-700 bg-opacity-50 w-full p-6 border rounded-md">
        <div>
          <h2>
            Welcome to your Profile{" "}
            <span className="text-red-400">{user?.displayName}</span>...
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <div className="border-2 border-cyred rounded-full p-2 bg-zinc-400 bg-opacity-40 mr-8 relative">
                <label htmlFor="profileImageInput">
                  <img
                    src={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : user.photoURL
                    }
                    className="w-[150px] h-[150px] rounded-full cursor-pointer"
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  id="profileImageInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <div className="space-y-4 w-full">
                <div className="flex items-center mt-5">
                  <label htmlFor="displayName">Display Name:</label>
                  <input
                    type="text"
                    id="displayName"
                    className="ml-2 p-2 border rounded-lg bg-zinc-900 bg-opacity-40 w-2/3"
                    {...register("displayName")}
                  />
                </div>
                <div className="flex justify-end pt-8 pb-4">
                  <button
                    type="submit"
                    className="bg-black py-2 px-4 border-y-cyred border-2 border-x-0 rounded-md flex items-center gap-2 hover:bg-cyred duration-500"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
        <div className="flex justify-end gap-4">
          <button className="bg-sky-700 py-2 px-4 text-sm rounded-md hover:bg-sky-900 flex items-center gap-2">
            <BiSolidKey /> Change Password
          </button>
          <button className="bg-sky-700 py-2 px-4 text-sm rounded-md hover:bg-sky-900 flex items-center gap-2">
            <BiExport /> Export Account data
          </button>
        </div>
      </div>
      <div className="bg-zinc-700 bg-opacity-50 w-full p-6 mt-4 border-2 rounded-md">
        <div className="">
          <h2 className="pb-6">
            Your last week spent time on{" "}
            <span className="text-cyred font-bold">Cyco</span>
          </h2>
          <div style={{ width: "95%", height: 240 }}>
            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} min`} />
                <Area
                  type="monotone"
                  dataKey="timeSpent"
                  stroke="#800"
                  fill="#800"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersHome;
