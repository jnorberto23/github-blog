import { MagnifyingGlass } from "phosphor-react";
import {
  IssueSearchInput,
  IssueSearchTitle,
  IssueSearchTitleSpan,
  IssueSearchTitleWrapper,
  IssueSearchWrapper,
} from "./styles";
import React from "react";

interface IIssueSearch {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  totalIssues: number;
}

export function IssueSearch({
  onKeyDown,
  totalIssues,
}: IIssueSearch) {
  return (
    <IssueSearchWrapper>
      <IssueSearchTitleWrapper>
        <IssueSearchTitle>Publicações</IssueSearchTitle>
        <IssueSearchTitleSpan>{totalIssues} publicações</IssueSearchTitleSpan>
      </IssueSearchTitleWrapper>

      <IssueSearchInput onKeyDown={onKeyDown} />
    </IssueSearchWrapper>
  );
}
