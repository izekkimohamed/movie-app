import styled from "styled-components";

export const HomeDetailsStyles = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 1660px;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  .btns {
    width: fit-content;
    display: flex;
    position: absolute;
    top: 1.5rem;
    left: 10em;
    background-color: transparent;
    border: 1px solid hsl(var(--brand-clr));
    overflow: hidden;
    border-radius: 5rem;
    @media (max-width: 768px) {
      position: relative;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 100%;
      background-color: hsl(var(--brand-clr));
      position: absolute;
      top: 0;
      left: 0;
      transform: ${({ active }) =>
        active === "movies" ? "translateX(0)" : "translateX(100%)"};
      transition: transform 0.2s ease-in-out;
      pointer-events: none;
      z-index: -1;
    }
    button {
      height: 100%;
      width: 100%;
      all: unset;
      padding: 0.5rem 1rem;
      border-radius: 5rem;
      font-size: var(--font-sm);
      font-weight: bold;
      cursor: pointer;
      color: hsl(var(--brand-clr));
    }
    .active {
      color: #f1f1f1;
    }
  }
`;
