import React, { useContext, useState } from 'react';

import { AuthContext } from '../../../../providers/AuthProvider';
import AddNewMediaForm from './AddNewMedia';

const UploadNewMovie = () => {
  const {user} = useContext(AuthContext)
    const [loading,setLoading] = useState(false)
    const [uploadButtonText , setUploadButtonText] = useState('Upload image')
    //handle from submit 
    const handleSubmit = (event)=>{
       event.preventDefault()
       setLoading(true)
       const title = event.target.title.value
       const actors = event.target.actors.value
       const thumbnail = event.target.thumbnail.value
       const source = event.target.source.value
       const director = event.target.director.value
       const writer = event.target.writer.value
       const country = event.target.country.value
       const boxOffice = event.target.boxOffice.value
       const awards = event.target.awards.value
       const production = event.target.production.value
       const image = event.target.image.files[0]
       const released = event.target.released.value
       const year = event.target.year.value
       const description = event.target.description.value
     
       setUploadButtonText('Uploading.....')
      console.log(image);
        const Data = {
          // image: data?.data?.display_url,
          location,
          // host:{
          //   name:user?.displayName,
          //   image:user?.photoURL,
          //   email:user?.email
          // },
         title,
         actors,
         thumbnail,
         source,
         director,
         writer,
         country,
         boxOffice,
         awards,
         production,
         image,
         released,
         year,
         description
        }
   
        
       console.log('hello from', Data);
    }
    const handleImageChange = image => {
        setUploadButtonText(image.name)
      }  
      const handleDateChange = (ranges) => {
        console.log(ranges.selection);
        setDates(ranges.selection)
      }
    return (
        <div>
           <AddNewMediaForm
            handleSubmit={handleSubmit}

            loading={loading}
            handleDateChange={handleDateChange}
            handleImageChange={handleImageChange} 
            uploadButtonText={uploadButtonText} />
        </div>
    );
};

export default UploadNewMovie;