import axios from "axios";
import e from "cors";
const baseURL = "http://localhost:3000/auth";
const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default instance;
