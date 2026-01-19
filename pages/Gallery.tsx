
import React, { useState } from 'react';
import Section from '../components/Section';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'empty' | 'setup' | 'aerial' | 'sunset'>('all');

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'empty', label: 'The Canvas (Empty)' },
    { id: 'setup', label: 'Wedding Setups' },
    { id: 'aerial', label: 'Bird\'s Eye View' },
    { id: 'sunset', label: 'Sunset Glow' },
  ];

  return (
    <div className="pt-20 md:pt-32">
      <Section bg="bg-white">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4 block font-bold">Visual Story</span>
          <h2 className="text-4xl md:text-6xl serif mb-6 text-purple-950">Moments at Eva’s Garden</h2>
          <p className="text-purple-600/60 italic mb-12 italic">"A blank canvas transformed into unforgettable celebrations."</p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 border-b border-purple-50 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`text-[10px] uppercase tracking-[0.3em] pb-3 transition-all border-b-2 font-bold ${
                  filter === cat.id ? 'border-purple-800 text-purple-900' : 'border-transparent text-purple-300 hover:text-purple-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="break-inside-avoid overflow-hidden rounded-2xl bg-purple-50 group relative">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-auto object-cover hover:opacity-90 transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 border border-purple-100/50 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
