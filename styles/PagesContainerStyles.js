import styled from "styled-components";

export const PagesContainerStyles = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 1660px;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: relative;
  top: 5rem;

  h3 {
    width: fit-content;
    font-size: clamp(1.3rem, 1.6vw, 1.6rem);
    font-weight: 400;
    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 1px;
      background-color: #f5f5f5;
      margin-top: 0.3rem;
    }
  }
`;
