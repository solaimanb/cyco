import React from 'react';
import { deleteHistory } from '../../../../api/historyPostData';

const HistoryCard = (data) => {
  const {
    _id,
   Title,
   Poster,
   Plot
  } = data.data || []
  const handleHistoryDelete = (id) => {
    deleteHistory(id)
    .then(data=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
    return (
        <div>
           <div className="hero ">
           
  <div className="hero-content flex-col">
    <img src={Poster} />
    
    <div className=''>
      <h1 className="text-xl font-bold">{Title}</h1>
      <button onClick={()=>{handleHistoryDelete(_id)}} className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HistoryCard;