import React from 'react'
import Container from './Container'

const Hero = () => {
  return (
     <main className="h-[calc(100vh-80px)] w-full relative">
          <div className="h-full w-full  absolute z-[-1] ">
               <div className="h-full w-full absolute z-1 bg-black/50"></div>
                 <iframe contextMenu='false' className="absolute top-0 left-0 w-full h-full object-cover" src="https://www.youtube.com/embed/jsCyUM6YY5s?autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=jsCyUM6YY5s&amp;controls=0&amp;showinfo=0&amp;autohide=1&amp;modestbranding=1" frameBorder="0" allow="autoplay; encrypted-media" ></iframe>
          </div>
          <Container className='h-[calc(100vh-80px)]  flex flex-col justify-center items-center'>
               <div className="flex flex-col gap-5 z-10 ">
                    <h1 className="text-5xl md:text-8xl font-bold text-white text-center max-w-6xl">Welcome to GDG on Campus HITM</h1>
                    <p className="text-lg text-white mx-auto">Join us for the latest in tech and innovation</p>
               </div>
          </Container>
     </main>
  )
}

export default Hero