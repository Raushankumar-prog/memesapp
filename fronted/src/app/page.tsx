import MemeCard from '@/components/MemeCard';

const memes = [
  {
    imageSrc: '/memes/meme1.jpg',
    caption: 'When you realize it\'s Monday tomorrow...'
  },
  {
    imageSrc: '/memes/meme2.jpg',
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
