import styled from "styled-components";

export const IssueSearchWrapper = styled.div`
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

export const IssueSearchTitleWrapper = styled.div`
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

export const IssueSearchTitle = styled.h2`
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

export const IssueSearchTitleSpan = styled.span`
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

// export const IssueSearchInputButtonWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;
export const IssueSearchInput = styled.input`
  /* flex-basis: 93%; */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;
`;

// export const IssueSearchButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-basis: 5%;
//   background-color: ${(props) => props.theme["medium-blue"]};
//   color: ${(props) => props.theme["base-text"]};
//   padding: 12px 16px;
//   border: none;
//   font-family: "Nunito";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 0.9rem;
//   line-height: 160%;
//   border: 1px solid ${(props) => props.theme["base-border"]};
//   border-radius: 6px;

//   :hover{
//     transition: 0.8ms;
//     background-color: ${(props) => props.theme["dark-blue"]};
//   }
// `;
