import axios from "axios";

const local_enviroment = "http://localhost:8080";

const api = axios.create({
    baseURL: local_enviroment
});

export default api;