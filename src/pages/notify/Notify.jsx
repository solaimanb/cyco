// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// const socket = io.connect(`${import.meta.env.VITE_SERVER_URL}`)

// const Notify = () => {

// const [notification, setNotification] = useState('');
// const [rNotify, setRNotify] = useState('');

// const sendNotification = () => {
//     socket.emit('send_notification', {notification: notification})
// }



// useEffect(() => {
//     socket.on('receive_notification', (data) => {
//         console.log(data.notification);
//         setRNotify(data.notification);
//     })
// }, [socket]);




//   return (
//     <div className='flex flex-col justify-center items-center '>
       
//        <div className='py-4 px-8 my-16 rounded-lg bg-cyred/60'>
//         <h3>SEND NOTIFICATIO</h3>
//         <p>
//             {rNotify}
//         </p>
//        </div>
       
//         <div className='flex flex-col gap-4'>
//             <input 
//             type="text" 
//             name='notify' 
//             id='notify' 
//             placeholder='Write Notification'
//              onChange={(event) => {
//                 setNotification(event.target.value);
//              }}
//             className='px-8 py-2 rounded-lg'
//             />

//             <button
//             onClick={sendNotification} 
//             className='bg-sky-700 w-1/2 mx-auto py-2 px-4 rounded-lg'
//             >
//                 Lets Notify
            
//             </button>

//         </div>
      
//     </div>
//   )
// }

// export default Notify
