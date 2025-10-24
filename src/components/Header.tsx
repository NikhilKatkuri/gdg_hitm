import React from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'

const Header = () => {
  const routes = [
    {
      title: "Home",
      route: "/"
    },
    {
      title: "Cloud Jams",
      route: "/"
    }, {
      title: "Creators",
      route: "/"
    }, {
      title: "Elite Members",
      route: "/"
    }, {
      title: "Community",
      route: "/"
    }
  ]
  const navs = ["About GDG", "Chapters", "Upcoming Events"]
  return (
    <header className="h-20 w-full bg-white/50 border-b border-gray-200">
      <Container className='h-full flex items-center justify-between'>
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center gap-3">
          {navs.map((item, index) => (
            <Link key={index} className={`text-sm text-neutral-500 hover:text-black transition-all ease-in-out ${index === 0 ? 'flex items-center gap-1' : ''}`} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
              {
                index === 0 && <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                  </svg>

                </span>
              }
            </Link>
          ))}
        </nav>
      </Container>
      
    </header>
  )
}

export default Header