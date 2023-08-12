const MovoCard = ({ img }) => {
  return (
    <div className="w-ful h-80 md:w-[250px] lg:w-[280px] lg:h-[380px]">
      <img
        className="w-full h-full object-cover rounded hover:brightness-110"
        src={img}
        alt=""
      />
    </div>
  );
};

export default MovoCard;
