import React from 'react';
import EventCard from './eventCard/EventCard';

const ManageEvents = () => {
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
    return (
        <section >
            {/* MANAGE Events HEADER */}
            <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
                    Manage Events
                </p>
                <p className='btn btn-outline rounded-lg textarea-info sm-mt-2'>Add New Event</p>
            </div>

            {/* Total Events  */}
            <div>
                <p className='font-semibold text-center my-3 textarea-accent '>Upcoming  Event </p>
                <div className='grid md:grid-cols-2 m-2 '>
                    {
                        events.map(event=> <EventCard event={event}></EventCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default ManageEvents;