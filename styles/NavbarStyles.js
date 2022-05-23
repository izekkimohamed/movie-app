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
    scrollPercent > 15 // 15%
      ? "rgba(25, 26, 31, 0.99)"
      : isOpen
      ? "rgba(25, 26, 31, 0.99)"
      : "transparent"};
  box-shadow: ${({ isOpen, scrollPercent }) =>
    isOpen
      ? `10px 10px 10px rgba(0, 0, 0, 0.4)`
      : scrollPercent > 10
      ? `10px 10px 10px  rgba(0, 0, 0, 0.4)`
      : `0 0 1px rgba(0, 0, 0, 0.1)`};
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.2s ease-in-out;
  z-index: 100;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto;
  }
  .menu {
    animation: ${SlideIn} 0.5s backwards ease-out linear;
    font-size: clamp(1.5rem, 2vw, 2.5rem);
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
    margin: 0 auto;
    height: 100%;
    position: relative;
    padding: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem;
    }
    .navbar-brand {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media (max-width: 768px) {
        justify-content: center;
      }
      a {
        font-size: clamp(1.3rem, 2vw, 2.5rem);
        font-weight: 700;
        text-shadow: 0 0 0.5rem #000;
        color: #27d2c5;
        @media (max-width: 768px) {
          font-size: 1.5rem;
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
          font-size: clamp(1rem, 1vw, 1.5rem);
          font-weight: 700;
          text-shadow: 0 0 0.5rem #000;
          color: #fff;
          transition: all 0.2s ease-in-out;
          &:hover {
            color: #27d2c5;
          }
          @media (max-width: 768px) {
            font-size: 1rem;
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
      background-color: rgba(255, 255, 255, 0.3);
      color: #fff;
      border-radius: 50px;

      input {
        all: unset;
        ::placeholder {
          color: #f5f5f5;
        }
      }
      input -internal-autofill-selected {
        background-color: #f5f5f5;
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
        font-size: 1.2em;
        font-weight: bolder;
      }
    }
  }
`;
