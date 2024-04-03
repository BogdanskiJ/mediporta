import { Button, Tooltip } from "@mui/material";

export const ButtonsLablelContainer = ({
  $firstTitle,
  $secondTitle,
  $selectedTag,
  $onClick,
  $text,
}) => {
  return (
    <Tooltip title={!$selectedTag ? $firstTitle : $secondTitle}>
      <span>
        <Button
          size="small"
          variant="contained"
          disabled={!$selectedTag}
          onClick={$onClick}
        >
          {$text}
        </Button>
      </span>
    </Tooltip>
  );
};
