import { Dialog } from "@mui/material";
import { Stack, TextField, Typography } from "@mui/material";
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
      whiteSpace: "normal",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      color: "#a3a5a7",
      width: "100%",
      padding: "0",
      margin: "1rem 0rem",
    },
  },
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
  },
});

export default function KeepUpdateDialog({
  handleDialog,
  setText,
  text,
  setTitle,
  title,
  handleEdit,
}) {
  const classes = useStyles();
  return (
    <Dialog open={handleDialog}>
      <Stack
        sx={{
          width: "36rem",
          backgroundColor: "#202124",
          border: "1px solid #4b4e53",
        }}
      >
        {/* inner container */}
        <Stack sx={{ margin: "10px" }}>
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
                value={title}
                className={classes.titleTextField}
                sx={{ width: "100%", marginLeft: "-12px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
              <PushPinOutlinedIcon className={classes.iconStyle} />
            </div>
          </Stack>
          <TextField
            placeholder="Take a note..."
            value={text}
            className={classes.customTextField}
            sx={{ width: "100%" }}
            onChange={(e) => setText(e.target.value)}
            multiline
          />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={4}>
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
              sx={{ cursor: "pointer" }}
              color={"#a3a5a7"}
              onClick={handleEdit}
            >
              Close
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}
