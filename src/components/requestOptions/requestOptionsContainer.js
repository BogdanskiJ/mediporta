import React from "react";
import { StyledRequestOptionsBox } from "./styled";
import { ButtonBox } from "./buttonBox";
import { SearchBox } from "./searchBox";
import { OptionsBox } from "./optionsBox";

export const RequestOptionsContainer = ({ $showMenu }) => {
  return (
    <StyledRequestOptionsBox $showMenu={$showMenu}>
      <OptionsBox />
      <SearchBox />
      <ButtonBox />
    </StyledRequestOptionsBox>
  );
};
