import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function TrailerFrame({ trailerVideo, hideTrailer }) {
  const trailerRef = useRef();

  useEffect(() => {
    const trailer = trailerRef.current;
    trailer.addEventListener("click", () => {
      hideTrailer();
    });
    window.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        hideTrailer();
      }
    });
    return () => {
      trailer.removeEventListener("click", () => {
        hideTrailer();
      });
      window.removeEventListener("keyup", (e) => {
        if (e.keyCode === 27) {
          hideTrailer();
        }
      });
    };
  }, [trailerRef, hideTrailer]);

  return (
    <IfraeStyles ref={trailerRef}>
      <iframe
        title="trailer"
        width="760"
        height="515"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?
        rel=0&autoplay=1&showinfo=0&modestbranding=1`}
        frameBorder="0"
        allow=" autoplay"
        allowFullScreen
      />
    </IfraeStyles>
  );
}
const IfraeStyles = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 76%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
