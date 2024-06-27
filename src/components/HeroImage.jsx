import React from 'react'
import brickwall from '../../public/images/brickwall.jpg'
import Image from 'next/image'

export default function HeroImage() {
  return (
    <div className='h-[2/3] w-full'>
            <section className="relative w-full h-[50vh] bg-cover bg-center bg-[url('/images/brickwall.jpg')]">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
        <div className="space-y-6">
          <h1 className="z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white">John Seafood</h1>
        </div>
      </div>
    </section>
    </div>
  )
}
