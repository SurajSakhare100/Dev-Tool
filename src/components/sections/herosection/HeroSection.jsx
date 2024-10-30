import React from 'react';
import { Upload, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='scale-110'>
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
           <div className="mt-5 max-w-xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Convert and Format JSON with Ease!
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Simple, fast, and reliable JSON tools for developers and data analysts.
              </p>
            </div>

            <div className="mt-8 gap-3 flex justify-center">
              <Link to={'/json-to-csv'} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full py-3 px-4 transition-transform transform hover:scale-105">
                <span>Manage Your JSON Now</span>
                <ArrowRight className="shrink-0 ml-1" />
              </Link>
            </div>
          </div>
         
        </div>
        
      </div>
      <div className='absolute bottom-20 left-20'>
          <a 
            href="https://www.producthunt.com/posts/json-tools?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-json-tools" 
            target="_blank" 
            rel="noopener noreferrer"
            className=''
        >
            <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=555168&theme=light" 
                alt="JSON Tools - Manage Your JSON Effortlessly | Product Hunt" 
                style={{ width: '250px', height: '54px' }} 
                width="250" 
                height="54" 
            />
        </a>
          </div>
    </div>
  );
}

export default HeroSection;
