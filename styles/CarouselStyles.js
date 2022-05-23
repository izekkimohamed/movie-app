import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const CarouselStyles = styled(Carousel)`
  .carousel {
    height: clamp(40vh, 60vw, 75vh);
  }

  .slider {
    height: 100%;
    li {
      height: 100%;
    }
  }
  .slider-wrapper {
    height: 100%;
  }
  .slider-item {
    height: 100%;
    margin: 0 auto;
    user-select: none;
    position: relative;
    img {
      max-width: 100%;
      min-height: 100%;
    }
  }
  .slider-item::after {
    position: absolute;
    inset: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(25, 26, 31, 0.8) 50%,
      rgba(25, 26, 31, 0.1) 80%,
      rgba(25, 26, 31, 0.8) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
  .carousel.carousel-slider .control-arrow {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background-color: rgba(0 0 0 / 90%);
    border-radius: 50%;
    margin-inline: 0.5em;
  }
  .control-dots .dot {
    background-color: #27d2c5;
  }
  .content {
    max-width: 1660px;
    margin: 0 auto;
    z-index: 12;
  }
  .slide-caption {
    padding: 1rem;
    position: absolute;
    width: clamp(50%, 40vw, 500px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: left;
    gap: 0.5rem;
    color: #bbb;

    z-index: 2;
    a {
      color: inherit;
    }
    @media (max-width: 768px) {
      width: 100%;
      gap: 0.1rem;
    }
  }
  .details {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
  }
  .title {
    font-size: clamp(1.3rem, 2vw, 2.5rem);
    font-weight: 700;
    text-shadow: 0 0 0.5rem #000;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    border-radius: 50px;
    overflow: hidden;
    border: 1.5px solid #27d2c5;
    a {
      color: #111;
      font-family: inherit;
      font-size: clamp(1rem, 1.2vw, 1.2rem);
      font-weight: 500;
      padding: 0.5rem 2rem;
      transition: all 0.2s ease-in-out;
      color: #f4f4f4;
      &:hover {
        background-color: #27d2c5;
        color: #111;
      }
      @media (max-width: 768px) {
        padding: 0.4rem 1rem;
      }
    }
  }
  .desc {
    max-width: clamp(60%, 50vw, 500px);
    font-size: clamp(1rem, 1.3vw, 1.3rem);
    font-weight: 400;
    text-shadow: 0 0 0.5rem #000;
    color: #fff;
    transition: all 0.2s ease-in-out;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    .desc {
      display: none;
    }
  }
`;
