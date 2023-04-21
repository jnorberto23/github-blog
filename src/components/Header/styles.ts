import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 3.8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 2.7rem;
    height: 2.7rem;
  }
  span{
    font-size: 1rem;
    color: ${props => props.theme["blue"]};
    font: 400 1.5rem 'Coda', sans-serif;
  }
`;

