import styled from "styled-components";

export const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  box-shadow: 0 0 0 2px ${(props) => props.theme["base-subtitle"]};
  max-width: 900px;
  margin: 4rem auto;
  padding: 1rem;
  justify-content: space-between;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-basis: 48%;
  box-shadow: 0 0 0 2px ${(props) => props.theme["base-subtitle"]};
  padding: 1rem;
`;

export const PostTitleWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PostTitle = styled.div`
  flex: 80%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 160%;

  @media (max-width: 728px) {
    text-align: center;
  }
`;

export const PostTitleSpan = styled.span`
  flex: 20%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme["blue"]};
  background-color: red;
`;
