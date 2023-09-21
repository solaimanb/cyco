import React from "react";
import { imageUpload } from "../../../../api/imgUpload";
import { addLiveTV, updateLiveTV } from "../../../../api/liveTv";
import Swal from "sweetalert2";
import Loading from "../../../../components/loading/Loading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const ChannelModal = ({ isOpen, setIsOpen, isClose, setIsClose }) => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, setValue } = useForm();
  const [uploadButtonText, setUploadButtonText] = useState("img");

  const handleClose = () => {
    setIsClose(!isClose); // Close the modal
    onClose(); // Call the close callback
  };

  const handleImageChange = (event) => {
    setUploadButtonText(event.target.files[0].name);
    setValue("Poster", event.target.files);
  };

  const onClose = () => {
    setIsOpen(false); // Close the modal when called
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose(); // Close the modal when clicking outside
    }
  };

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
    setUploadButtonText("img");
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      radius="2xl"
      classNames={{
        body: "",
        backdrop: "bg-[#000000]/50 backdrop-opacity-40",
        base: "border-[#000000] bg-cyred dark:bg-cyred text-red-500",
        header: "border-b-[1px] border-[#000000]",
        footer: "border-t-[1px] border-[#000000]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      onClick={handleBackdropClick}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              onClick={handleBackdropClick}
              className="flex justify-between"
            >
              Add New Channel
              <button onClick={() => setIsOpen(false)}>Close</button>
            </ModalHeader>

            <ModalBody>
              <div className="modal-box w-full mx-auto p-4 rounded shadow-lg">
                <div className="">
                  <div className="flex justify-between"></div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full pt-10"
                  >
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
                            className="w-full px-4 py-3 text-red-800 bg-zinc-700 rounded-sm"
                            type="text"
                            placeholder="Channel Name"
                            {...register("channelName", {
                              required: true,
                            })}
                          />
                        </div>

                        <div className="space-y-2 text-sm">
                          <label
                            htmlFor="LiveKey"
                            className="block text-gray-500"
                          >
                            Live Serial
                          </label>
                          <input
                            className="w-full px-4 py-3 text-red-800 bg-zinc-700 rounded-sm"
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
                            className="w-full px-4 py-3 text-red-800 bg-zinc-700 rounded-sm"
                            type="text"
                            placeholder="Started Streaming"
                            {...register("StartedStreaming", {
                              required: true,
                            })}
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
                    <ModalFooter>
                      <button
                        type="submit"
                        className="w-full p-3 text-center font-medium text-white transition duration-200 rounded-sm-md bg-cyred/60 hover:bg-cyred"
                      >
                        {loading ? <Loading /> : "Save & Continue"}
                      </button>
                    </ModalFooter>
                  </form>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ChannelModal;
