import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "appllication/json"
  },
  timeout: 10000
});

export default {
  getWaifus() {
    return apiClient.get("/waifus");
  },
  getWaifu(id) {
    return apiClient.get("/waifus/" + id);
  },
  postWaifu(waifu) {
    return apiClient.post("/waifus", waifu);
  }
};
