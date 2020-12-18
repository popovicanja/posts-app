/** @jsx jsx */
import { jsx } from "@emotion/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../../interfaces";
import {
  CommentBody,
  CommentEl,
  CommentEmail,
  CommentIcon,
  CommentsContainer,
  PostBody,
  PostCardEl,
  Title,
  TitleLink,
  UserBy,
  UserContainer,
  UserName,
  ViewAllLabel,
} from "../custom-lib";
import { LoggerWrapperComponent } from "../LoggerWrapperComponent/LoggerWrapperComponent";

interface PostCardProps {
  post: Post;
  viewComments?: boolean;
  linkPath?: string;
}

function PostCard({ post, viewComments, linkPath }: PostCardProps) {
  const [showComments, setShowComments] = useState<boolean>(!!viewComments);

  const { title, body } = post;
  return (
    <PostCardEl>
      {linkPath ? (
        <TitleLink>
          <Link to={linkPath}>{title}</Link>
        </TitleLink>
      ) : (
        <Title>{title}</Title>
      )}
      <UserContainer>
        <UserBy>by</UserBy> <UserName>{post.userName}</UserName>
      </UserContainer>
      <PostBody>{body}</PostBody>
      <CommentsContainer onClick={() => setShowComments(!showComments)}>
        <ViewAllLabel>View comments </ViewAllLabel>
        <CommentIcon />
      </CommentsContainer>
      <div>
        {showComments &&
          post?.comments?.map((comment) => (
            <CommentEl key={comment.id}>
              <CommentEmail>{comment.email}</CommentEmail>
              <CommentBody>{comment.body}</CommentBody>
            </CommentEl>
          ))}
      </div>
    </PostCardEl>
  );
}

export default LoggerWrapperComponent(PostCard);
