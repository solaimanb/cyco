import React from 'react'
import CanvasComponent from '../canvas/CanvasComponent'

const FeedBack = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full lg:my-16 bg-black/60 border border-white/20 mb-8 relative'>
       <div className='-z-10 absolute'>
       <CanvasComponent />
       </div>
      <h3 className='text-3xl text-gray-700 text-center'> Would You Like to leave a feedback <br /> to Grow Us:</h3>

      <div className='text-start mx-auto lg:my-16'>
        <label className='pb-2 text-gray-700' htmlFor="feedBack">Your feedBack Please</label>
        <br />

        <textarea className='bg-black/60 text-gray-700 p-8 mt-2 border border-gray-700' name="feedBack" id="feedBack" cols="60" rows="4"></textarea>
        <br />
        
      </div>
      <button className='-mt-12 text-gray-700' type='feedBack'>Send Feedback </button>

      <div>
        <h3 className='lg:my-16 text-gray-700 text-3xl'>
        Thank You For Your Patience 
        </h3>
      </div>
    </div>
  )
}

export default FeedBack
