import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getPosts } from "./api";

import "./App.css";
import { GREETING_MESSAGE } from "./constants/consatants";
import PostsContext from "./contexts/post-context";
import { Post } from "./interfaces";
import NotFound from "./pages/NotFound/NotFound";
import PostDetails from "./pages/PostDetails/PostDetails";
import Posts from "./pages/Posts/Posts";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsFetching(true);
    getPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <PostsContext.Provider
      value={{ posts, isFetching, error, logger: logGrettingMessage }}
    >
      <Router>
        <Switch>
          <Route exact path={["/", "/posts"]}>
            <Posts />
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </PostsContext.Provider>
  );
}

const logGrettingMessage = (name: string) =>
  console.log(`${GREETING_MESSAGE} ${name}`);

export default App;
