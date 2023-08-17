import React from 'react';

const Payment = () => {

    // Function to format the date as "MMM DD, YYYY"
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const currentDate = formatDate(new Date());
    return (
        <div>
            <section className="flex flex-col justify-center antialiased text-gray-600 min-h-screen p-4">
                <div className="h-full">
                    {/* Card */}
                    <div className="max-w-[360px] mx-auto">
                        <div className="bg-white shadow-lg rounded-lg mt-9">
                            {/* Card header */}
                            <header className="text-center px-5 pb-5">
                                <img className='avatar w-[30%]' src="https://www.thegrowshopllc.com/product_images/uploaded_images/cyco.jpg" alt="" />

                                {/* Card name */}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Invoice from Cyco Inc.</h3>
                                <div className="text-sm font-medium text-gray-500">Invoice #00223</div>
                            </header>
                            {/* Card body */}
                            <div className="bg-gray-100 text-center px-5 py-6">
                                <div className="text-sm mb-6">
                                    <strong className="font-semibold">$2.700</strong> due {currentDate}                            </div>
                                <form class="space-y-3">
                                    <div class="flex shadow-sm rounded">
                                        <div class="flex-grow">
                                            <input name="card-nr" class="text-sm text-gray-800 bg-white rounded-l leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-indigo-300 focus:ring-0" type="text" placeholder="Card Number" aria-label="Card Number" />
                                        </div>
                                        <div class="flex-none w-[4.8rem]">
                                            <input name="card-expiry" class="text-sm text-gray-800 bg-white leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-indigo-300 focus:ring-0" type="text" placeholder="MM/YY" aria-label="Expiration" />
                                        </div>
                                        <div class="flex-none w-[3.5rem]">
                                            <input name="card-cvc" class="text-sm text-gray-800 bg-white rounded-r leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-indigo-300 focus:ring-0" type="text" placeholder="CVC" aria-label="CVC" />
                                        </div>
                                    </div>
                                    <button type="submit" class="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                x-show={open}
                className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
                x-data={{ open: true }}
            >

            </div>
        </div>
    );
};

export default Payment;