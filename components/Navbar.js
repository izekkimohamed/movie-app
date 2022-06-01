import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import create from "zustand";
import { NavbarStyles } from "../styles/NavbarStyles";
import SearchForm from "./Search";

export const useStore = create((set) => ({
  isOpen: false,
  closeMenu: () => set((state) => ({ isOpen: false })),
  openMenu: () => set((state) => ({ isOpen: true })),
}));

export default function Navbar() {
  const { isOpen, closeMenu, openMenu } = useStore((state) => state);
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
              <FaTimes onClick={() => closeMenu(false)} className="menu" />
            ) : (
              <FaBars onClick={() => openMenu(true)} className="menu" />
            )}
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/" passHref>
              <a className="navbar-item" onClick={() => closeMenu(false)}>
                Home
              </a>
            </Link>
            <Link href="/movies" passHref>
              <a className="navbar-item" onClick={() => closeMenu(false)}>
                Movies
              </a>
            </Link>
            <Link href="/tv" passHref>
              <a className="navbar-item" onClick={() => closeMenu(false)}>
                TV
              </a>
            </Link>
          </div>
          <SearchForm />
        </div>
      </div>
    </NavbarStyles>
  );
}
