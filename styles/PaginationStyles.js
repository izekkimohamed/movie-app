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
      color: #f5f5f5;
      font-size: 1.2rem;
      font-weight: 500;
      background-color: #384048;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      user-select: none;
      &:hover {
        background-color: #212529;
      }
      &.active {
        pointer-events: none;
        background-color: #27d2c5;
        color: #111;
      }
    }
  }
`;
