import { DateFromNow } from "../../../../utils/dateFormat";
import {
  IssueHeaderGoBackAndNavigateWrapper,
  IssueHeaderIcons,
  IssueHeaderIconsSpan,
  IssueHeaderTitle,
  IssueHeaderWrapper,
} from "./styles";
import {
  ArrowSquareOut,
  CalendarX,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from "phosphor-react";

interface IIssueHeader {
  issue: TypeIssue;
}

type TypeIssue = {
  id: string;
  number: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  };
};

export function IssueHeader({ issue }: IIssueHeader) {
  console.log('issue no header', issue)
  const dateFromNow = DateFromNow(issue.created_at).split(",")[0];
  return (
    <IssueHeaderWrapper>
      <IssueHeaderGoBackAndNavigateWrapper>
        <span>
          <CaretLeft weight="bold" size={16} />
          Voltar
        </span>
        <span>
          Ver no GitHub
          <ArrowSquareOut weight="bold" size={16} />
        </span>
      </IssueHeaderGoBackAndNavigateWrapper>

      <IssueHeaderTitle>{issue.title}</IssueHeaderTitle>
      <IssueHeaderIcons>
        <IssueHeaderIconsSpan>
          <GithubLogo weight="fill" size={20} />
          {issue.user.login}
        </IssueHeaderIconsSpan>
        <IssueHeaderIconsSpan>
          <CalendarX weight="fill" size={20} />
          {`Há ${dateFromNow}`}
        </IssueHeaderIconsSpan>
        <IssueHeaderIconsSpan>
          <ChatCircle weight="fill" size={20} />5 comentários
        </IssueHeaderIconsSpan>
      </IssueHeaderIcons>
    </IssueHeaderWrapper>
  );
}
