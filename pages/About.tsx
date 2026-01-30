
import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32">
      <Section bg="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4 block font-bold">The History</span>
            <h2 className="text-4xl md:text-6xl serif mb-8 leading-tight text-purple-950">About Eva’s Garden</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                Eva’s Garden is a beautifully landscaped outdoor venue located in Redhill, Kenya. Designed to blend nature with elegance, the venue offers expansive lawns, mature trees, and a calm atmosphere that allows every celebration to feel personal and intentional.
              </p>
              <p>
                Whether styled simply or transformed into a fully curated event, Eva’s Garden provides a blank canvas where unforgettable moments come to life.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200" 
              alt="Eva's Garden Landscaping" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-50 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-purple-100 rounded-3xl -z-0"></div>
          </div>
        </div>
      </Section>

      <Section bg="bg-purple-50/30" id="weddings">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-purple-400 text-xs uppercase tracking-[0.4em] mb-4 block font-bold">I Do Moments</span>
          <h2 className="text-4xl md:text-5xl serif mb-6 text-purple-950">Weddings at Eva’s Garden</h2>
          <p className="text-purple-600/80 italic">Timeless, intimate, and uniquely yours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-2xl border border-purple-100 shadow-sm">
            <h3 className="text-2xl serif mb-8 border-b border-purple-50 pb-4 text-purple-900">Perfect For:</h3>
            <ul className="space-y-5 text-stone-700">
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Garden ceremonies
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Wedding receptions
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Destination & local weddings
              </li>
              <li className="flex items-center gyyap-4">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Traditional & modern celebrations
              </li>
            </ul>
          </div>
          <div className="bg-purple-900 text-white p-10 rounded-2xl flex flex-col justify-center shadow-xl shadow-purple-900/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <h3 className="text-3xl serif mb-6 text-white italic relative z-10">Your Story, Your Way</h3>
            <p className="text-purple-100 leading-relaxed text-sm uppercase tracking-widest relative z-10 opacity-90">
             Preferred vendors listed in our website or subject to your vendors being in our listed list
            </p>
            <a 
              href="#/contact" 
              className="mt-10 self-start bg-white text-purple-900 px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-purple-50 transition-all shadow-lg relative z-10"
            >
              → Schedule a Site Visit
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
