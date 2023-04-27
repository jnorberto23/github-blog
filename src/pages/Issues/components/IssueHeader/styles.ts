import { Link } from "react-router-dom";
import styled from "styled-components";

export const IssueHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1.5rem 2.5rem;
  max-width: 900px;
  background-color: ${(props) => props.theme["base-profile"]};
  margin-top: -5rem;
  /* box-shadow: 0 0 0 2px ${(props) => props.theme["base-subtitle"]}; */
  justify-content: center;
  border-radius: 7px;
  gap: 1rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 10px;
  }

  @media (max-width: 728px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const IssueHeaderGoBackAndNavigateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IssueHeaderGoBackAndNavigateLink = styled(Link)`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  color: ${(props) => props.theme["blue"]};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  gap: 0.4rem;
  :hover {
    transition: 0.5s;
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;
export const IssueHeaderTitle = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
  vertical-align: middle;
  @media (max-width: 728px) {
    text-align: center;
  }
`;

export const IssueHeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;
`;

export const IssueHeaderIconsSpan = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;

  svg {
    color: ${(props) => props.theme["base-label"]};
  }
`;
