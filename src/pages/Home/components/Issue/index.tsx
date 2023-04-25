import {
  PostTitleWrapper,
  PostTitleSpan,
  PostTitle,
  PostWrapper,
  PostDescription,
} from "./styles";

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
       {issue.body}
      </PostDescription>
    </PostWrapper>
  );
}
