import axios from "axios";

const baseUrl = "http://localhost:5000";

export function getAllKeeps(setAllKeeps) {
  axios.get(baseUrl).then((data) => {
    console.log(data);
    setAllKeeps(data);
  });
}

export function saveKeep(title, text, setAllKeeps) {
  //   const title = title || text;
  axios.post(`${baseUrl}/save`, { title, text }).then((data) => {
    console.log(data);
    getAllKeeps(setAllKeeps);
  });
}

export function updateKeep(title, text, setAllKeeps, _id) {
  //   const title = title || text;
  axios.post(`${baseUrl}/update`, { _id, title, text }).then((data) => {
    console.log(data);
    getAllKeeps(setAllKeeps);
  });
}

export function deleteKeep(_id, setAllKeeps) {
  axios.post(`${baseUrl}/delete`, { _id }).then((data) => {
    console.log(data);
    getAllKeeps(setAllKeeps);
  });
}
