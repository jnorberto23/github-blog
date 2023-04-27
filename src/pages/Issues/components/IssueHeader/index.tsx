import { DateFromNow } from "../../../../utils/dateFormat";
import {
  IssueHeaderGoBackAndNavigateLink,
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
  const dateFromNow = DateFromNow(issue.created_at).split(",")[0];
  return (
    <IssueHeaderWrapper>
      <IssueHeaderGoBackAndNavigateWrapper>
        <IssueHeaderGoBackAndNavigateLink to={'/'}>
          <CaretLeft weight="bold" size={16} />
          Voltar
        </IssueHeaderGoBackAndNavigateLink>
        <IssueHeaderGoBackAndNavigateLink to={issue.html_url}>
          Ver no GitHub
          <ArrowSquareOut weight="bold" size={16} />
        </IssueHeaderGoBackAndNavigateLink>
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
          <ChatCircle weight="fill" size={20} />{issue.comments} comentários
        </IssueHeaderIconsSpan>
      </IssueHeaderIcons>
    </IssueHeaderWrapper>
  );
}
