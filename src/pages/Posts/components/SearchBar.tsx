/** @jsx jsx */
import { jsx } from "@emotion/react";

import React, { useState, useEffect } from "react";

import {
  Input,
  InputContainer,
  InputSerachIcon,
} from "../../../components/custom-lib";
import useDebounce from "../../../hooks/useDebounce";
import { LoggerWrapperComponent } from "../../../components/LoggerWrapperComponent/LoggerWrapperComponent";

interface SearchBarProps {
  onSearch: (key: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <InputContainer css={{ position: "relative" }}>
      <Input
        type="text"
        placeholder="Search posts by user"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></Input>
      <InputSerachIcon
        css={{
          position: "absolute",
          top: "4px",
          left: "8px",
          transform: "translateY(50%)",
        }}
      ></InputSerachIcon>
    </InputContainer>
  );
}

export default LoggerWrapperComponent(SearchBar);
