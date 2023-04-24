import { Fragment } from "react";
import { Profile } from "./components/Profile";
import { PostList } from "./styles";
import { Post } from "./components/Post";

export function Home() {
  const array = [1, 1, 1, 1];
  return (
    <Fragment>
      <Profile />
      <PostList>
        {array.map((item: number) => {
          return <Post key={item} />;
        })}
      </PostList>
    </Fragment>
  );
}
