import React from 'react';

export const categories = [
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
// import { categories } from '../Categories/CategoriesData'

const AddNewMediaForm = ({
  handleSubmit,
  loading = false,
  handleImageChange,
  uploadButtonText,
}) => {


  return (
    <div className=" w-full flex flex-col bg-zinc-800 p-3 rounded-sm h-full">
      <div className="w-full">
        <div className="bg-cyred/60 w-full py-10 flex justify-center items-center rounded-sm">
          <p>Upload New Movies</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className=" w-full pt-10">
        <div className='flex flex-row gap-5 pb-6'>
          <div className="h-full">
          <div className="space-y-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 rounded-sm"
                name="title"
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
                      name="image"
                      id="image"
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
                  name="released"
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
                  name="year"
                  id="year"
                  type="number"
                  placeholder="Year"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Runtime
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                  name="bedrooms"
                  id="bedrooms"
                  type="text"
                  placeholder="Runtime"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Language
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                  name="bathrooms"
                  id="bathrooms"
                  type="text"
                  placeholder="Language"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                className=" block rounded-sm focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 bg-white/60  border border-cyred/60 focus:outline-rose-500 "
                name="description"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="">
          <div className="space-y-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Actors
              </label>
              <input
                className="w-full px-4 py-3 border text-white bg-white/60 border-cyred/60 focus:outline-rose-500 rounded-sm "
                name="actors"
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
                  name="genre"
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
                  {/* <label htmlFor='thumbnail' className='block text-gray-600'> */}
                  <label htmlFor="bedrooms" className="block text-gray-600">
                    Thumbnail
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                    name="thumbnail"
                    id="thumbnail"
                    type="text"
                    placeholder="Thumbnail"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="source" className="block text-gray-600">
                Source Link
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                name="source"
                id="source"
                type="text"
                placeholder="Source Link"
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
                  name="director"
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
                  name="writer"
                  id="writer"
                  type="text"
                  placeholder="Writer"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Country
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 bg-white/60 border border-cyred/60 focus:outline-rose-500 rounded-sm "
                  name="country"
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
                  name="boxOffice"
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
                  name="awards"
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
                  name="production"
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
        <div className='w-2/3 mx-auto'>
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
    </div>
  );
};

export default AddNewMediaForm;
