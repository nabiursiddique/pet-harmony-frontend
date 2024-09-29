import { Image } from "@nextui-org/image";

const OurTeam = () => {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h1 className="lg:text-5xl text-3xl font-bold uppercase lg:mt-2 text-center text-teal-500">
            Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <Image
                src="https://pagedone.io/asset/uploads/1696238374.png"
                alt="Antonio image"
                className="w-40 h-40 rounded-full transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-teal-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-default-900 mb-2 capitalize transition-all duration-500 group-hover:text-teal-400 text-center">
              Nabiur Siddique
            </h4>
            <span className="text-default-500 transition-all duration-500 group-hover:text-default-900 text-center">
              Founder
            </span>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <Image
                src="https://pagedone.io/asset/uploads/1696238396.png"
                alt="Patricia image"
                className="w-40 h-40 rounded-full transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-teal-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-default-900 mb-2 capitalize transition-all duration-500 group-hover:text-teal-400 text-center">
              Angela Yu
            </h4>
            <span className="text-default-500 transition-all duration-500 group-hover:text-default-900 text-center">
              Co-Founder
            </span>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <Image
                src="https://pagedone.io/asset/uploads/1696238411.png"
                alt="Jerom image"
                className="w-40 h-40 rounded-full transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-teal-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-default-900 mb-2 capitalize transition-all duration-500 group-hover:text-teal-400 text-center">
              Nishat Iftekhar
            </h4>
            <span className="text-default-500 transition-all duration-500 group-hover:text-default-900 text-center">
              Chairman
            </span>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <Image
                src="https://pagedone.io/asset/uploads/1696238425.png"
                alt="Yasmine image"
                className="w-40 h-40 rounded-full transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-teal-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-default-900 mb-2 capitalize transition-all duration-500 group-hover:text-teal-400 text-center">
              Yasmine Tano
            </h4>
            <span className="text-default-500 transition-all duration-500 group-hover:text-default-900 text-center">
              CEO
            </span>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col items-center group">
            <div className="relative mb-6">
              <Image
                src="https://pagedone.io/asset/uploads/1696238446.png"
                alt="Martin image"
                className="w-40 h-40 rounded-full transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-teal-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-default-900 mb-2 capitalize transition-all duration-500 group-hover:text-teal-400 text-center">
              Zisan Islam
            </h4>
            <span className="text-default-500 transition-all duration-500 group-hover:text-default-900 text-center">
              Product Manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
