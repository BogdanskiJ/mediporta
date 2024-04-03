import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { StyledBox, StyledButtonBox, StyledTableViewBox } from "./styled";
import EnhancedTableViewBox from "./table";
import { ButtonsLabel } from "./buttonsLabel";

export const ViewBox = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, overflow: "hidden", height: "100%" }}>
        <StyledBox>
          <StyledButtonBox>
            <ButtonsLabel />
          </StyledButtonBox>
          <StyledTableViewBox>
            <EnhancedTableViewBox />
          </StyledTableViewBox>
        </StyledBox>
      </Paper>
    </Box>
  );
};
