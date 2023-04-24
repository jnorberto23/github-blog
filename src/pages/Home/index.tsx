import { Fragment } from "react";
import { Profile } from "./components/Profile";
import {
  PostList,
  PostTitleWrapper,
  PostTitleSpan,
  PostWrapper,
  PostTitle,
  PostDescription,
} from "./styles";

export function Home() {
  return (
    <Fragment>
      <Profile />
      <PostList>
        <PostWrapper>
          <PostTitleWrapper>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTitleSpan>Há 1 dia</PostTitleSpan>
          </PostTitleWrapper>
          <PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. structures. Wherever possible, comparisons with other languages are structures. Wherever possible, comparisons with other languages are
          </PostDescription>
        </PostWrapper>
        <PostWrapper>
          <PostTitleWrapper>
            <PostTitle>JavaScript data types and data structures</PostTitle>
            <PostTitleSpan>Há 1 dia</PostTitleSpan>
          </PostTitleWrapper>
          <PostDescription>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </PostDescription>
        </PostWrapper>
      </PostList>
    </Fragment>
  );
}
