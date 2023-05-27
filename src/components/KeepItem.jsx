import { Paper, Stack } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const useStyles = makeStyles({
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
  },
});

export default function KeepItem({
  text,
  title,
  handleDelete,
  // handleUpdate,
  handleDialog,
}) {
  const classes = useStyles();
  return (
    <Stack
      onClick={handleDialog}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "16rem",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          backgroundColor: "#202124",
          border: "1px solid #4b4e53",
          borderRadius: "8px",
        }}
        elevation={1}
      >
        <Stack sx={{ width: "90%", margin: "15px" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                color: "#d6e4e6",
              }}
            >
              {title}
            </div>

            <PushPinOutlinedIcon className={classes.iconStyle} />
          </Stack>
          <div
            style={{
              width: "100%",
              color: "#d6e4e6",
              padding: "0",
              margin: "1rem 0rem",
            }}
          >
            {text}
          </div>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={3}>
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
                onClick={handleDelete}
                sx={{ fontSize: "18px" }}
                className={classes.iconStyle}
              />
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
