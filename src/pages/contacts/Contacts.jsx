import { NavLink } from "react-router-dom";


const Contacts = () => {
    const addresses = [
        {
            name: 'Location 1',
            address: '123 Main Street',
            city: 'City 1',
            state: 'State 1',
            postalCode: '12345',
            country: 'Country 1',
        },
        {
            name: 'Location 2',
            address: '456 Elm Avenue',
            city: 'City 2',
            state: 'State 2',
            postalCode: '67890',
            country: 'Country 2',
        },
        {
            name: 'Location 3',
            address: '789 Oak Lane',
            city: 'City 3',
            state: 'State 3',
            postalCode: '54321',
            country: 'Country 3',
        },
        {
            name: 'Location 4',
            address: '101 Pine Street',
            city: 'City 4',
            state: 'State 4',
            postalCode: '98765',
            country: 'Country 4',
        }
    ];
    


    return (
        <>
        <div className="flex relative  justify-center items-center h-56 bg-gray-100">
            <img
                src={"https://media.discordapp.net/attachments/1135626695613890600/1142115592686551091/contact-bg.jpg?width=1192&height=701"}
                alt="Contact Background"
                className="object-cover h-full w-full "
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
                <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
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