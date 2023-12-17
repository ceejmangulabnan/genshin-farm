import axios from "axios";

const fetchTalentBooks = () => {
  axios
    .get("https://genshin.jmp.blue/materials/talent-book/")
    .then((response) => {
      return response;
    });
  // .then((data) => {
  //   console.log(data);
  // });
};

export default { fetchTalentBooks };
