import React from "react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Modernization = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
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
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              setButtonDisabled(true);
              Swal.fire("Admin!", `${user.name} is an Admin Now!!`, "success");
            }
          });
      }
    });
  };
  console.log(users);
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="overflow-x-auto"
      >
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-lg">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="pl-14">Action</th>
            </tr>
          </thead>
          {users?.map((user) => (
            <tbody key={user._id}>
              <tr className="">
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={user?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <span className="text-lg font-semibold text-red-800">
                      Admin
                    </span>
                  ) : (
                    <span className="text-base font-medium tracking-wider text-gray-900">
                      User
                    </span>
                  )}
                </td>
                <td className="flex items-center gap-1">
                  <button
                    onClick={() => handlerMakeAdmin(user)}
                    disabled={isButtonDisabled}
                    className="bg-main_color bg-orange-500 text-white w-full py-2 rounded-lg shadow-xl"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Modernization;
