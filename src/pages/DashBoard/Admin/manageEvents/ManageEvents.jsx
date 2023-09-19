import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import EventCard from './eventCard/EventCard';

const ManageEvents = () => {
  const { register, handleSubmit, setValue } = useForm({});
  const eventsContainerRef = useRef(null);

  const events = [
    {
      title: " Avenger team includes Iron Man",
      banner: "https://freepngimg.com/thumb/avengers/24591-2-avengers.png",
      relase: "21 Aug 2026"
    },
    {
      title: "Avengers Party",
      banner:
        "https://freepngimg.com/thumb/avengers/24455-4-avengers-transparent-thumb.png",
      relase: "21 Aug 2026"
    },

    {
      title: "Avengers Party",
      relase: "21 Aug 2026",
      banner:
        "https://freepngimg.com/thumb/avengers/24455-4-avengers-transparent-thumb.png",
    },
    {
      title: "Avengers Party",
      relase: "21 Aug 2026",
      banner:
        "https://freepngimg.com/thumb/avengers/24455-4-avengers-transparent-thumb.png",
    },
  ];
  const onSubmit = (data) => {

  }
  return (
    <section >
      {/* MANAGE Events HEADER */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Manage Events
        </p>
        <p datatype='add' id='add' onClick={() => {
          if (eventsContainerRef.current) {
            eventsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }} className='btn btn-outline rounded-lg textarea-info sm-mt-2' style={{ backgroundColor: 'transparent', transition: 'background-color 0.3s' }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#800000')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}>Add New Event</p>
      </div>

      {/* Total Events  */}
      <div>
        <p className='font-semibold text-center my-3 textarea-accent '>Upcoming  Event </p>
        <div className='grid md:grid-cols-4 m-2 '>
          {
            events.map(event => <EventCard event={event}></EventCard>)
          }
        </div>
        {/* Add Event  */}
        <div id='add-new-container' ref={eventsContainerRef}>
          <div className="">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Add New Event
            </h2>
            <form className="grid mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("title")}
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
                  {...register("banner")}
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
                  {...register("relase")}
                />
              </div>

              <button type='submit' className='btn btn-outline w-[80%] mx-auto textarea-info rounded-lg my-4 focus' style={{ backgroundColor: 'transparent', transition: 'background-color 0.3s' }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = '#800000')}
  onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}>
                      Add New Upcoming Event
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ManageEvents;