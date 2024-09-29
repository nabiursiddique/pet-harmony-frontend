import { Button } from "@nextui-org/button";

const OurLocation = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contact Us Section */}
        <div className="mb-7">
          <h1 className="lg:text-5xl text-3xl font-extrabold uppercase lg:mt-2 text-center text-teal-500">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-8 mt-12">
          <div className="flex-1 p-8 rounded-lg shadow-lg border border-teal-600">
            <form>
              <div className="mb-4">
                <label
                  className="block text-default-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-default-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-default-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-default-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-default-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-default-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <Button variant="solid" className="text-white bg-teal-600">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-manrope text-3xl font-extrabold text-default-600">
              Get In Touch
            </h3>
            <p className="mt-4 text-default-600">
              If you have any questions or need further information, feel free
              to contact us.
            </p>
            <p className="mt-4 text-default-600">
              <strong className="text-teal-600">Address:</strong> Par Naogaon,
              Naogaon, Rajshahi, Bangladesh
            </p>
            <p className="mt-4 text-default-600">
              <strong className="text-teal-600">Phone:</strong> (123) 456-7890
            </p>
            <p className="mt-4 text-default-600">
              <strong className="text-teal-600">Email:</strong>{" "}
              nabiur@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
