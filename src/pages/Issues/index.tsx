import { useParams } from "react-router-dom";
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

export function Issues() {
  const { id } = useParams();

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

      <IssueHeaderTitle>Javascript data not rendering</IssueHeaderTitle>
      <IssueHeaderIcons>
        <IssueHeaderIconsSpan>
          <GithubLogo weight="fill" size={20} />jnorberto23
        </IssueHeaderIconsSpan>
        <IssueHeaderIconsSpan>
          <CalendarX weight="fill" size={20} />
          Há 12 dias
        </IssueHeaderIconsSpan>
        <IssueHeaderIconsSpan>
          <ChatCircle weight="fill" size={20} />5 comentários
        </IssueHeaderIconsSpan>
      </IssueHeaderIcons>
    </IssueHeaderWrapper>
  );
}
