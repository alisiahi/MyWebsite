const BackGroundCircles = () => {
  return (
    <div
      data-aos="zoom-out"
      className="relative flex justify-center items-center mt-32"
    >
      <div className="absolute border border-primary rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-zinc-700 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-zinc-700 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border-4 border-primary rounded-full h-[650px] w-[650px] mt-52 opacity-20 animate-pulse" />
      <div className="absolute border border-zinc-700 rounded-full h-[800px] w-[800px] mt-52" />
    </div>
  );
};

export default BackGroundCircles;
