const Contacts = () => {
  const addresses = [
    {
      name: 'Head Office',
      address: '123 Main Street',
      city: 'Dhaka Bangladesh',
      state: 'Mirpor Road',
      postalCode: '12345',
      country: 'Bangladesh',
    },
    {
      name: 'Brance',
      address: '456 Elm Avenue',
      city: 'China, Lorems',
      state: 'State 2',
      postalCode: '67890',
      country: 'China ',
    },
    {
      name: 'Control Room',
      address: '789 Oak Lane',
      city: 'trailo, USA',
      state: 'State 3',
      postalCode: '54321',
      country: 'USA',
    },
    {
      name: 'Helpline',
      address: '101 Pine Street',
      city: 'Nioh,china',
      state: 'Chinais Complex',
      postalCode: '98765',
      country: 'China',
    },
  ];

  return (
    <div className="flex flex-col w-[80%] mx-auto">
      {/* Address */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold mb-4 text-center">Our Office</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {addresses?.map((address, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{address.name}</h3>
              <p>
                {address.address}
                <br />
                {address.city}, {address.state} {address.postalCode}
                <br />
                {address.country}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <h1 className="text-2xl font-semibold mb-4 text-center">Contact Us</h1>
        <div className="mb-4">
          <label className="block font-medium mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-cyred rounded-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-cyred rounded-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Type Message..."
            className="w-full px-3 py-2 border border-cyred rounded-sm focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button className="bg-cyred text-white px-4 py-2 border-cyred rounded-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contacts;
