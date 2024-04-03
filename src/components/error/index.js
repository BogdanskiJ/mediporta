import { Alert, Box, Paper } from "@mui/material";

export const ErrorPage = () => {
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
        <Alert
          severity="error"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "26px",
            minWidth: "50px",
            minHeight: "50px",
          }}
        >
          <div>Ooops! Something went wrong...</div>
          <div>
            Please check your network connection <br /> and try again
          </div>
        </Alert>
      </Paper>
    </Box>
  );
};
