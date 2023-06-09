import styled from "styled-components";

export const IssueList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 900px;
  margin: 4rem auto;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 728px) {
    padding-top: 1rem;
    margin-top: 0;
    flex-direction: column;
  }
`;

