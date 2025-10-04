import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "49577b77c95c5137655295c3333fdd3f",
        language: "pt-BR",
        page: 1,
    }
});

export default api;