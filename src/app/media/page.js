import Pictures from "./Pictures";


const media = () => {

  return (
    <div className=" max-w-[1440px] mx-auto">
      <div className=" pt-28">
        <h3 className=" text-[#00263a] text-center text-5xl font-bold  pt-10 pb-10 ">
          Media
        </h3> 
        <Pictures/>
      </div>
    </div>
  );
};

export default media;
