import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../../api/imgUpload";
import { addLiveTV } from "../../../../api/liveTv";
import useTVChannel, { liveTVFetch } from "../../../../hooks/useTVChannel";

const GoLive = () => {
  const [Channels] = useTVChannel();
  const [tvChennel, refetch] = liveTVFetch();
  console.log(Channels);
  const { handleSubmit, register, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Poster");
  console.log(tvChennel);
  // Handle form submit
  const onSubmit = async (data) => {
    setLoading(true);
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

    setLoading(false);
    setUploadButtonText("Upload Poster");
  };

  const handleImageChange = (event) => {
    setUploadButtonText(event.target.files[0].name);
    setValue("Poster", event.target.files);
  };

  // handle delete live tv channel

  // const handleDelete = (channel) => {
  //   console.log(channel._id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     console.log(result);
  //     if (result.isConfirmed) {
  //       fetch(`http://localhost:8080/liveTV/${channel._id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             refetch();
  //             Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //           }
  //         });
  //     }
  //   });
  // };

  const handleDelete = (channel) => {
    // Display a confirmation dialog
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
        // If the user confirms, send a DELETE request to the server
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
              // If the deletion was successful, notify the user and perform any necessary UI updates
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              // Optionally, you can call a function to update your UI here (e.g., refetch())
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

  return (
    <>
      <section className="min-h-screen p-3 md:p-6 mt-6 lg:mt-0 backdrop-blur-sm bg-zinc-950">
        {/* SYSTEM LOGS HEADER */}
        <p className="md:hidden text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Upload Series
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-10">
          <div className="md:flex justify-between items-start gap-4 pb-6">
            <div className="w-full space-y-4 md:space-y-0 md:w-1/2">
              <div className="space-y-2 text-sm">
                <label htmlFor="channelName" className="block text-gray-500">
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
      </section>
      <section className="min-h-screen p-3 md:p-6 mt-6 lg:mt-0 backdrop-blur-sm bg-zinc-950">
        <p className="md:hidden text-sm md:text-base text-white font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Uploaded live tv channel
        </p>

        {/* <EditLiveChannel ></EditLiveChannel> */}
        <div>
          <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-10">
            {Channels?.map((channel) => (
              <div key={channel._id} className="text-white font-bold mx-auto">
                <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={channel.logo}
                    className="w-full h-full"
                    alt={channel.name}
                  />
                </div>
                <h5 className="text-xs 2xl:text-">{channel.channelName}</h5>
                <div className="flex text-white">
                  <button>E</button>
                  <button onClick={() => handleDelete(channel)}>D</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GoLive;
