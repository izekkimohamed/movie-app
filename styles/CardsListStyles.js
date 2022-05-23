import styled from "styled-components";

export const CardsListStyles = styled.div`
  display: grid;
  gap: 1rem;
  h2 {
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 1px;
      background-color: #e6e6e655;
      margin-top: 0.5rem;
    }
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 1rem;
    list-style: none;
  }
`;
