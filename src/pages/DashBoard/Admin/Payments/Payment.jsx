import React from 'react'
import Payment from '../../../payment/Payment'
import useTitle from '../../../../hooks/useTitle';

const Payments = () => {
  // title
  useTitle('Payments | CYCO')
  return (
    <div className='dashBoard-bg'>
      <h3>Payment Page</h3>
      <Payment />
    </div>
  )
}

export default Payments
