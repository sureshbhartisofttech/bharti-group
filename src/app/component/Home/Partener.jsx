import Image from 'next/image'
import React from 'react'

function Partener() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-8">
      <h2 className="lg:text-6xl text-4xl font-bold my-4 text-center text-white">Our Partners</h2>
      <div className="container mx-auto py-8 px-16 md:px-32 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
          <img src="/pudhari.jpg" alt="Logo 1" className="h-12 w-auto" />
        </div>
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
          <img src="/saam.jpg" alt="Logo 2" className="h-12 w-auto" />
        </div>
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
          <img src="/sakal.jpg" alt="Logo 3" className="h-12 w-auto" />
        </div>
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
          <img src="/mirchi.jpg" alt="Logo 4" className="h-12 w-auto" />
        </div>
        <div className="bg-white py-4 px-2 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
          <img src="/bigfm.jpg" alt="Logo 5" className="h-12 w-auto" />
        </div>
      </div>
    </div>

  )
}

export default Partener