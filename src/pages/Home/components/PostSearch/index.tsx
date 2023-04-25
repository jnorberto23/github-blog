import {
    PostSearchInput,
  PostSearchTitle,
  PostSearchTitleSpan,
  PostSearchTitleWrapper,
  PostSearchWrapper,
} from "./styles";

export function PostSearch() {
  return (
    <PostSearchWrapper>
      <PostSearchTitleWrapper>
        <PostSearchTitle>Publicações</PostSearchTitle>
        <PostSearchTitleSpan>6 publicações</PostSearchTitleSpan>
      </PostSearchTitleWrapper>
      <PostSearchInput />
    </PostSearchWrapper>
  );
}
