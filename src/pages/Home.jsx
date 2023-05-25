import { Box, Stack } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddKeepButton from "../components/AddKeepButton";

const useStyles = makeStyles({
  // customTextField: {
  //   height: "3rem",
  //   "& .MuiOutlinedInput-root": {
  //     height: "100%",
  //   },
  //   backgroundColor: "#525355",
  //   width: "45rem",
  //   borderRadius: "8px",
  // },
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
    fontSize: "25px",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        direction={"column"}
        // position={"fixed"}
        width={"4.5rem"}
        height={"100vh"}
        alignItems={"center"}
        gap={3}
        paddingTop={"1.2rem"}
      >
        <LightbulbOutlinedIcon className={classes.iconStyle} />
        <NotificationsOutlinedIcon className={classes.iconStyle} />
        <CreateOutlinedIcon className={classes.iconStyle} />
        <ArchiveOutlinedIcon className={classes.iconStyle} />
        <DeleteOutlineOutlinedIcon className={classes.iconStyle} />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <AddKeepButton />
      </Box>
    </Box>
  );
}
