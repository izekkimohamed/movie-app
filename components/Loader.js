import styled, { keyframes } from "styled-components";

function Loader() {
  return (
    <LoaderStyles>
      <div className="dots"></div>
      <p>Loading...</p>
    </LoaderStyles>
  );
}

export default Loader;

const spinner = keyframes`
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }

    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }

    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }

    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }

`;

export const LoaderStyles = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .dots {
    width: 72px;
    height: 34.6px;
    background: radial-gradient(
          circle closest-side,
          hsl(var(--brand-clr)) 90%,
          #0000
        )
        0% 50%,
      radial-gradient(circle closest-side, hsl(var(--brand-clr)) 90%, #0000) 50%
        50%,
      radial-gradient(circle closest-side, hsl(var(--brand-clr)) 90%, #0000)
        100% 50%;
    background-size: calc(100% / 3) 17.3px;
    background-repeat: no-repeat;
    animation: ${spinner} 0.8s infinite linear;
  }
  p {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    font-weight: bold;
    color: hsl(var(--brand-clr));
    font-style: italic;
  }
`;
