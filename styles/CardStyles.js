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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
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
      font-size: 5em;
      font-weight: bold;
      position: absolute;
      top: 0;
      left: 0;
      color: #27d2c5;
      z-index: 5;
      background: linear-gradient(
        to bottom,
        rgba(25, 26, 31, 0.9),
        rgba(25, 26, 31, 0.1)
      );
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
    background-color: rgba(25, 26, 31, 1);
    .title {
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 600;
    }
    .date {
      /* font-weight: 200; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      .media-type {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #27d2c5;
        color: #fff;
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
