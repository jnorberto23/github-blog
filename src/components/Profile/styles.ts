import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 1.5rem 2.5rem;
  max-width: 1000px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin-top: -5rem;
  box-shadow: 0 0 0 2px ${(props) => props.theme["base-subtitle"]};

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
  }
`;
export const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

export const ProfileTitle = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const ProfileDescription = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
`;

export const ProfileIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem 0;
`;

export const ProfileIconsSpan = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;

  svg{
    color: ${(props) => props.theme["base-label"]};
  }
`;
