import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitMedia } from '../../../../store/slices/mediaSlice/mediaSlice';
import { AuthContext } from '../../../../providers/AuthProvider';
import AddNewMediaForm from '../addNewMedia/AddNewMedia';

const UploadNewMovies = () => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload image');
  //handle from submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const title = event?.target?.title?.value;
    const actors = event?.target?.actors?.value;
    const thumbnail = event?.target?.thumbnail?.value;
    const source = event?.target?.source?.value;
    const director = event?.target?.director?.value;
    const writer = event?.target?.writer?.value;
    const country = event?.target?.country?.value;
    const boxOffice = event?.target?.boxOffice?.value;
    const awards = event?.target?.awards?.value;
    const production = event?.target?.production?.value;
    const image = event?.target?.image?.files[0];
    const released = event?.target?.released?.value;
    const year = event?.target?.year?.value;
    const description = event?.target?.description?.value;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('actors', actors);
    formData.append('thumbnail', thumbnail);
    formData.append('director', director);
    formData.append('writer', writer);
    formData.append('country', country);
    formData.append('boxOffice', boxOffice);
    formData.append('awards', awards);
    formData.append('production', production);
    formData.append('released', released);
    formData.append('year', year);
    formData.append('description', description);
    formData.append('source', source);
    formData.append('image', image);

    // Dispatch the submitMedia action with the formData
    dispatch(submitMedia(formData))
      .unwrap()
      .then(() => {  
        setUploadButtonText('Upload Image');
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
    setUploadButtonText('Uploading.....');
    console.log(image);
   
  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  const handleDateChange = (ranges) => {
    console.log(ranges.selection);
    setDates(ranges.selection);
  };
  return (
    <div className="w-full h-full">
      <AddNewMediaForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleDateChange={handleDateChange}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default UploadNewMovies;
