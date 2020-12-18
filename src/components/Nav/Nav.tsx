/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { NavEl } from "../../components/custom-lib";
import { LoggerWrapperComponent } from "../LoggerWrapperComponent/LoggerWrapperComponent";

interface NavProps {
  children?: any;
}

function Nav({ children }: NavProps) {
  return (
    <NavEl>
      <div
        css={{
          fontSize: "22px",
          lineHeight: "40px",
        }}
      >
        Posts and comments app
      </div>
      {children}
    </NavEl>
  );
}

export default LoggerWrapperComponent(Nav);
