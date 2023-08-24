import { NavLink } from 'react-router-dom';
import contactImg from '/contact-img.jpg';

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
    <>
      <div className="flex relative rounded-lg  justify-center items-center h-56 bg-gray-100">
        <img
          src={contactImg}
          alt="Contact Background"
          className="object-cover h-full w-full rounded-lg "
        />
        <div className="absolute top-1/2 right-1/2 text-red-800">
          <NavLink
            id="nav"
            to="/"
            aria-label="Home"
            title="Home"
            className={({ isActive }) =>
              isActive ? 'bg-[#800000]' : 'default'
            }
          >
            Home
          </NavLink>
        </div>
      </div>
      <div className="flex p-8">
        {/* Left Side */}
        <div className="w-1/2 pr-8">
          <h1 className="text-2xl font-semibold mb-4 text-center">Contact Us</h1>
          <div className="mb-4">
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Submit
          </button>
        </div>
        {/* Right Side */}
        <div className="w-1/2 pl-8">
          <h1 className="text-2xl font-semibold mb-4 text-center">Our Office</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {addresses?.map((address, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-semibold mb-3">{address.name}</h3>
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
      </div>
    </>
  );
};

export default Contacts;
