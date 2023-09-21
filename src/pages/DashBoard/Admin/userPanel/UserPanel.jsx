import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UserPanel = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/users");
        return res.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
    },
  });

  const handlerMakeAdmin = (user) => {
    Swal.fire({
      text: `${user?.username} will be an admin! Are you sure?`,
      icon: "question",
      background: "#222",
      reverseButtons: true,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonColor: "#800000",
      confirmButtonColor: "#173931",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_URL}/users/admin/${user?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.modifiedCount) {
              setButtonDisabled(true);
              Swal.fire({
                text: `${user?.username} is an admin now!`,
                icon: "success",
                background: "#222",
              });
            }
          });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_URL}/user/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Network response was not ok");
            }
          })
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire("Error", "Failed to delete the channel.", "error");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the User.",
              "error"
            );
          });
      }
    });
  };

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* User Panel Header */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          User Panel
        </p>
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="overflow-x-auto mt-10"
      >
        <table className="table text-center">
          <thead>
            <tr className="text-lg text-white">
              <th className="hidden md:table-cell">Image</th>
              <th>Name</th>
              <th className="hidden md:table-cell">Email</th>
              <th>Role</th>
              <th>Action</th>
              <th className="">Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user?._id}>
                <td className="hidden md:table-cell">
                  <div className="mask mask-squircle w-12 h-12">
                    {user?.photo ? (
                      <img src={user.photo} alt="User Avatar" />
                    ) : (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqrPeW8qKDv2TucX76nWLgPFbAZN9Ke3-5w&usqp=CAU"
                        alt="Default Avatar"
                      />
                    )}
                  </div>
                </td>
                <td className="font-semibold">{user?.name}</td>
                <td className="hidden md:table-cell text-zinc-400">
                  {user?.email}
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <span className="text-sm font-semibold text-green-600">
                      Admin
                    </span>
                  ) : (
                    <span className="text-base font-medium tracking-wider text-white">
                      User
                    </span>
                  )}
                </td>
                <td className="flex items-center gap-1">
                  {user.role === "user" ? (
                    <button
                      onClick={() => handlerMakeAdmin(user)}
                      disabled={isButtonDisabled}
                      className="bg-main_color bg-zinc-600 text-white w-full py-2 rounded-sm text-sm shadow-xl"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-300 text-gray-600 w-full py-2 rounded-lg shadow-xl cursor-not-allowed"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDelete(user)} className="">
                    <AiFillDelete className="text-red-900 text-3xl font-bold" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserPanel;
