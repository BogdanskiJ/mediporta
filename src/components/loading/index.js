import { Box, CircularProgress, Paper } from "@mui/material";

export const LoadingPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          padding: "10px",
          height: "70vh",
        }}
      >
        <CircularProgress
          sx={{
            width: "100%",
            height: "100%",
            margin: "auto",
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "100px",
            minHeight: "100px",
          }}
        />
      </Paper>
    </Box>
  );
};
