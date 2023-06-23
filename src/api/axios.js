import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "de49ced752214cb1dac456f369f8933a",
    language: "ko-KR",
  },
});

export default instance;
