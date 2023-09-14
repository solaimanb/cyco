import React from 'react'
import CanvasComponent from '../canvas/CanvasComponent'

const FeedBack = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full lg:my-16 bg-black/60 border border-white/20 mb-8 relative'>
       <div className='-z-10 absolute'>
       <CanvasComponent />
       </div>
      <h3> Would You Like to leave a feedback to Grow Us:</h3>

      <div className='text-start mx-auto lg:my-16'>
        <label className='pb-2 text-white/80' htmlFor="feedBack">Your feedBack Please</label>
        <br />

        <textarea className='bg-black/60 text-white/60 p-8 mt-2 border border-cyred/40' name="feedBack" id="feedBack" cols="60" rows="4"></textarea>
        <br />
        
      </div>
      <button className='-mt-12' type='feedBack'>Send Feedback </button>

      <div>
        <h3 className='lg:my-16'>
        Thank You For Your Patience 
        </h3>
      </div>
    </div>
  )
}

export default FeedBack
