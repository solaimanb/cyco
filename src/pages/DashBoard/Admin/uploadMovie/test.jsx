import React, { useContext, useState } from 'react';
import io from 'socket.io-client';
import Swal from 'sweetalert2';
import { addNewMovie } from '../../../../api/addNewMovie';
import { imageUpload } from '../../../../api/imgUpload';
import { AuthContext } from '../../../../providers/AuthProvider';

// const socket = io('http://localhost:8080');
const socket = io.connect(`${import.meta.env.VITE_SERVER_URL}`);

const UploadMovie = () => {
  const [notification, setNotification] = useState('');
  const [notifyUsers, setNotifyUsers] = useState(false);

  const sendNotification = () => {
    socket.emit('send_notification', { notification: notification });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Notification sent successfully',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload image');

  const categories = [
    {
      label: 'Action',
    },
    {
      label: 'Adventure',
    },
    {
      label: 'Sci-Fi',
    },
    {
      label: 'Emotional',
    },
    {
      label: 'Sad',
    },
  ];

  // FORM SUBMIT HANDLER:
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const Title = event?.target?.Title?.value;
    const Actors = event?.target?.Actors?.value;
    const Thumbnail = event?.target?.Thumbnail?.value;
    const Website = event?.target?.Website?.value;
    const Runtime = event?.target?.Runtime?.value;
    const Language = event?.target?.Language?.value;
    const Director = event?.target?.Director?.value;
    const Genre = event?.target?.Genre?.value;
    const Writer = event?.target?.Writer?.value;
    const Country = event?.target?.Country?.value;
    const BoxOffice = event?.target?.BoxOffice?.value;
    const Awards = event?.target?.Awards?.value;
    const Production = event?.target?.Production?.value;
    const Poster = event?.target?.Poster?.files[0];
    const Released = event?.target?.Released?.value;
    const Year = event?.target?.Year?.value;
    const Plot = event?.target?.Plot?.value;

    if (notifyUsers) {
      sendNotification();
    }

    imageUpload(Poster)
      .then((data) => {
        const movieData = {
          Poster: data.data.display_url,
          Title,
          Actors,
          Thumbnail,
          Website,
          Runtime,
          Language,
          Director,
          Genre,
          Writer,
          Country,
          BoxOffice,
          Awards,
          Production,
          Released,
          Year,
          Plot,
          NotifyUsers: notifyUsers ? notification : '',
        };

        addNewMovie(movieData)
          .then((data) => {
            console.log(data);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Movie uploaded successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));

    setUploadButtonText('Uploading.....');
    setNotifyUsers(false);
  };
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  return (
    <div className=" w-full flex flex-col bg-zinc-800 p-3 rounded-sm h-full">
      <div className="w-full">
        <div className="bg-cyred/60 w-full py-10 flex justify-center items-center rounded-sm">
          <p>Upload New Movies</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className=" w-full pt-10">
        <div className="flex flex-row gap-5 pb-6">
          <div className="h-full">
            <div className="space-y-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 rounded-sm"
                  name="Title"
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>

              <div className=" p-4 bg-white/60 w-full m-auto">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        onChange={(event) => {
                          handleImageChange(event.target.files[0]);
                        }}
                        className="text-sm cursor-pointer w-36 hidden text-gray-800 bg-white/60"
                        type="file"
                        name="Poster"
                        id="poster"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-rose-500 text-white border border-gray-300 rounded-sm-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                        {uploadButtonText}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="released" className="block text-gray-600">
                    Released
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-white/60 text-gray-800 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Released"
                    id="released"
                    type="text"
                    placeholder="Released"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="year" className="block text-gray-600">
                    Year
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Year"
                    id="year"
                    type="number"
                    placeholder="Year"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="runtime" className="block text-gray-600">
                    Runtime
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Runtime"
                    id="runtime"
                    type="text"
                    placeholder="Runtime"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="language" className="block text-gray-600">
                    Language
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Language"
                    id="language"
                    type="text"
                    placeholder="Language"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="plot" className="block text-gray-600">
                  Plot
                </label>

                <textarea
                  id="plot"
                  className=" block rounded-sm focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 bg-white/60  border border-cyred/60 focus:outline-rose-500 "
                  name="Plot"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="">
            <div className="space-y-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="actors" className="block text-gray-600">
                  Actors
                </label>
                <input
                  className="w-full px-4 py-3 border text-white bg-white/60 border-cyred/60 focus:outline-rose-500 rounded-sm "
                  name="Actors"
                  id="actors"
                  type="text"
                  placeholder="Actors"
                  required
                />
              </div>

              <div className="flex justify-between gap-2 ">
                <div className="space-y-1 text-sm w-full">
                  <label htmlFor="genre" className="block text-gray-600">
                    Movies Type
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm"
                    name="Genre"
                  >
                    {categories.map((category) => (
                      <option value={category.label} key={category.label}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="thumbnail" className="block text-gray-600">
                      Thumbnail
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                      name="Thumbnail"
                      id="thumbnail"
                      type="text"
                      placeholder="Thumbnail"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="website" className="block text-gray-600">
                  Website Link
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                  name="Website"
                  id="website"
                  type="text"
                  placeholder="Website Link"
                  required
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="director" className="block text-gray-600">
                    Director
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Director"
                    id="director"
                    type="text"
                    placeholder="Director"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="writer" className="block text-gray-600">
                    Writer
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Writer"
                    id="writer"
                    type="text"
                    placeholder="Writer"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="country" className="block text-gray-600">
                    Country
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Country"
                    id="country"
                    type="text"
                    placeholder="Country"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="boxOffice" className="block text-gray-600">
                    BoxOffice
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="BoxOffice"
                    id="boxOffice"
                    type="text"
                    placeholder="BoxOffice"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="awards" className="block text-gray-600">
                    Awards
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Awards"
                    id="awards"
                    type="text"
                    placeholder="Awards"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="production" className="block text-gray-600">
                    Production
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="Production"
                    id="production"
                    type="text"
                    placeholder="Production"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="space-y-1 text-sm">
            <label htmlFor="notifyUsers" className="block text-gray-600">
              Notify Users
            </label>
            <input
              type="checkbox"
              name="notifyUsers"
              id="notifyUsers"
              onChange={(event) => {
                const isChecked = event.target.checked;
                setNotifyUsers(isChecked);

                if (isChecked) {
                  const title = event.target.form.Title.value; // Get movie title from the form
                  const actors = event.target.form.Actors.value; // Get actors from the form
                  const director = event.target.form.Director.value; // Get director from the form
                  //
                  sendNotification(
                    `Movie: ${title}, Actors: ${actors}, Director: ${director}`
                  );
                }
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-center font-medium text-white transition duration-200 rounded-sm-md bg-white/60 hover:bg-cyred"
          >
            {loading ? (
              // <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              <h2>Loading...</h2>
            ) : (
              'Save & Continue'
            )}
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-4 justify-center items-center mt-4 bg-sky-700/60 hover:bg-sky-700 w-1/2 mx-auto p-4 rounded-lg">
        <h3 className="rounded-md bg-sky-900 hover:bg-sky-800 px-4 py-1">
          Send Notification
        </h3>
        <div className=" flex flex-col gap-2 rounded-md bg-sky-900 hover:bg-sky-800">
          <input
            className="bg-sky-900 hover:bg-sky-800 rounded-lg p-2"
            onChange={(event) => {
              setNotification(event.target.value);
            }}
            type="text"
            name="notification"
            id="notification"
            placeholder="Type Notification"
          />
          <button
            className="px-4 py-1 bg-sky-900 hover:bg-sky-800 rounded-lg"
            onClick={sendNotification}
          >
            Lets Notify
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadMovie;
