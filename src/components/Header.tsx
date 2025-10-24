"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const routes = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Cloud Jams",
      route: "/",
    },
    {
      title: "Creators",
      route: "/",
    },
    {
      title: "Elite Members",
      route: "/",
    },
    {
      title: "Community",
      route: "/",
    },
  ];
  const navs = ["About GDG", "Chapters", "Upcoming Events"];
  const [isAboutDisplayed, setIsAboutDisplayed] = React.useState(false);
  return (
    <header className="h-20 w-full bg-white/50 border-b border-gray-200 sticky top-0">
      <Container className="h-full flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="flex items-center gap-5 relative max-md:hidden">
          <button
            className={`text-sm cursor-pointer text-neutral-500 hover:text-black transition-all ease-in-out flex items-center gap-1`}
            onClick={() => setIsAboutDisplayed(!isAboutDisplayed)}
          >
            {navs[0]}
            {(
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
            
          </button>
          {isAboutDisplayed && (
            <div className="absolute top-12 bg-white items-start h-auto w-56 rounded-lg border border-gray-200 px-5 py-4 flex flex-col gap-3 shadow-lg origin-top transform transition-all duration-200 ease-out opacity-100 scale-100 animate-in slide-in-from-top-2">
              {routes.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className={`text-base text-neutral-500 hover:text-black transition-colors duration-200 ease-out ${index === 0 ? "flex items-center gap-1" : ""} hover:-translate-y-0.5 transform transition-transform`}
                    href={item.route}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          )}
          {navs.slice(1).map((item, index) => (
            <Link
              key={index}
              className={`text-sm text-neutral-500 hover:text-black transition-all ease-in-out ${index === 0 ? "flex items-center gap-1" : ""}`}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {item}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-black/5 border border-gray-200">
              {
                !true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  </svg>

              }
            </button>
          </div>
        </nav>
        <div className="flex items-center md:hidden">
          <button>
            {
              true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            }
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
