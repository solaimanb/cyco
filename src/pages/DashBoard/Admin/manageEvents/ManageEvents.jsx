import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { addNewEvent } from '../../../../api/addNewEvent';
import { removEvent } from '../../../../api/removeEvent';
import Loading from '../../../../components/loading/Loading';
import useEvents from '../../../../hooks/useEvents';
import EventCard from './eventCard/EventCard';

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

  // Remove Element From Event List from Backend
  const handleRemoveEvent = async (id) => {
    console.log(id);
    try {
      const EventRemove = await removEvent(id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Event successfully Removed',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (data) => {
    const event = {
      title: data.title,
      banner: data.banner,
      relase: data.relase,
    };
    console.log(event);
    try {
      const EventAdded = await addNewEvent(event);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Event Added successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* MANAGE EVENT HEADER */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Manage Events
        </p>

        {/* ADD EVENT BTN */}
        <button
          datatype="add"
          id="add"
          onClick={openModal}
          className="flex flex-row items-center gap-2 border border-zinc-700 bg-zinc-800 rounded-sm w-fit p-2"
        >
          <FaPlus className="text-cyred" />
          <h3 className="text-sm">Add New Event</h3>
        </button>
      </div>

      {/* TOTAL EVENTS  */}
      <div>
        <p className="border-b pb-2 font-semibold text-center my-3 textarea-accent ">
          Upcoming Events..{' '}
        </p>
        <div className="grid md:grid-cols-4 m-2 gap-2">
          {Events.map((event) => (
            <EventCard
              handleRemoveEvent={handleRemoveEvent}
              event={event}
            ></EventCard>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-center z-50 mt-12">
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h2 className="text-xl border-b pb-2 font-semibold mb-4 text-center">
              Add Upcoming Event
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-[80%] mx-auto">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Title
                </label>
                <input
                  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:border-blue-300"
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
                  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:border-blue-300"
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
                  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:border-blue-300"
                  type="date"
                  required
                  {...register('relase')}
                />
              </div>

              <button
                type="submit"
                className="btn bg-sky-900 capitalize w-full rounded-md my-4"
              >
                Add Event
              </button>
            </form>

            <button
              className="btn bg-cyred/60 capitalize w-full mt-2 rounded-md"
              onClick={closeModal}
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
