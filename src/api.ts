import { Post, User, Comment } from "./interfaces";
import { client } from "./utils/api-client";

async function getPosts(): Promise<Post[]> {
  const posts = await fetchPosts();
  const comments = await fetchComments();
  const users = await fetchUsers();
  return posts.map((post) => {
    post.comments = comments.filter((el) => el.postId === post.id);
    const user = users.find((el) => el.id === post.userId);
    post.userName = user?.name;
    return post;
  });
}

async function getPostById(id: number): Promise<Post> {
  const post = await fetchPostById(id);
  const comments = await fetchCommentsByPostId(id);
  const user = await fetchUserById(post.userId);
  return {
    ...post,
    comments,
    userName: user.name,
  };
}

async function fetchPosts(): Promise<Post[]> {
  return client<Post[]>(`posts`);
}

async function fetchPostById(id: number): Promise<Post> {
  return client<Post>(`posts/${id}`);
}

async function fetchCommentsByPostId(id: number): Promise<Comment[]> {
  return client<Comment[]>(`post/${id}/comments`);
}

async function fetchComments(): Promise<Comment[]> {
  return client<Comment[]>(`comments`);
}

async function fetchUserById(id: number): Promise<User> {
  return client<User>(`users?id=${id}`);
}

async function fetchUsers(): Promise<User[]> {
  return client<User[]>(`users`);
}

export { getPosts, getPostById };
