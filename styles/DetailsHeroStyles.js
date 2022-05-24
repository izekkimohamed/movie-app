import styled from "styled-components";

export const DetailsHeroStyles = styled.div`
  padding: 5rem 1rem 1rem 1rem;
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
  .container {
    max-width: 1660px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 1rem;
      /* background-color: transparent; */
      .poster {
        display: none;
      }
    }

    img {
      object-fit: cover;
      object-position: center;
      border-radius: 1rem 0 0 1rem;
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
    margin-left: 1rem;
  }
`;
