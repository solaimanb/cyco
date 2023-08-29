import React from 'react';

import { TbFidgetSpinner } from 'react-icons/tb';

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
]
// import { categories } from '../Categories/CategoriesData'

const AddNewMediaForm = ({
  handleSubmit,
  loading = false,
  handleImageChange,
  uploadButtonText,
}) => {
  
  return (
    <div className='w-full min-h-[calc(100vh-40px)] p-5 flex flex-col justify-center items-center text-white  rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
              Actors
              </label>
              <input
                className='w-full px-4 py-3 border text-gray-800 bg-white border-rose-300 focus:outline-rose-500 rounded-md '
                name='actors'
                id='actors'
                type='text'
                placeholder='Actors'
                required
              />
            </div>

            <div className='flex justify-between gap-2 '>
            <div className='space-y-1 text-sm w-full'>
      <label htmlFor='genre' className='block text-gray-600'>
             Movies Type
              </label>
              <select
                required
                className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md'
                name='genre'
              >
       {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
            <div className='space-y-1 text-sm'>
                               {/* <label htmlFor='thumbnail' className='block text-gray-600'> */}
                <label htmlFor='bedrooms' className='block text-gray-600'>
                Thumbnail
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='thumbnail'
                  id='thumbnail'
                  type='text'
                  placeholder='Thumbnail'
                  required
                />
              </div>c
            </div>
          
            </div>

            <div className='space-y-1'>
              <label htmlFor='source' className='block text-gray-600'>
              Source Link
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                name='source'
                id='source'
                type='text'
                placeholder='Source Link'
                required
              />
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='director' className='block text-gray-600'>
                Director
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='director'
                  id='director'
                  type='text'
                  placeholder='Director'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='writer' className='block text-gray-600'>
                Writer
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='writer'
                  id='writer'
                  type='text'
                  placeholder='Writer'
                  required
                />
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                Country
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='country'
                  id='country'
                  type='text'
                  placeholder='Country'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='boxOffice' className='block text-gray-600'>
                BoxOffice
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='boxOffice'
                  id='boxOffice'
                  type='text'
                  placeholder='BoxOffice'
                  required
                />
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='awards' className='block text-gray-600'>
                Awards
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='awards'
                  id='awards'
                  type='text'
                  placeholder='Awards'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='production' className='block text-gray-600'>
                Production
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='production'
                  id='production'
                  type='text'
                  placeholder='Production'
                  required
                />
              </div>
            </div>
          </div>
          
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                    onChange={(event)=>{handleImageChange(event.target.files[0])}}
                      className='text-sm cursor-pointer w-36 hidden text-gray-800 bg-white'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
 
                   {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='released' className='block text-gray-600'>
                Released
                </label>
                <input
                  className='w-full px-4 py-3 bg-white text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='released'
                  id='released'
                  type='number'
                  placeholder='Released'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='year' className='block text-gray-600'>
                Year
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='year'
                  id='year'
                  type='number'
                  placeholder='Year'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                Runtime
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='bedrooms'
                  id='bedrooms'
                  type='number'
                  placeholder='Runtime'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='bathrooms' className='block text-gray-600'>
                Language
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 bg-white border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='bathrooms'
                  id='bathrooms'
                  type='text'
                  placeholder='Language'
                  required
                />
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className=' block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 bg-white  border border-rose-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddNewMediaForm