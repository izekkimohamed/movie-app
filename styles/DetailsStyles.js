import styled from "styled-components";

export const DetailsStyles = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
  max-width: 1660px;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 10rem;
  position: relative;
  h1 {
    font-size: var(--font-xl);
    font-weight: 700;
    margin-bottom: 1rem;
    grid-column: span 2;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 5rem;
    .cast-list {
      width: 100%;
      grid-column: span 3;
    }
    h1 {
      grid-column: span 1;
    }
  }
  .cast {
    position: absolute;
    top: 0;
  }

  .cast-list {
    display: flex;
    gap: 1rem;
    overflow: scroll hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 100%;
    margin-top: 3.5rem;
    padding-bottom: 2rem;
  }
  .cast-item {
    min-width: 150px;
    width: 180px;
    margin-bottom: 1rem;
    border-radius: 1rem;
    overflow: hidden;

    box-shadow: 1px 1px 10px 1px hsl(var(--bg-clr));
  }
  .cast-item-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 5px;
    h3 {
      font-size: var(--font-sm);
      font-weight: 800;
    }
    p {
      font-size: var(--font-sm);
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .reviews {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 70%;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      max-width: 100%;
    }
    .review {
      padding: 1rem;
      background-color: hsl(var(--bg-clr) / 0.6);
      color: hsl(var(--text-clr));
      border-radius: 1rem;
      a {
        color: #0077b5;
        margin-left: 0.5rem;
      }
    }
  }
  .recommendations {
    grid-column: span 2;
    max-width: 80%;
    padding-bottom: 2rem;
    @media (max-width: 768px) {
      max-width: 100%;
    }
    .recommendation {
      .cards-container {
        max-width: 180px !important;
      }
    }
  }
  .status {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 1rem;
    margin-left: 2rem;
    .status-details {
      grid-column: span 2;
    }
    @media (max-width: 768px) {
      grid-column: span 3;
      margin-left: 0;
      .status-details {
        grid-column: span 1;
      }
    }
    .social-media {
      grid-column: span 2;
      max-width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      .icon {
        width: 100%;
        height: 100%;
        max-height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          width: 100%;
        }
        svg {
          font-size: var(--font-md);
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;

          &:hover {
            stroke: currentColor;
            stroke-width: 1px;
            fill: transparent;
          }
        }
      }
      .facebook {
        color: #3b5998;
      }
      .instagram {
        color: #e4405f;
      }
      .twitter {
        color: #1da1f2;
      }
      .imdb {
        color: #f5c518;
        svg {
          &:hover {
            stroke-width: 10px;
          }
        }
      }
      .link {
        color: #0077b5;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          left: -10%;
          top: 40%;
          transform: translateY(-50%);
          height: 50%;
          width: 2px;
          background-color: hsl(var(--text-clr));
        }
      }
    }
  }
`;
