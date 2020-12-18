/** @jsx jsx */
import { jsx } from "@emotion/react";

import { useCallback, useContext, useEffect, useState } from "react";
import { Container, Content, Spinner } from "../../components/custom-lib";
import { LoggerWrapperComponent } from "../../components/LoggerWrapperComponent/LoggerWrapperComponent";
import Nav from "../../components/Nav/Nav";
import PostCard from "../../components/PostCard/PostCard";
import PostsContext from "../../contexts/post-context";
import { Post } from "../../interfaces";
import SearchBar from "./components/SearchBar";

function Posts() {
  const { posts, isFetching, error } = useContext(PostsContext);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => setFilteredPosts(posts), [posts]);

  const handleSearchChange = useCallback(
    (key: string) => {
      const filteredData = posts.filter((post) =>
        post.userName?.toLowerCase().includes(key.toLowerCase())
      );
      setFilteredPosts(filteredData);
    },
    [posts]
  );

  return (
    <Container>
      <Nav>
        <SearchBar onSearch={handleSearchChange}></SearchBar>
      </Nav>
      <Content>
        {isFetching && (
          <div
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spinner />
          </div>
        )}
        {error && <div>Upss.. There is a problem with fetching data</div>}
        {filteredPosts &&
          filteredPosts.length > 0 &&
          filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              linkPath={`/post/${post.id}`}
            ></PostCard>
          ))}
      </Content>
    </Container>
  );
}
export default LoggerWrapperComponent(Posts);
