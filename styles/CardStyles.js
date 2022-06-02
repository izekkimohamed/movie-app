import styled from "styled-components";

export const CardStyles = styled.li`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 1rem hsl(var(--bg-clr));
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  .poster {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &:after {
      content: "";
      display: grid;
      place-items: center;
      width: 100%;
      height: 30%;
      position: absolute;
      top: 0;
      left: 0;
      color: hsl(var(--brand-clr));
      background: linear-gradient(
        to bottom,
        hsl(var(--bg-clr) / 0.9),
        hsl(var(--bg-clr) / 0.1)
      );
      transition: transform 0.2s ease-in-out;
      pointer-events: none;
    }
    &:before {
      content: "+";
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      font-size: var(--font-xl);
      font-weight: bolder;
      color: hsl(var(--brand-clr));
      z-index: 5;
      transform: translateY(-101%);
      background: hsl(var(--bg-clr) / 0.6);
      transition: transform 0.2s ease-in-out;
      pointer-events: none;
    }
    &:hover {
      &:before {
        transform: translateY(0);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .details {
    width: 100%;
    padding: 0.5rem;
    z-index: 3;
    background-color: hsl(var(--bg-clr) / 0.9);
    .title {
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 700;
    }
    .date {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .media-type {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-xs);
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid hsl(var(--brand-clr));
        color: hsl(var(--text-clr));
      }
    }
  }
  .percent {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
  svg {
    width: 1.5rem;
  }
`;
