import React from 'react'
import Subscription from '../../../../components/subscription/Subscription'

const ManageSubscription = () => {
  return (
    <div>
      <h3 className='md:ml-72 md:pl-5 lg:ml-72'>Choose a subscription</h3>
      <div className='md:ml-72 lg:ml-72'>
        <Subscription/>
      </div>
    </div>
  )
}

export default ManageSubscription
