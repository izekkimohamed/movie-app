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
    background: radial-gradient(
      circle closest-side,
      hsl(var(--bg-clr) / 0.3) 30%,
      hsl(var(--bg-clr) / 0.5) 50%,
      hsl(var(--bg-clr) / 0.7)
    );

    pointer-events: none;
    z-index: 1;
  }
  .carousel.carousel-slider .control-arrow {
    position: absolute;
    top: 50%;
    width: 40px;
    height: 40px;
    background-color: hsl(var(--bg-clr));
    border-radius: 50%;
    margin-inline: 0.5em;
  }
  .control-dots .dot {
    background-color: hsl(var(--brand-clr));
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
    color: hsl(var(--text-clr) / 0.8);

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
  }
  .title {
    font-size: var(--font-lg);
    font-weight: 700;
    text-shadow: 0 0 0.5rem hsl(var(--bg-clr));
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    border-radius: 50px;
    overflow: hidden;
    border: 1.5px solid hsl(var(--brand-clr));
    a {
      font-family: inherit;
      font-size: var(--font-sm);
      font-weight: 500;
      padding: 0.5rem 2rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: hsl(var(--brand-clr));
        color: hsl(var(--bg-clr));
      }
      @media (max-width: 768px) {
        padding: 0.4rem 1rem;
      }
    }
  }
  .desc {
    max-width: clamp(60%, 50vw, 500px);
    font-weight: 400;
    text-shadow: 0 0 0.5rem hsl(var(--bg-clr));
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
