import styled from "styled-components";

export const PostSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 4rem auto;
  justify-content: space-between;
  gap: 0.8rem;

  @media (max-width: 728px) {
    margin: 1rem;
    flex-direction: column;
  }
`;

export const PostSearchTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 728px) {
    flex-direction: column;
    text-align: center;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const PostSearchTitle = styled.h2`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 160%;

  color: ${(props) => props.theme["base-subtitle"]};

  @media (max-width: 728px) {
    text-align: center;
  }
`;

export const PostSearchTitleSpan = styled.span`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-span"]};

  text-align: right;

  @media (max-width: 728px) {
    text-align: center;
  }
`;

export const PostSearchInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 16px;
background: ${(props) => props.theme["base-input"]};
border: 1px solid  ${(props) => props.theme["base-border"]};
border-radius: 6px;
`