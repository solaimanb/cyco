import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import ReviewModal from './ReviewModal';
import useAuth from '../../../../hooks/useAuth';

const WriteAReviewModal = ({ isOpen: isWriteaReviewOpen, setIsOpen: setIsWriteaReviewOpen }) => {
  // STATE:
  const [showWarning, setShowWarning] = useState(false);

  // HOOKS:
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  // REACT HOOK FORM:
  const {
    register,
    handleSubmit,
    reset,
    refetch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  // Define other state variables and functions here...
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

  // Function to handle closing the modal
  const handleClose = () => {
    reset();
    setIsWriteaReviewOpen(false);
  };

  // Function to handle saving the review:
// Function to handle saving the review:
const handleSave = async () => {
  try {
    if (!text || text.trim() === "") {
      Swal.fire({
        text: 'Please write your review before saving!',
        icon: 'warning',
        background: '#222',
        reverseButtons: true,
      });
      return;
    }

    // if (review?.categorie === 'choose a categorie') {
    //   Swal.fire({
    //     text: 'Please select a Categorie!',
    //     icon: 'warning',
    //     background: '#222',
    //     reverseButtons: true,
    //   });
    //   return;
    // }

    // SAVE POSTING TIMESTAMP:
    const timestamp = new Date().getTime();
    
    // Create the review object to send to the server
    const reviewData = {
      user: user,
      content: text,
      timestamp: timestamp,
      views: 0,
      // Add other review properties here as needed
    };

    // CLOSE MODAL:
    reset();
    setIsWriteaReviewOpen(false);

    // SEND REVIEW TO THE SERVER:
    const reviewResponse = await axiosSecure.post('/movieReviews', reviewData); // Replace with your server endpoint
    console.log('Review saved:', reviewResponse);

    Swal.fire({
      text: 'Thank You for Posting Review!',
      icon: 'success',
      background: '#222',
      reverseButtons: true,
    });

    refetch();
  } catch (error) {
    console.error('Error while submitting review', error);
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
        <div className="flex justify-center items-center">
          <div className="modal-content shadow-md rounded relative">
            {/* Close button */}
            <span
              className="close w-8 h-8 mx-auto bg-black/80 text-green-700 cursor-pointer absolute top-0 right-0 rounded-full text-center"
              onClick={handleClose}
            >
              &times;
            </span>
            <h2 className="text-2xl font-semibold mb-4 text-sky-700">Write a Movie Review</h2>

            <ReactQuill
              value={text}
              onChange={setText}
              modules={modules}
              formats={formats}
              style={{
                height: '240px', 
                margin: '2rem',
                fontSize,
                fontFamily,
                color: textColor,
                fontWeight: isBold ? "bold" : "normal",
                fontStyle: isItalic ? "italic" : "normal",
                textDecoration: isUnderline ? "underline" : "none",
                textAlign,
              }}
            />

            <div className="flex justify-center items-center flex-row w-full gap-7">
              <div>
                <button
                  onClick={handleSave}
                  className="bg-sky-700 text-white py-2 px-4 rounded-md mt-4 hover:bg-sky-600 transition duration-300"
                >
                  Save Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </ReviewModal>
  );
};

export default WriteAReviewModal;
