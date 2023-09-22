import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import useAuth from "../../../hooks/useAuth";
import { getUser, updateUser, updateUserRequest } from "../../../store/slices/editUserSlice/editUserSlice";
import Modal from 'react-modal';


const UserDashboard = () => {
  const { user } = useAuth();
  const users = useSelector((state) => state.editUser.data);
  console.log(users)
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    photo: null,
  });

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      backgroundColor: '#111',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const currentUserData = users.find((userData) => userData.email === user.email);
  console.log(currentUserData)
  const saveEditedUserData = async () => {
    try {
      // Dispatch the updateUserRequest action to update the data in Redux store and API
      await dispatch(updateUserRequest(currentUserData._id, editedUserData));
      // Close the modal
      closeEditModal();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleEditUserDataChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };
  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* Forum Header */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 mt-2 py-4 rounded-sm">
        <p className=" md:flex text-sm md:text-base font-semibold border-l-4 border-cyred md:ml-2 px-2 md:px-5">
          User Profile
        </p>
      </div>

      {/* USER INFO */}
      {currentUserData && (
        <div className="flex flex-col mt-40 gap-5 px-4 pb-10 bg-zinc-800/40">
        <div className="relative">
          <div className="absolute -top-24 border-8 border-zinc-950 w-40 h-40 rounded-full text-xs items-center flex justify-center">
            <img
              src={currentUserData?.photo}
              alt="user-photo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <div className="h-16 flex justify-end">
            <button
              onClick={openEditModal}
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
                {currentUserData?.name || "Anonymous"}
              </h3>

              <span className="badge badge-success rounded-full font-semibold text-sm">
                user
              </span>
            </div>

            <div className="mt-5">
              <span className="text-sm">
                <span className="font-bold"></span> {currentUserData?.email}
              </span>
            </div>
            <div className="text-xs text-zinc-400">
              {/* Joined <span> {timeAgo}</span> */}
            </div>
          </div>
        </div>
      </div>
      )}

      <div className="bg-zinc-800 z-50">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit User Data Modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <h2 className="pb-4">Edit User Data</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedUserData.name}
            onChange={handleEditUserDataChange}
            className="mb-2 rounded ml-2 "
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={editedUserData.email}
            onChange={handleEditUserDataChange}
            className="mb-2 rounded ml-2 "
          />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            className="mb-8 rounded ml-2 "
            onChange={(e) =>
              setEditedUserData({
                ...editedUserData,
                photo: e.target.files[0],
              })
            }
          />
        </div>
        <button onClick={saveEditedUserData} className="px-2 py-1 rounded-md bg-blue-600 mr-6">Save</button>
        <button onClick={closeEditModal} className="px-2 py-1 rounded-md bg-red-600">Cancel</button>
      </Modal>
      </div>
    </section>
  );
};

export default UserDashboard;
