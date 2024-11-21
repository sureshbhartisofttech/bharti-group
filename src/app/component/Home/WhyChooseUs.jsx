import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <div className="relative bg-[#282C4B] text-white overflow-hidden my-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Welcome to R Bharti Enterprises</h2>

            <ul className="space-y-4">
              {['At R Bharti Enterprises , we are dedicated to excellence across diverse sectors, each crafted to address distinct needs and opportunities in today`s dynamic landscape. ', 'Our portfolio encompasses 7  companies as Bharti share market, Bharti resort , Bharti business consultancy, Bharti softtech, Bharti digital marketing, Bharti realty and Bharti business group franchise.', 'Which includes, luxury real estate, financial education, business consultancy, adventure resorts,stock market courses, and technology-driven business solutions.', 'Prof. Ravindra Bharti', 'Founder & CMD R Bharti Enterprises'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-xl text-[#CED1E6]">{item}</span>
                </li>
              ))}
            </ul>

            {/* <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#593FFB] to-[#fb3f6c] rounded-full text-white font-bold shadow-lg hover:shadow-xl transition duration-300">
              Get Started
            </button> */}
          </div>

          <div className="relative" style={{ height: '700px' }}>
            <div className="relative h-full w-full">
              <Image
                src="/RBsir.jpg"
                alt="Business professional"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="absolute top-1/2 -left-12 w-24 h-24 bg-[#F07922] rounded-full opacity-60 transform -translate-y-1/2" />
            <div className="absolute bottom-12 -right-12 w-32 h-32 bg-[#593FFB] rounded-full opacity-40" />
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <svg className="absolute left-0 bottom-0 w-full h-auto" viewBox="0 0 1400 552" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 156.261L593.032 325.005L1400 552H0V156.261Z" fill="white" fillOpacity="0.02" />
        <path d="M1400 44.3821L1130.59 260.831L764 552H1400V44.3821Z" fill="white" fillOpacity="0.02" />
      </svg>
    </div>
  );
}