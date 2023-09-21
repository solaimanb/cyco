import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ReviewModal from "./ReviewModal";

const WriteAReviewModal = ({
  isOpen: isWriteaReviewOpen,
  setIsOpen: setIsWriteaReviewOpen,
  title,
  thumbnail,
  genre,
  poster,
}) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    refetch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("16px");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textColor, setTextColor] = useState("#fff");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikeThrough, setIsStrikeThrough] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);
  const [textAlign, setTextAlign] = useState("");
  const [listType, setListType] = useState("");
  const [blockQuote, setBlockQuote] = useState(false);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "sub", "super"],
      [{ color: [] }],
      ["align"],
      ["list", "bullet", "ordered"],
      ["blockquote"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "align",
    "list",
    "blockquote",
  ];

  const handleClose = () => {
    reset();
    setIsWriteaReviewOpen(false);
  };

  const handleSave = async () => {
    try {
      if (!text || text.trim() === "") {
        Swal.fire({
          text: "Please write your review before saving!",
          icon: "warning",
          background: "#222",
          reverseButtons: true,
        });
        return;
      }

      const timestamp = new Date().getTime();

      const reviewData = {
        user: user,
        content: text,
        timestamp: timestamp,
        views: 0,
        title,
        thumbnail,
        genre,
        poster,
      };

      reset();
      setIsWriteaReviewOpen(false);

      const reviewResponse = await axiosSecure.post(
        "/movieReviews",
        reviewData
      );
      console.log("Review saved:", reviewResponse);

      Swal.fire({
        text: "Thank You for Posting Review!",
        icon: "success",
        background: "#222",
        reverseButtons: true,
      });

      refetch();
    } catch (error) {
      console.error("Error while submitting review", error);
    }
  };

  return (
    <ReviewModal
      isOpen={isWriteaReviewOpen}
      setIsOpen={setIsWriteaReviewOpen}
      reset={reset}
      refetch={refetch}
    >
      <>
        <div className="flex justify-center items-center h-full">
          <div className="modal-content shadow-md rounded relative ">
            <span
              className="close w-8 h-8 mx-auto bg-black text-green-700 cursor-pointer absolute top-0 right-0 rounded-full text-center"
              onClick={handleClose}
            >
              &times;
            </span>
            <div>
              <h2 className="text-1xl font-semibold mb-4 text-sky-700">
                Write <span className="text-cyred">{title}</span> Movie Review
              </h2>
            </div>
            <ReactQuill
              value={text}
              onChange={setText}
              modules={modules}
              formats={formats}
              style={{
                height: "240px",
                margin: "2rem",
                fontSize,
                fontFamily,
                color: textColor,
                fontWeight: isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: isUnderline ? "underline" : "none",
                textAlign,
              }}
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-row w-full gap-7 absolute z-20 bottom-0 mb-2">
          <div>
            <button
              onClick={handleSave}
              className="bg-sky-700 text-white py-2 px-4 rounded-md mt-4 hover:bg-sky-600 transition duration-300"
            >
              Save Review
            </button>
          </div>
        </div>
      </>
    </ReviewModal>
  );
};

export default WriteAReviewModal;