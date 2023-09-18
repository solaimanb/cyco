import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../../api/imgUpload";
import { addLiveTV } from "../../../../api/liveTv";
import useTVChannel from "../../../../hooks/useTVChannel";

const GoLive = () => {
  const [Channels] = useTVChannel();

  const { handleSubmit, register, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Poster");

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

  return (
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
              <label htmlFor="StartedStreaming" className="block text-gray-500">
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
  );
};

export default GoLive;
