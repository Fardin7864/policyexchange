import Pictures from "./Pictures";

const media = () => {
  return (
    <div className=" ">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/Cover.jpg')",
          width: "full",
          height: "400px",
        }}
      >
        <div className="w-[100%] absolute h-[400px] bg-gray-900 opacity-30"></div>
        <div className=" flex justify-center h-full">
          <h3 className=" text-white text-center text-5xl absolute font-bold pt-52 opacity-100 z-50">
            Media
          </h3>
        </div>
        {/* content */}
      </div>
      <div className=" max-w-[1440px] mx-auto mt-5">
      <Pictures />
      </div>
    </div>
  );
};

export default media;
