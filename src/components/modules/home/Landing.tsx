const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/Home-Banner.jpg')] bg-cover bg-center backdrop-blur-md">
      <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-black/50 backdrop-blur-sm">
        <div>
          <h1 className="text-7xl font-extrabold text-violet-400 ">
            Pet Harmony
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
