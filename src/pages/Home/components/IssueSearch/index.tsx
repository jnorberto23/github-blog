import {
    IssueSearchInput,
  IssueSearchTitle,
  IssueSearchTitleSpan,
  IssueSearchTitleWrapper,
  IssueSearchWrapper,
} from "./styles";

interface IIssueSearch {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function IssueSearch({onKeyDown} : IIssueSearch) {
  return (
    <IssueSearchWrapper>
      <IssueSearchTitleWrapper>
        <IssueSearchTitle>Publicações</IssueSearchTitle>
        <IssueSearchTitleSpan>6 publicações</IssueSearchTitleSpan>
      </IssueSearchTitleWrapper>
      <IssueSearchInput onKeyDown={onKeyDown}/>
    </IssueSearchWrapper>
  );
}
