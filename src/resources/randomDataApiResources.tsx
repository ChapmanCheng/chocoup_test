import axios from "axios";

const baseURL = "https://random-data-api.com/api/";
const params = new URLSearchParams("?size=20");

const randomDataApiResources = axios.create({ baseURL, params });

export default randomDataApiResources;
