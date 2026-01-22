import { useEffect, useRef } from 'react';
import { Twitter, Users } from 'lucide-react';

function App() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0;
      }
      carousel.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const memes = [
    { image: "/johnny_pfp_-_2026-01-21t222637.822.png" },
    { image: "/johnny_pfp_-_2026-01-21t222917.916.png" },
    { image: "/johnny_pfp_-_2026-01-21t223227.463.png" },
    { image: "/johnny_pfp_-_2026-01-21t223434.123.png" },
  ];

  const duplicatedMemes = [...memes, ...memes];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center mb-12">
          <img
            src="/image.png"
            alt="$og logo"
            className="w-48 h-48 mb-8 object-contain"
          />
          <p className="text-2xl text-gray-700 mb-2">bid the og</p>
          <p className="text-xl text-gray-600 max-w-2xl">
            the original is always better. the original is always more valuable.
            when in doubt, bid the og.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://x.com/imakuant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            <Twitter size={24} />
            <span>twitter</span>
          </a>
          <a
            href="https://x.com/i/communities/2014268767136837925"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            <Users size={24} />
            <span>community</span>
          </a>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">live chart</h2>
          <div className="w-full bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://dexscreener.com/solana/?embed=1&theme=light&trades=0&info=0"
              className="w-full h-[600px] border-0"
              title="DexScreener Chart"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">og memes</h2>
        </div>
      </div>

      <div className="overflow-hidden relative w-full pb-12">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedMemes.map((meme, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={meme.image}
                alt="og meme"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
