
import React from 'react';
import Section from '../components/Section';
import { EVENT_TYPES } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32">
      <Section bg="bg-white">
        <div className="text-center mb-24">
          <span className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4 block font-bold">Curated Moments</span>
          <h2 className="text-4xl md:text-7xl serif mb-6 italic text-purple-950">Beyond Weddings</h2>
          <p className="text-stone-500 max-w-2xl mx-auto leading-relaxed text-lg">
            Beyond weddings, Eva’s Garden is an ideal setting for curated events and meaningful gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {EVENT_TYPES.slice(1).map((event, idx) => (
            <div key={idx} className="group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl shadow-purple-900/5">
              <img 
                src={event.image} 
                alt={event.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <h3 className="text-3xl serif mb-3">{event.title}</h3>
                <p className="text-sm text-purple-200/90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="bg-purple-50/50" className="text-center">
        <h2 className="text-4xl serif mb-12 text-purple-950">Have a unique idea?</h2>
        <p className="text-stone-600 mb-12 max-w-xl mx-auto italic leading-relaxed">Our expansive lawns and serene atmosphere are the perfect canvas for your specific vision.</p>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {['Birthdays', 'Anniversaries', 'Engagements', 'Ruracios', 'Corporate Events', 'Photoshoots'].map((tag) => (
            <span key={tag} className="px-8 py-3 bg-white rounded-full text-xs text-purple-800 border border-purple-100 font-bold tracking-widest hover:border-purple-300 hover:bg-purple-50 transition-all cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Events;
