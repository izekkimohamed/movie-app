/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavbarStyles } from "../styles/NavbarStyles";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const scrollPercent = Math.ceil((scroll / innerHeight) * 100);
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setInnerHeight(window.innerHeight);
      setScroll(window.scrollY);
    });
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <NavbarStyles isOpen={isOpen} scrollPercent={scrollPercent} show={show}>
      <div className="container">
        <div className="nav-header">
          <div className="navbar-brand">
            <Link href="/" passHref>
              <a>M</a>
            </Link>
          </div>
          <div className="hamberger-menu">
            {isOpen ? (
              <FaTimes onClick={() => setIsOpen(false)} className="menu" />
            ) : (
              <FaBars onClick={() => setIsOpen(true)} className="menu" />
            )}
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/" passHref>
              <a className="navbar-item" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </Link>
            <Link href="/movies" passHref>
              <a className="navbar-item" onClick={() => setIsOpen(false)}>
                Movies
              </a>
            </Link>
            <Link href="/tv" passHref>
              <a className="navbar-item" onClick={() => setIsOpen(false)}>
                TV
              </a>
            </Link>
          </div>
          <div className="search">
            <label htmlFor="search">
              <FaSearch />
            </label>
            <input type="text" placeholder="Search" id="search" />
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;
