import React, { useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Modernization = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery(["users"], async () => {
    try {
      const res = await axiosSecure.get("/users");
      return res.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  });

  const handlerMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your web site New Admin selected",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#173931",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes.!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setButtonDisabled(true);
              Swal.fire("Admin!", `${user.name} is an Admin Now!!`, "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="overflow-x-auto"
      >
        <table className="table">
          <thead>
            <tr className="text-lg">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="pl-14">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user.photoUrl} alt="User Avatar" />
                  </div>
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="text-lg font-semibold text-red-800">
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
                      className="bg-main_color bg-orange-500 text-white w-full py-2 rounded-lg shadow-xl"
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modernization;
