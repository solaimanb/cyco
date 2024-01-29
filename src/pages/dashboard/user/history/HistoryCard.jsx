import React from "react";
import Swal from "sweetalert2";
import { deleteHistory } from "../../../../api/historyPostData";

const HistoryCard = (data, refetch) => {
  const { _id, Title, Poster, Plot } = data.data || [];
  const handleHistoryDelete = (id) => {
    deleteHistory(id)
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((data) => {
          if (data.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
          refetch();
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card card-compact w-32 mt-5">
      <figure>
        <img src={Poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="w-full h-full">{Title}</h2>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              handleHistoryDelete(_id);
            }}
            className="btn btn-xs btn-error"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
