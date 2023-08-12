import MovoCard from '../../../components/MovoCard/MovoCard';

const MostRecent = () => {
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
    <div className="w-full flex flex-wrap gap-1">
      {imageUrls.map((image, index) => (
        <MovoCard key={index} img={image}></MovoCard>
      ))}
    </div>
  );
};

export default MostRecent;
