import {
  PostTitleWrapper,
  PostTitleSpan,
  PostTitle,
  PostWrapper,
  PostDescription,
} from "./styles";

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IIssueCard {
  issue: TypeIssue
}

type TypeIssue = {
  id: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
};

export function Issue({issue}: IIssueCard) {
  return (
    <PostWrapper>
      <PostTitleWrapper>
        <PostTitle>{issue.title}</PostTitle>
        <PostTitleSpan>{1}</PostTitleSpan>
      </PostTitleWrapper>
      <PostDescription>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </PostDescription>
    </PostWrapper>
  );
}
