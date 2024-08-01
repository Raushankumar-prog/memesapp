import MemeCard from '@/components/MemeCard';

const memes = [
  {
    imageSrc: 'https://th.bing.com/th/id/OIP.Tru2wBQ-314Xz8zcz_O1ygHaHa?rs=1&pid=ImgDetMain',
    caption: 'When you realize it\'s Monday tomorrow...'
  },
  {
    imageSrc: 'https://www.liveabout.com/thmb/AQhE56kYs-aBjI9EWHtlLZ2-J_Q=/2121x1414/filters:fill(auto,1)/hilariousmemes-5af5f3de6bf0690036a70c28.jpg',
    caption: 'When the code finally works after hours of debugging.'
  }
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {memes.map((meme, index) => (
        <MemeCard key={index} imageSrc={meme.imageSrc} caption={meme.caption} />
      ))}
    </div>
  );
}
