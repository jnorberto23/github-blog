import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-basis: 48%;
  padding: 1.5rem;
  background-color: ${(props) => props.theme["base-profile"]};
  /* box-shadow: 0 0 0 2px ${(props) => props.theme["base-subtitle"]}; */
  border-radius: 7px;
  gap: 1rem;

  :visited {
    color: ${(props) => props.theme["base-text"]};
  }
  :hover {
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme["base-label"]};
    cursor: pointer;
  }
`;

export const PostTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  :visited {
    color: ${(props) => props.theme["base-text"]};
  }

  @media (max-width: 728px) {
    flex-direction: column;
    text-align: center;
    flex-wrap: nowrap;
    align-items: center;
    padding-bottom: 1rem;
  }
`;

export const PostTitle = styled.h1`
  flex-basis: 80%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 160%;
  color: ${(props) => props.theme["white"]};

  @media (max-width: 728px) {
    text-align: center;
  }
`;

export const PostTitleSpan = styled.span`
  text-align: right;
  flex-basis: 20%;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;

  @media (max-width: 728px) {
    text-align: center;
  }
`;

export const PostDescription = styled.p`
  margin: auto;
  padding: auto;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
  display: -webkit-box;
  overflow: hidden;
  max-width: 20rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media (max-width: 728px) {
    text-align: center;
  }
`;
``;
