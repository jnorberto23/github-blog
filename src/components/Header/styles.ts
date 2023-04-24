import styled from "styled-components";

type HeaderContainerProps = {
  background?: string;
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  padding: 4rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  background-image: linear-gradient(to right top, #000b53, #000d46, #020c39, #06092c, #05061f, #05061f, #05061f, #05061f, #06092c, #020c39, #000d46, #000b53);
  box-shadow: 0 0 0 2px ${(props) => props.theme["base-subtitle"]};

  img {
    width: 2.7rem;
    height: 2.7rem;
  }
  span {
    font-size: 1rem;
    color: ${(props) => props.theme["blue"]};
    font: 400 1.5rem "Coda", sans-serif;
  }
`;
