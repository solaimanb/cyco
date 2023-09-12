import React, { useContext, useState } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";
import { addNewMovie } from "../../../../api/addNewMovie";
import { imageUpload } from "../../../../api/imgUpload";
import { AuthContext } from "../../../../providers/AuthProvider";

// const socket = io('http://localhost:8080');
const socket = io.connect(`${import.meta.env.VITE_SERVER_URL}`);

const UploadMovie = () => {
  const [notification, setNotification] = useState("");
  const [notifyUsers, setNotifyUsers] = useState(false);

  const sendNotification = () => {
    socket.emit("send_notification", { notification: notification });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Notification sent successfully",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const { handleSubmit, register, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Poster');

  //handle from submit
  const onSubmit = async (data) => {
    setLoading(true);
    const Poster = data.Poster[0]; // Access the uploaded file
    const {
      Title,
      movieCode,
      Year,
      Genre,
      Rated,
      Released,
      Runtime,
      Trailer,
      Director,
      Writer,
      Actors,
      Plot,
      Language,
      Country,
      Awards,
      Thumbnail,
      imdbRating,
      imdbVotes,
    } = data;

    try {
      const posterUploadResponse = await imageUpload(Poster);
      const movieData = {
        Poster: posterUploadResponse.data.display_url,
        Title,
        movieCode,
        Year,
        Genre,
        Rated,
        Released,
        Runtime,
        Trailer,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Thumbnail,
        imdbRating,
        imdbVotes,
      };

      const movieUploadResponse = await addNewMovie(movieData);
      console.log(movieUploadResponse);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Movie uploaded successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err.message);
    }

    setLoading(false);
    setUploadButtonText('Upload Poster');
  };
  const handleImageChange = (event) => {
    setUploadButtonText(event.target.files[0].name);
    setValue('Poster', event.target.files);
  };

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold bor7er ml-2 px-smmd:px-5">
          Upload New Movie
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className=" w-full pt-10">
        <div className="md:flex justify-between items-start gap-4 pb-6">
          <div className="w-full space-y-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="Title" className="block text-gray-500">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                type="text"
                placeholder="Title"
                {...register('Title', { required: true })}
              />
            </div>

            <div className="flex space-x-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="movieCode" className="block text-gray-500">
                  Movie Code
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="number"
                  placeholder="Movie Code"
                  {...register('movieCode', { required: true })}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Year" className="block text-gray-500">
                  Year
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Year"
                  {...register('Year', { required: true })}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="Genre" className="block text-gray-500">
                  Genre
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Genre"
                  {...register('Genre', { required: true })}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Rated" className="block text-gray-500">
                  Rated
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="PG-13"
                  {...register('Rated', { required: true })}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="Released" className="block text-gray-500">
                  Released
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Released"
                  {...register('Released', { required: true })}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Runtime" className="block text-gray-500">
                  Runtime
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Runtime"
                  {...register('Runtime', { required: true })}
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="Trailer" className="block text-gray-500">
                Trailer
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                type="text"
                placeholder="Provide the movie's trailer link"
                {...register('Trailer', { required: true })}
              />
            </div>

            <div className="flex space-x-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="Director" className="block text-gray-500">
                  Director
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Director"
                  {...register('Director', { required: true })}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Writer" className="block text-gray-500">
                  Writer
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Writer"
                  {...register('Writer', { required: true })}
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="Actors" className="block text-gray-500">
                Actors
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                type="text"
                placeholder="Actors"
                {...register('Actors', { required: true })}
              />
            </div>
          </div>

          <div className="w-full space-y-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="Plot" className="block text-gray-500">
                Plot
              </label>
              <textarea
                className="w-full h-24 px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm focus:outline-rose-500"
                placeholder="Plot"
                {...register('Plot', { required: true })}
              ></textarea>
            </div>

            <div className=" p-3 bg-zinc-700 w-full m-a7to rounded-sm">
              <div className="px-5 py-3 relative border-4 border-dotted">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={handleImageChange}
                      className="text-sm cursor-pointer w-36 hidden text-gray-800 bg-zinc-800/50"
                      type="file"
                      name="Poster"
                      accept="image/*"
                      hidden
                    />
                    <div className="text-white border bg-zinc-800 border-gray-600 rounded-sm cursor-pointer p-1 px-3">
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="Thumbnail" className="block text-gray-500">
                Thumbnail
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                type="text"
                placeholder="Thumbnail"
                {...register('Thumbnail', { required: true })}
              />
            </div>

            <div className="flex space-x-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="Language" className="block text-gray-500">
                  Language
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Language"
                  {...register('Language', { required: true })}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Country" className="block text-gray-500">
                  Country
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="Country"
                  {...register('Country', { required: true })}
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="Awards" className="block text-gray-500">
                Awards
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                type="text"
                placeholder="Awards"
                {...register('Awards', { required: true })}
              />
            </div>

            <div className="flex space-x-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="imdbRating" className="block text-gray-500">
                  IMDB Rating
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="imdbRating"
                  {...register('IMDB Rating', { required: true })}
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="imdbVotes" className="block text-gray-500">
                  IMDB Votes
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-zinc-700 rounded-sm"
                  type="text"
                  placeholder="imdbVotes"
                  {...register('IMDB Votes', { required: true })}
                />
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
                  sendNotification(`Movie: ${title}, Actors: ${actors}, Director: ${director}`);
                }
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-center font-medium text-white transition duration-200 rounded-sm-md bg-cyred/60 hover:bg-cyred"
          >
            {loading ? <h2>Loading...</h2> : 'Save & Continue'}
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
    </section>
  );
};

export default UploadMovie;
