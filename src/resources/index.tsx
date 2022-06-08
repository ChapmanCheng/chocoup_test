import axios from "axios";

const baseURL = "https://random-data-api.com/api/";
const params = new URLSearchParams("?size=20");

const instance = axios.create({ baseURL, params });

export default instance;
