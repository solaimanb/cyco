import { useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { updateLiveTV } from '../../../../api/liveTv';
import useTVChannel from '../../../../hooks/useTVChannel';
import ChannelModal from './ChannelModal';

const LiveChannels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const { onOpen, onOpenChange } = useDisclosure();
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [Channels] = useTVChannel();

  const handleDelete = async (channel) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/liveTV/${channel._id}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Network response was not ok');
            }
          })
          .then((data) => {
            if (data.success) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            } else {
              Swal.fire('Error', 'Failed to delete the channel.', 'error');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire(
              'Error',
              'An error occurred while deleting the channel.',
              'error'
            );
          });
      }
    });
  };

  // Function to open the modal for editing a channel
  const openEditModal = (channel) => {
    setSelectedChannel(channel);
    openModal();
  };

  // Function to handle the update of a channel
  const handleUpdate = async (data) => {
    setLoading(true);
    const { channelName, LiveKey, StartedStreaming } = data;

    try {
      const updatedData = {
        channelName,
        LiveKey,
        StartedStreaming,
      };

      if (data.Poster && data.Poster.length > 0) {
        const logo = data.Poster[0];
        const posterUploadResponse = await imageUpload(logo);
        updatedData.logo = posterUploadResponse.data.display_url;
      }

      const updatedChannelResponse = await updateLiveTV(
        selectedChannel._id,
        updatedData
      ); // Use your API function to update the channel

      if (updatedChannelResponse.success) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Live TV Channel Updated successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal();
      } else {
        Swal.fire('Error', 'Failed to update the channel.', 'error');
      }
    } catch (err) {
      console.error(err.message);
      Swal.fire(
        'Error',
        'An error occurred while updating the channel.',
        'error'
      );
    }

    setLoading(false);
    setUploadButtonText('Upload Poster');
  };

  return (
    <>
      <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
        {/* LIVE CHANNELS HEADER */}
        <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
          <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
            Live Channels
          </p>
        </div>

        <div className="text-center bg-zinc-950">
          <button
            // onClick={openModal}
            onClick={() => setIsOpen(!isOpen)}
            // isOpen={isOpen}
            className="text-center text-white justify-center px-3 py-3 bg-red-900 hover:bg-red-800 "
          >
            New Channel Add
          </button>
          <ChannelModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isClose={isClose}
            setIsClose={setIsClose}
            onOpenChange={onOpenChange}
          />
        </div>

        <table className="w-full border-collapse my-10">
          <thead>
            <tr className="text-white">
              <th className="px-4 py-2">Logo</th>
              <th className="px-4 py-2">Channel Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center justify-center">
            {Channels?.map((channel) => (
              <tr key={channel._id}>
                <td className="px-4 py-2 ">
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full overflow-hidden  mx-auto">
                    <img
                      src={channel.logo}
                      className="w-full h-full"
                      alt={channel.name}
                    />
                  </div>
                </td>
                <td className="px-4 py-2">{channel.channelName}</td>
                <td className="px-4 py-2  space-x-6">
                  <button onClick={() => openEditModal(channel)}>Edit</button>

                  <button onClick={() => handleDelete(channel)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default LiveChannels;
