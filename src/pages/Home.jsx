import { Box, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddKeepButton from "../components/AddKeepButton";
import KeepInputField from "../components/KeepInputField";
import KeepItem from "../components/KeepItem";
import {
  deleteKeep,
  getAllKeeps,
  saveKeep,
  updateKeep,
} from "../utils/Network";
import KeepUpdateDialog from "../components/KeepUpdateDialog";

const useStyles = makeStyles({
  iconStyle: {
    color: "#8f8f91",
    cursor: "pointer",
    fontSize: "25px",
  },
});

export default function Home() {
  const [allKeeps, setAllKeeps] = useState([]);
  const [createKeep, setCreateKeep] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [currUpdateId, setCurrUpdateId] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    getAllKeeps(setAllKeeps);
  }, []);

  function handleCreateKeep() {
    setCreateKeep(false);
    if (title !== "" || text !== "") {
      saveKeep(title, text, setAllKeeps);
      setText("");
      setTitle("");
    }
  }

  function handleDelete(_id, e) {
    e.stopPropagation();
    deleteKeep(_id, setAllKeeps);
  }

  function handleUpdate() {
    updateKeep(title, text, setAllKeeps, currUpdateId);
    setIsUpdate(false);
  }

  function handleUpdateDialog(item) {
    setIsUpdate(true);
    setText(item.text);
    setTitle(item.title);
    setCurrUpdateId(item._id);
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* vertical sidebar */}
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
      {/* main home area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <div style={{ width: "auto" }}>
          {createKeep ? (
            <KeepInputField
              onClick={handleCreateKeep}
              setText={setText}
              setTitle={setTitle}
            />
          ) : (
            <AddKeepButton onClick={() => setCreateKeep(true)} />
          )}
        </div>
        <KeepUpdateDialog
          handleDialog={isUpdate}
          text={text}
          title={title}
          setTitle={setTitle}
          setText={setText}
          handleEdit={handleUpdate}
        />
        {/* notes area */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "start",
            width: "90%",
            marginTop: "4rem",
            // border: "2px solid",
            // height: "80%",
            gap: "1rem",
          }}
        >
          {allKeeps.data?.map((item) => (
            <KeepItem
              key={item._id}
              title={item.title}
              text={item.text}
              handleDelete={(e) => handleDelete(item._id, e)}
              // handleUpdate={() => handleUpdate(item)}
              handleDialog={() => handleUpdateDialog(item)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
