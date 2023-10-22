import styled, { keyframes } from "styled-components";

const SlideIn = keyframes`
    0% {
      opacity: 0;
      transform: translateZ(-100%);
    }
    100% {
      opacity: 1;
      transform: translateZ(0);
    }

`;

export const NavbarStyles = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(100vw, 100vw, 1660px);
  height: 5rem;
  background-color: ${({ scrollPercent, isOpen }) =>
    scrollPercent > 5 // 5%
      ? "hsl(var(--bg-clr))"
      : isOpen
      ? "hsl(var(--bg-clr))"
      : "transparent"};
  box-shadow: ${({ isOpen, scrollPercent }) =>
    isOpen
      ? `10px 10px 10px hsl(var(--bg-clr) / 0.4)`
      : scrollPercent > 10
      ? `10px 10px 10px  hsl(var(--bg-clr) / 0.4)`
      : `0 0 1px hsl(var(--bg-clr) / 0.1)`};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.2s ease-in-out;
  z-index: 100;

  @media (max-width: 768px) {
    height: auto;
  }
  .menu {
    animation: ${SlideIn} 0.5s backwards ease-out linear;
    font-size: var(--font-md);
    @media (min-width: 769px) {
      display: none; // hide the menu on desktop
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1660px;
    /* margin: 0 auto; */
    height: 100%;
    position: relative;
    padding: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
    }
  }
  .navbar-brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 768px) {
      justify-content: center;
    }
    a {
      font-size: var(--font-lg);
      font-weight: 700;
      text-shadow: 0 0 0.5rem hsl(var(--bg-clr));
      color: hsl(var(--brand-clr));
      @media (max-width: 768px) {
        font-size: var(--font-md);
      }
    }
    .navbar-burger {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .navbar-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 95%;
    animation: ${SlideIn} 0.5s ease-in-out;
    @media (max-width: 768px) {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      flex-direction: column;
    }
    .navbar-end {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
      }
      a {
        font-size: var(--font-md);
        font-weight: 700;
        text-shadow: 0 0 0.5rem hsl(var(--bg-clr));
        color: hsl(var(--text-clr));
        transition: all 0.2s ease-in-out;
        &:hover {
          color: hsl(var(--brand-clr));
        }
        @media (max-width: 768px) {
          font-size: var(--font-sm);
        }
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5em 1em;
    background-color: hsl(var(--text-clr) / 0.7);
    color: hsl(var(--bg-clr));
    border-radius: ${({ displayList }) =>
      !displayList ? "10px 10px" : "10px 10px 0 0"};
    position: relative;
  }
  .search-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border-radius: 10px 10px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    li {
      padding: 0.2rem 0.5rem;
      background-color: hsl(var(--bg-clr));

      &:nth-child(odd) {
        background-color: hsl(var(--bg-clr) / 0.9);
      }
    }
    .details {
      width: 70%;
      p {
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .see-all {
      a {
        display: grid;
        place-items: center;
      }
    }
    .search-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.5em 1em;
      border-bottom: 1px solid hsl(var(--text-clr));
    }
  }

  .img-container {
    width: 30%;
    aspect-ratio: 1;
    position: relative;
  }
  .search-list-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: hsl(var(--text-clr));
    font-size: var(--font-sm);
  }
  input {
    all: unset;
    font-size: var(--font-sm);
    font-weight: 500;
    ::placeholder {
      color: hsl(var(--bg-clr) / 0.5);
      font-size: var(--font-sm);
      font-weight: 500;
    }
  }
  input -internal-autofill-selected {
    font-size: var(--font-md);
    font-weight: 500;
    background-color: hsl(var(--text-clr));
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  input[data-autocompleted] {
    background-color: transparent !important;
  }
  label {
    display: grid;
    place-items: center;
  }
  svg {
    font-size: var(--font-md);
    font-weight: bolder;
  }
`;
