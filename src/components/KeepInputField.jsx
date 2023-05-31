import {
  ClickAwayListener,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

const useStyles = makeStyles({
  titleTextField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      color: "#a3a5a7",
      width: "100%",
      height: "2rem",
      paddingLeft: "0px",
    },
  },
  customTextField: {
    "& .MuiInputBase-input": {
      whiteSpace: "normal", // Allow text to wrap to new lines
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      color: "#a3a5a7",
      width: "100%",
      padding: "0",
      margin: "0.5rem 0rem",
    },
  },
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
    padding: "7px",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#494949",
      color: "white",
    },
  },
});

export default function KeepInputField({ onClick, setTitle, setText }) {
  const classes = useStyles();
  return (
    <Stack sx={{ width: "36rem" }}>
      <ClickAwayListener onClickAway={onClick}>
        <Paper
          sx={{
            width: "100%",
            backgroundColor: "#202124",
            border: "1px solid #4b4e53",
            padding: "15px 15px",
            borderRadius: "8px",
          }}
          elevation={5}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                color: "#a3a5a7",
              }}
            >
              <TextField
                placeholder="Title"
                className={classes.titleTextField}
                sx={{ width: "100%", marginLeft: "-12px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
              <PushPinOutlinedIcon className={classes.iconStyle} />
            </div>
          </Stack>
          <TextField
            placeholder="Take a note..."
            className={classes.customTextField}
            sx={{ width: "100%" }}
            onChange={(e) => setText(e.target.value)}
            multiline
          />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={2}>
              <AddAlertOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <PersonAddAltOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <ColorLensOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <InsertPhotoOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <ArchiveOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <MoreVertOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <UndoOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
              <RedoOutlinedIcon
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
            </Stack>
            <Typography
              sx={{ cursor: "pointer", padding: "7px" }}
              color={"#a3a5a7"}
              onClick={onClick}
            >
              Close
            </Typography>
          </Stack>
        </Paper>
      </ClickAwayListener>
    </Stack>
  );
}
