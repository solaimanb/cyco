
const MovoCard = ({img}) => {
    return (
        <div className="w-full md:w-[127px] h-[200px]">
            <img className="w-full h-full object-cover rounded hover:brightness-110" src={img} alt="" />
        </div>
    );
};

export default MovoCard;