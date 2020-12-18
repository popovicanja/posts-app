import { createContext } from "react";

import { Post } from "../interfaces";

const PostsContext = createContext<{
  posts: Post[];
  isFetching: boolean;
  error: Error | null;
  logger: (name: string) => void;
}>({
  posts: [],
  isFetching: false,
  error: null,
  logger: () => {},
});

PostsContext.displayName = "PostsContext";

export default PostsContext;
