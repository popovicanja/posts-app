/** @jsx jsx */
import { jsx } from "@emotion/react";

import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "../../components/custom-lib";
import { LoggerWrapperComponent } from "../../components/LoggerWrapperComponent/LoggerWrapperComponent";
import Nav from "../../components/Nav/Nav";
function NotFound() {
  return (
    <Container>
      <Nav />
      <Content>
        <div
          css={{
            padding: "40px 0",
            textAlign: "center",
          }}
        >
          Sorry this page doesn't exist. <Link to="/">Go to Posts</Link>
        </div>
      </Content>
    </Container>
  );
}

export default LoggerWrapperComponent(NotFound);
