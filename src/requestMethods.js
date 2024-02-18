import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmNmOGVmNjlmMzdiZmEwNDZkMzVmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzE2NjU4NCwiZXhwIjoxNzA3NDI1Nzg0fQ.xKHl_VhNsRjHDnJ8HrdLiZns-4mOs3o-1SzMBlC2i5w";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}`}
})