import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { StyledSearchBox } from "./styled";

export const SearchBoxContainer = ({ $handleClick }) => {
  return (
    <StyledSearchBox>
      <Button onClick={$handleClick} variant="contained" color="success">
        <SearchIcon /> Search
      </Button>
    </StyledSearchBox>
  );
};
