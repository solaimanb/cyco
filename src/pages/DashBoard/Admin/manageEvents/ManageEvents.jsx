import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import EventCard from './eventCard/EventCard';
import { addNewEvent } from '../../../../api/addNewEvent';
import Swal from 'sweetalert2';
import useEvents from '../../../../hooks/useEvents';
import Loading from '../../../../components/loading/Loading';
import { useState } from 'react';

const ManageEvents = () => {
  const [Events, loading] = useEvents();
  console.log(Events);
  const { register, handleSubmit, setValue } = useForm({});
  const eventsContainerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const events = [
    {
      title: ' Avenger team includes Iron Man',
      banner: 'https://freepngimg.com/thumb/avengers/24591-2-avengers.png',
      relase: '21 Aug 2026',
    },
    {
      title: 'Avengers Party',
      banner:
        'https://freepngimg.com/thumb/avengers/24455-4-avengers-transparent-thumb.png',
      relase: '21 Aug 2026',
    },

    {
      title: 'Avengers Party',
      relase: '21 Aug 2026',
      banner:
        'https://freepngimg.com/thumb/avengers/24455-4-avengers-transparent-thumb.png',
    },
    {
      title: 'Avengers Party',
      relase: '21 Aug 2026',
      banner:
        'https://freepngimg.com/thumb/avengers/24455-4-avengers-transparent-thumb.png',
    },
  ];
  const onSubmit = async (data) => {
    const event = { title: data.title, banner: data.banner, relase: data.relase }
    console.log(event);
    try {
      const EventAdded = await addNewEvent(event)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Event Added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
    }
    catch (err) {
      console.log(err);
    }
  }
  if (loading) {
    return <Loading />
  }

  return (
    <section>
      {/* MANAGE Events HEADER */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Manage Events
        </p>
        <p datatype='add' id='add' onClick={openModal} className='btn btn-outline rounded-lg textarea-info sm-mt-2' style={{ backgroundColor: 'transparent', transition: 'background-color 0.3s' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#800000')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}>Add New Event</p>
      </div>

      {/* Total Events  */}
      <div>
        <p className='font-semibold text-center my-3 textarea-accent '>Upcoming  Event </p>
        <div className='grid md:grid-cols-4 m-2 '>
          {
            Events.map(event => <EventCard event={event}></EventCard>)
          }

        </div>
        {/* Add Event 
        <div id="add-new-container" ref={eventsContainerRef}>
          <div className="">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Add New Event
            </h2>
            <form className="grid mx-auto" onSubmit={handleSubmit(onSubmit)}>


              <button type='submit' className='btn btn-outline w-[80%] mx-auto textarea-info rounded-lg my-4 focus' style={{ backgroundColor: 'transparent', transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#800000')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}>
                Add New Upcoming Event
              </button>
            </form>
          </div>
        </div> */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-center z-50 mt-12">
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Add</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Form fields here */}
              <div className="w-[80%] mx-auto">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Title
                </label>
                <input
                  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  required
                  {...register('title')}
                />
              </div>
              <div className="w-[80%] mx-auto my-2">
                <label
                  htmlFor="banner"
                  className="block text-sm font-medium text-gray-700"
                >
                  Banner Image(share Image Link)
                </label>
                <input
                  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                  type="text"
                  required
                  {...register('banner')}
                />
              </div>

              <div className="w-[80%] mx-auto my-2">
                <label
                  htmlFor="Date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Date
                </label>
                <input
                  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                  type="date"
                  required
                  {...register('relase')}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline w-full textarea-info rounded-lg my-4 focus"
                style={{
                  backgroundColor: 'transparent',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#800000')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
              >
                Add New Upcoming Event
              </button>
            </form>
            <button
              className="btn btn-outline w-full mt-2 textarea-info rounded-lg"
              onClick={closeModal} // Close the modal when this button is clicked
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageEvents;
