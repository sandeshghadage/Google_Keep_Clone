import React from "react";
import { Box, Stack, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "7vh",
        borderBottom: "1px solid #4b4e53",
        padding: "0rem 2rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <MenuIcon />
        <div style={{ width: "40px", height: "40px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          />
        </div>
        <div style={{ fontSize: "24px", marginLeft: "8px" }}>Keep</div>
        <TextField />
      </Stack>
    </Box>
  );
}
