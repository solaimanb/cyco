


const FeaturedMovo = () => {
    const imageUrls = [
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
        'https://i.ibb.co/TYp2Y5C/8-jpg.png',
      ];
    return (
       
        <>
      
        <div className="flex gap-10 mx-5 py-9">
         {imageUrls.map((image, index) => (
        <div key={index} className="w-[127px] h-[200px]">
          <img
            src={image}
            alt={`Kid ${index + 1}`}
            className=" cursor-pointer object-cover rounded hover:brightness-110"
          />
        </div>
      ))}
     </div>
        </>
    );
};

export default FeaturedMovo;