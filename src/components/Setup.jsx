import { FaCalendarCheck, FaTruck, FaPizzaSlice, FaUsers } from "react-icons/fa";

const Setup = () => {
  return (
    <div className="px-6 md:px-12 lg:px-[70px] lg:pr-[110px]">
      <section className="text-gray-600 body-font">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          How Pizzaiolo Work
        </h1>

        {/* Wrapper */}
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-start px-4 md:px-5 py-12 lg:py-24 gap-12">
          {/* Left side steps */}
          <div className="w-full md:w-1/2 lg:w-2/5 md:pr-10 md:py-6 lg:ml-8 mx-auto text-center lg:text-left">

            {/* Step 1 */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <FaCalendarCheck className="w-5 h-5" />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">
                  Book Your Event
                </h2>
                <p className="leading-relaxed">
                  Choose your pizza catering package and book your event.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <FaTruck className="w-5 h-5" />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">
                  We Bring the Setup
                </h2>
                <p className="leading-relaxed">
                  Our team arrives with a full pizza-making setup at your place.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <FaPizzaSlice className="w-5 h-5" />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">
                  Live Pizza Making
                </h2>
                <p className="leading-relaxed">
                  Guests enjoy making fresh pizzas with our guided setup.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <FaUsers className="w-5 h-5" />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-2xl text-gray-900 mb-1 tracking-wider">
                  Enjoy Fresh Pizza
                </h2>
                <p className="leading-relaxed">
                  We handle the cleanup while you enjoy with your guests.
                </p>
              </div>
            </div>
          </div>

          {/* Right-side video */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <video
              src="/pizza.mp4"
              className="
    w-full 
    max-w-[260px]   /* small screens → narrower → smaller height */
    md:max-w-[340px] /* medium screens → a bit larger */
    lg:max-w-[420px] /* large screens → full size */
    h-auto 
    rounded-lg 
    bg-black
  "
              controls
              autoPlay
              loop
              muted
              playsInline
            />


          </div>


        </div>
      </section>
    </div>
  )
}

export default Setup;
