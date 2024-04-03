import { Button } from "@mui/material";
import { StyledButtonBox } from "./styled";

export const ButtonBoxContainer = ({ $toggleMenu, $showMenu }) => {
  return (
    <StyledButtonBox>
      <Button onClick={$toggleMenu} variant="contained" color="secondary">
        {$showMenu ? "Show Search Menu" : "Hide Search Menu"}
      </Button>
    </StyledButtonBox>
  );
};
