import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviesdb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTU3N2I3N2M5NWM1MTM3NjU1Mjk1YzMzMzNmZGQzZiIsIm5iZiI6MTc1OTQzNDgwMi4xMDIwMDAyLCJzdWIiOiI2OGRlZDgzMmYyMTYxODk5MDU2ZDUzZDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ui3cec55GEH7kY9lpw3NimRoulxBhCH0EsBF_hA8sNI', 
        accept: 'application/json'
    },
    params: {
        api_key: '49577b77c95c5137655295c3333fdd3f',
        language: 'pt-BR',
        page: 1,
    }
})
export default api;