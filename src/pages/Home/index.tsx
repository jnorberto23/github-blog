import { Fragment } from "react";
import { Profile } from "./components/Profile";
import { PostList } from "./styles";
import { Post } from "./components/Post";
import { PostSearch } from "./components/PostSearch";

export function Home() {
  const array = [1, 1, 1, 1];
  return (
    <Fragment>
      <Profile />
      <PostSearch />
      <PostList>
        {array.map((item: number) => {
          return <Post key={item} />;
        })}
      </PostList>
    </Fragment>
  );
}
