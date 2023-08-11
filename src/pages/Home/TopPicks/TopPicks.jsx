import MovoCard from "../../../components/MovoCard/MovoCard";

const TopPicks = () => {
    const imageUrls = [
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
      ];
    return (
        <>
           <div className="grid grid-cols-5">
          
        {imageUrls.map((image, index) => (
          <MovoCard key={index} img={image}></MovoCard>
        ))}
     
        </div>
        </>
    );
};

export default TopPicks;