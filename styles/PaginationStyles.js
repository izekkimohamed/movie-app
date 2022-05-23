import styled from "styled-components";

export const PaginationStyles = styled.ul`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  li {
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
    cursor: pointer;
    &:hover {
      background-color: #212529;
    }
    &.active {
      background-color: #27d2c5;
      color: #111;
    }
  }
`;
