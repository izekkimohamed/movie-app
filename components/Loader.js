import styled, { keyframes } from "styled-components";

function Loader() {
  return (
    <LoaderStyles>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyles>
  );
}

export default Loader;

const spinner = keyframes`
    0% {
      transform: rotateY(0deg);
    }

    50%,
    80% {
      transform: rotateY(-180deg);
    }

    90%,
    100% {
      opacity: 0;
      transform: rotateY(-180deg);
    }

`;

export const LoaderStyles = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner {
    position: relative;
    width: 50px;
    height: 50px;
    perspective: 100px;
    &:after {
      content: "Loading...";
      position: absolute;
      top: 200%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
    }

    div {
      width: 100%;
      height: 100%;
      background: #27d2c5;
      position: absolute;
      left: 50%;
      transform-origin: left;
      animation: ${spinner} 2s infinite;

      &:nth-child(1) {
        animation-delay: 0.15s;
      }

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.45s;
      }

      &:nth-child(4) {
        animation-delay: 0.6s;
      }

      &:nth-child(5) {
        animation-delay: 0.75s;
      }
    }
  }
`;
