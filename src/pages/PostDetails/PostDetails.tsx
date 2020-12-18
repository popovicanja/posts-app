/** @jsx jsx */
import { jsx } from "@emotion/react";

import React from "react";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Content } from "../../components/custom-lib";
import { LoggerWrapperComponent } from "../../components/LoggerWrapperComponent/LoggerWrapperComponent";
import Nav from "../../components/Nav/Nav";
import PostCard from "../../components/PostCard/PostCard";
import PostsContext from "../../contexts/post-context";
import { Post } from "../../interfaces";

function PostDetails() {
  const params = useParams<{ id: string | undefined }>();

  const { posts, error } = useContext(PostsContext);

  const [post, setPost] = useState<Post | null>(null);

  const postId: number = useMemo(() => {
    return +(params?.id || 0);
  }, [params]);

  useEffect(() => {
    const post = posts.find((el) => el.id === postId);

    if (post) {
      setPost(post);
    }
  }, [postId, posts]);

  return (
    <Container>
      <Nav></Nav>
      <Content>
        {error && <div>Upss.. There is a problem with fetching data</div>}
        {post && <PostCard post={post} viewComments></PostCard>}
      </Content>
    </Container>
  );
}

export default LoggerWrapperComponent(PostDetails);
