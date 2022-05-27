import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
    
  }
  
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export const DetailsHeroStyles = styled.div`
  background: linear-gradient(
      to right,
      ${({ color }) => color && `${color}`} 30%,
      ${({ color }) => color && `${color}CC`} 70%,
      ${({ color }) => color && `${color}`} 100%
    ),
    url(${({ src }) => `${src}`});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding: 5rem 0 2rem 0;
  @media (max-width: 768px) {
    padding: 4rem 0 0 0;
  }
  .container {
    max-width: 1660px;
    margin: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);

    border-radius: 1rem;
    overflow: hidden;
    @media (min-width: 1660px) {
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 1rem;
      border-radius: 0;
      margin: 0;
      /* background-color: transparent; */
      .poster {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #fff;
      text-shadow: 1px 1px 10px #111;
      margin-left: 3rem;
      @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
      }
      .title {
        display: flex;
        align-items: center;
        gap: 2rem;
        p {
          font-size: clamp(1.5rem, 2.5vw, 2.5rem);
          font-weight: 700;
          color: #fff;
        }
      }
      .description {
        p {
          max-width: 80%;
        }
        @media (max-width: 768px) {
          p {
            max-width: 100%;
          }
        }
      }
      .details {
        display: grid;
        grid-template-columns: 0.5fr 3fr;
        gap: 0.5rem;
        font-size: clamp(0.9rem, 1.2vw, 1.2rem);
        p {
          opacity: 0.7;
        }
        @media (max-width: 768px) {
          grid-template-columns: 1fr 3fr;
        }
      }
    }
  }
  svg {
    width: 50px;
  }
  .play-icon {
    all: unset;
    font-size: clamp(2.5rem, 3.5vw, 3.5rem);
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
    color: #f6f6f6;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      background-color: rgba(255, 255, 255, 0.3);
      border: 2px solid #fff;
      border-radius: 100px;
      animation: ${pulse} 2.5s infinite cubic-bezier(0.11, 1.3, 0.26, 1.35);
    }
    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      background-color: rgba(255, 255, 255, 0.3);
      border: 2px solid #fff;
      border-radius: 100px;
      animation: ${pulse} 2.5s infinite cubic-bezier(0.11, 1.3, 0.26, 1.35);
    }

    svg {
      cursor: pointer;
      z-index: 2;
    }
  }
`;
