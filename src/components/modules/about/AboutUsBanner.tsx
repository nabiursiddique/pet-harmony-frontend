const AboutUsBanner = () => {
  return (
    <div className="relative w-full lg:h-[65vh] h-[40vh] flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/Banner.png)` }}
      ></div>
      <div className="absolute inset-0 bg-black  opacity-80"></div>
      <h1 className="absolute lg:text-8xl text-4xl font-extrabold text-teal-500 mt-2">
        About Us
      </h1>
    </div>
  );
};

export default AboutUsBanner;
