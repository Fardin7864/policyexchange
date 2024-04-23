const WhatWeDoCard = ({ icon: Icon, title, details }) => {
  return (
    <div className="grid grid-cols-10 mb-5">
      <div className="h-16 w-full col-span-1 flex justify-center">{Icon}</div>

      <h3 className="text-justify col-span-9">
        <span className="font-semibold ">{title}</span>: {details}
      </h3>
    </div>
  );
};

export default WhatWeDoCard;
