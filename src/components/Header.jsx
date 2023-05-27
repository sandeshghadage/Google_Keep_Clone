import React from "react";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const useStyles = makeStyles({
  customTextField: {
    height: "3rem",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      height: "100%",
      color: "#fff",
    },
    backgroundColor: "#525355",
    width: "45rem",
    borderRadius: "8px",
  },
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "7vh",
        borderBottom: "1px solid #4b4e53",
        padding: "0rem 26px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <MenuIcon className={classes.iconStyle} />
        <div style={{ width: "40px", height: "40px", marginLeft: "8px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          />
        </div>
        <div style={{ fontSize: "24px" }}>Keep</div>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon sx={{ color: "#969697", mr: 1 }} />
              </InputAdornment>
            ),
          }}
          className={classes.customTextField}
          placeholder="Search"
          sx={{ marginLeft: "4rem" }}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={3}>
        <RefreshOutlinedIcon className={classes.iconStyle} />
        <ViewAgendaOutlinedIcon className={classes.iconStyle} />
        <SettingsOutlinedIcon className={classes.iconStyle} />
        <AppsOutlinedIcon
          sx={{ marginLeft: "2rem" }}
          className={classes.iconStyle}
        />
        <div
          style={{
            width: "32px",
            height: "32px",

            borderRadius: "20px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2Wz1fw-_GuYeYI8IUS3LTeWFUcdXqpwzbpa-80N-sNXHzT9lmh_4m4Ow_duqbDmaR30&usqp=CAU"
          />
        </div>
      </Stack>
    </Box>
  );
}
