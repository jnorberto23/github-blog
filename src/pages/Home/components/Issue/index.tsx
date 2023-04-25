import luxon from "luxon";
import { DateFromNow } from "../../../../utils/dateFormat";
import {
  PostTitleWrapper,
  PostTitleSpan,
  PostTitle,
  PostWrapper,
  PostDescription,
} from "./styles";

import ReactMarkdown from "react-markdown";

interface IIssueCard {
  issue: TypeIssue;
}

type TypeIssue = {
  id: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
};

export function Issue({ issue }: IIssueCard) {

  return (
    <PostWrapper>
      <PostTitleWrapper>
        <PostTitle>{issue.title}</PostTitle>
        <PostTitleSpan>{DateFromNow(issue.created_at)}</PostTitleSpan>
      </PostTitleWrapper>
      <PostDescription>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </PostDescription>
    </PostWrapper>
  );
}
