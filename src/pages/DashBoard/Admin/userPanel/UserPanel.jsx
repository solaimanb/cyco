import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const UserPanel = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users');
        return res.data;
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
    },
  });

  const handlerMakeAdmin = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your web site New Admin selected',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#173931',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes.!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_URL}/users/admin/${user?._id}`, {
          method: 'PATCH',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.modifiedCount) {
              setButtonDisabled(true);
              Swal.fire('Admin!', `${user.name} is an Admin Now!!`, 'success');
            }
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
        <table className="table">
          <thead>
            <tr className="text-lg text-white">
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="pl-14">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user?._id}>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user?.photoUrl} alt="User Avatar" />
                  </div>
                </td>
                <td className="font-semibold">{user?.username}</td>
                <td className="text-zinc-400">{user?.email}</td>
                <td>
                  {user?.role === 'admin' ? (
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
                  {user.role === 'user' ? (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserPanel;
