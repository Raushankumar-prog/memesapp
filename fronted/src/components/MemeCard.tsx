type MemeCardProps = {
  imageSrc: string;
  caption: string;
};

const MemeCard = ({ imageSrc, caption }: MemeCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <img src={imageSrc} alt={caption} className="w-full h-auto rounded-t-lg" />
      <p className="p-4 text-center text-gray-700">{caption}</p>
    </div>
  );
};

export default MemeCard;
