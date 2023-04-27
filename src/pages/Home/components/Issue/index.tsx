import gfm from "remark-gfm";
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
  number: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
};

export function Issue({ issue }: IIssueCard) {

  const dateFromNow = DateFromNow(issue.created_at).split(',')[0]
  return (
    <PostWrapper to={`/issues/${issue.number}`} >
      <PostTitleWrapper>
        <PostTitle>{issue.title}</PostTitle>
        <PostTitleSpan>{`Há ${dateFromNow}`}</PostTitleSpan>
      </PostTitleWrapper>
      <PostDescription>
        <ReactMarkdown remarkPlugins={[gfm]} children={issue.body}/>
      </PostDescription>
    </PostWrapper>
  );
}
