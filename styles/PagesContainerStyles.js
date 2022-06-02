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
    font-size: var(--font-lg);
    font-weight: 400;
    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 1px;
      background-color: hsl(var(--text-clr));
      margin-top: 0.3rem;
    }
  }
`;
