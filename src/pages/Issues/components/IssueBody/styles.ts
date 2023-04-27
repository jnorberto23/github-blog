import styled from "styled-components";

export const IssueBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1.5rem 2.5rem;
  max-width: 900px;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 728px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;

  img{
    width: 100%;
    height: 100%;
  }
`;
