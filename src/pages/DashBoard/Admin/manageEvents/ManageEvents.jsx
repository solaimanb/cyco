import React from 'react';

const ManageEvents = () => {
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
                <p className='font-semibold text-center my-3 textarea-accent'>Upcoming  Event </p>
                <div>
                    
                </div>
            </div>

        </section>
    );
};

export default ManageEvents;