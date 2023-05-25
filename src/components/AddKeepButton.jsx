import { Paper, Stack } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const useStyles = makeStyles({
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
  },
});

export default function AddKeepButton() {
  const classes = useStyles();
  return (
    <Stack sx={{ width: "36rem", height: "3rem" }}>
      <Paper
        sx={{
          width: "100%",
          height: "3rem",
          backgroundColor: "#202124",
          border: "1px solid #4b4e53",
          color: "#e8eaed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 15px",
          borderRadius: "8px",
        }}
        elevation={5}
      >
        <div>Take a note...</div>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <CheckBoxOutlinedIcon className={classes.iconStyle} />
          <BrushOutlinedIcon className={classes.iconStyle} />
          <ImageOutlinedIcon className={classes.iconStyle} />
        </Stack>
      </Paper>
    </Stack>
  );
}
