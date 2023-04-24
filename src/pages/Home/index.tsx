import { Fragment } from "react";
import { Profile } from "./components/Profile";
import {
  PostList,
  PostTitleWrapper,
  PostTitleSpan,
  PostWrapper,
  PostTitle,
} from "./styles";

export function Home() {
  return (
    <Fragment>
      <Profile />
      <PostList>
        <PostWrapper>
          <PostTitleWrapper>
            <PostTitle>JavaScript</PostTitle>
            <PostTitleSpan>Há 1 dia</PostTitleSpan>
          </PostTitleWrapper>
        </PostWrapper>
        <PostWrapper>
          <PostTitleWrapper>
            <PostTitle>JavaScript</PostTitle>
            <PostTitleSpan>Há 1 dia</PostTitleSpan>
          </PostTitleWrapper>
        </PostWrapper>
      </PostList>
    </Fragment>
  );
}
