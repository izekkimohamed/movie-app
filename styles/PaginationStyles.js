import styled from "styled-components";

export const PaginationStyles = styled.ul`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem auto;
  padding: 0;
  list-style: none;
  li {
    a {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      color: hsl(var(--text-clr));
      font-size: var(--font-md);
      font-weight: 500;
      background-color: hsl(var(--bg-clr));
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      user-select: none;
      &:hover {
        background-color: hsl(var(--brand-clr) / 0.5);
      }
      &.active {
        pointer-events: none;
        background-color: hsl(var(--brand-clr));
        color: hsl(var(--bg-clr));
      }
    }
  }
`;
