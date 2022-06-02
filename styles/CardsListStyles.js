import styled from "styled-components";

export const CardsListStyles = styled.div`
  display: grid;
  gap: 1rem;
  h2 {
    width: fit-content;
    font-size: var(--font-md);
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 1px;
      background-color: var(hsl(--bg-clr));
      margin-top: 0.5rem;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: minmax(350px, auto);
    grid-gap: 2rem 0.8rem;
    list-style: none;
  }
`;
