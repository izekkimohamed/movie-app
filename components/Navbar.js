import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScroller } from "../libs/scroller";
import { useStore } from "../store/navStore";
import { NavbarStyles } from "../styles/NavbarStyles";
import SearchForm from "./Search";

export default function Navbar() {
  const { isOpen, closeMenu, openMenu, displayList } = useStore(
    (state) => state,
  );
  const { scrollPercent, show } = useScroller();
  return (
    <NavbarStyles
      isOpen={isOpen}
      scrollPercent={scrollPercent}
      show={show}
      displayList={displayList}>
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
