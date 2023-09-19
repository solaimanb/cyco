import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { imageUpload } from "../../../../api/imgUpload";
import { addLiveTV, updateLiveTV } from "../../../../api/liveTv";
import useTVChannel, { liveTVFetch } from "../../../../hooks/useTVChannel";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "60%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LiveChannels = () => {
  // modal

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [selectedLiveSerial, setSelectedLiveSerial] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [Channels] = useTVChannel();
  const [tvChennel, refetch] = liveTVFetch();
  const { handleSubmit, register, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Poster");

  const onSubmit = async (data) => {
    setLoading(true);

    // Check if 'Poster' exists in 'data' and if it has at least one element
    if (data.Poster && data.Poster.length > 0) {
      const logo = data.Poster[0];
      const { channelName, LiveKey, StartedStreaming } = data;

      try {
        const posterUploadResponse = await imageUpload(logo);
        const movieData = {
          logo: posterUploadResponse.data.display_url,
          channelName,
          LiveKey,
          StartedStreaming,
        };

        const movieUploadResponse = await addLiveTV(movieData);
        console.log(movieUploadResponse);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Live TV Channel Added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      // Handle the case where 'data.Poster' is undefined or empty
      console.log("No file selected.");
    }

    setLoading(false);
    setUploadButtonText("Upload Poster");
  };

  const handleImageChange = (event) => {
    setUploadButtonText(event.target.files[0].name);
    setValue("Poster", event.target.files);
  };

  // Tv channel delete func

  const handleDelete = (channel) => {
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
        fetch(`http://localhost:8080/liveTV/${channel._id}`, {
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
              "An error occurred while deleting the channel.",
              "error"
            );
          });
      }
    });
  };

  useEffect(() => {
    // Reset the form when the selected channel changes
    setValue("channelName", selectedChannel?.channelName || "");
    setValue("LiveKey", selectedChannel?.LiveKey || "");
    setValue("StartedStreaming", selectedChannel?.StartedStreaming || "");
  }, [selectedChannel, setValue]);

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
        LiveKey, // Only updating LiveKey
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
          position: "top-end",
          icon: "success",
          title: "Live TV Channel Updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        closeModal();
      } else {
        Swal.fire("Error", "Failed to update the channel.", "error");
      }
    } catch (err) {
      console.error(err.message);
      Swal.fire(
        "Error",
        "An error occurred while updating the channel.",
        "error"
      );
    }

    setLoading(false);
    setUploadButtonText("Upload Poster");
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
            onClick={openModal}
            className="text-center text-red-800 justify-center"
          >
            New Channel Add
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex justify-between">
              <h2>Add New Channel</h2>
              <button
                ref={(_subtitle) => (subtitle = _subtitle)}
                onClick={closeModal}
                className=" shadow-2xl py-2 px-2"
              >
                close
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-10 ">
              <div className="md:flex justify-between items-start gap-4 pb-6">
                <div className="w-full space-y-4 md:space-y-0 md:w-1/2">
                  <div className="space-y-2 text-sm">
                    <label
                      htmlFor="channelName"
                      className="block text-gray-500"
                    >
                      Channel Name
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                      type="text"
                      placeholder="Channel Name"
                      {...register("channelName", { required: true })}
                    />
                  </div>

                  <div className="space-y-2 text-sm">
                    <label htmlFor="LiveKey" className="block text-gray-500">
                      Live Serial
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                      type="text"
                      placeholder="Live Key"
                      {...register("LiveKey", { required: true })}
                    />
                  </div>

                  <div className="space-y-2 text-sm">
                    <label
                      htmlFor="StartedStreaming"
                      className="block text-gray-500"
                    >
                      Started Streaming
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                      type="text"
                      placeholder="Started Streaming"
                      {...register("StartedStreaming", { required: true })}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <label>
                    <input
                      onChange={handleImageChange}
                      className="hidden"
                      type="file"
                      name="logo"
                      accept="image/*"
                    />
                    <div className="p-3 bg-zinc-700 w-full m-a7to rounded-sm">
                      <div className="px-5 py-3 relative border-4 border-dotted">
                        <div className="flex flex-col w-max mx-auto text-center">
                          <div className="text-white border bg-zinc-800 border-gray-600 rounded-sm cursor-pointer p-1 px-3">
                            {uploadButtonText}
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-center font-medium text-white transition duration-200 rounded-sm-md bg-cyred/60 hover:bg-cyred"
              >
                {loading ? <h2>Loading...</h2> : "Save & Continue"}
              </button>
            </form>
          </Modal>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-10 text-center">
          {Channels?.map((channel) => (
            <div
              key={channel._id}
              className="text-white font-bold mx-auto text-center"
            >
              <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full overflow-hidden mb-4">
                <img
                  src={channel.logo}
                  className="w-full h-full"
                  alt={channel.name}
                />
              </div>
              <h5 className="text-xs 2xl:text-">{channel.channelName}</h5>
              <div className="flex text-white">
                <button onClick={() => openEditModal(channel)}>E</button>
                <button onClick={() => handleDelete(channel)}>D</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LiveChannels;
