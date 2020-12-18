import styled from "@emotion/styled/macro";
import * as colors from "../styles/colors";
import * as mq from "../styles/media-queries";
import { keyframes } from "@emotion/react";
import { FaComment, FaSearch, FaSpinner } from "react-icons/fa";

export const PostCardEl = styled.div({
  background: colors.gray100,
  padding: "16px 24px",
  border: `1px solid ${colors.gray100}`,
  borderRadius: "16px",
  marginBottom: "24px",
});

export const CommentEl = styled.div({
  padding: "8px 16px",
  background: colors.white,
  borderRadius: "16px",
  marginTop: "16px",
});

const titleStyle = {
  color: colors.gray500,
  textDecoration: "none",
};

export const Title = styled.h3({
  ...titleStyle,
});

export const TitleLink = styled.h3({
  "> a": {
    ...titleStyle,
    ":hover": { color: colors.aqua },
  },
});

export const UserContainer = styled.div({
  fontSize: "12px",
  marginBottom: "16px",
});

export const UserBy = styled.span({
  color: colors.gray200,
});

export const UserName = styled.span({
  fontWeight: "bold",
});

export const PostBody = styled.div({
  color: colors.gray300,
  marginBottom: "16px",
});

export const CommentsContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  cursor: "pointer",
});

export const ViewAllLabel = styled.span({
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: ".5px",
  marginRight: "8px",
});

export const CommentIcon = styled(FaComment)({
  color: colors.gray200,
});

export const CommentEmail = styled.div({
  fontSize: "12px",
  fontWeight: "bold",
  marginBottom: "8px",
});

export const CommentBody = styled.div({
  fontSize: "12px",
});

export const NavEl = styled.nav({
  padding: "26px",
  fontWeight: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [mq.small]: {
    flexDirection: "column",
    alignItems: "unset",
  },
});

export const InputContainer = styled.div({
  position: "realtive",
});

export const Input = styled.input({
  padding: "12px 24px",
  borderRadius: "8px",
  border: `1px solid ${colors.gray200}`,
  width: "200px",
  paddingLeft: "28px",
});

export const InputSerachIcon = styled(FaSearch)({
  color: colors.gray400,
});

export const Container = styled.div({
  background: colors.white,
  height: "100%",
  width: "100%",
});

export const Content = styled.div({
  margin: "0 auto",
  height: "100%",
  width: "80%",
  padding: "40px 0",
  [mq.small]: {
    width: "90%",
  },
});

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
  fontSize: "3rem",
});
Spinner.defaultProps = {
  "aria-label": "loading",
};

// export { Container, Content, Spinner, PostCardEl, CommentEl, Input, NavEl };
