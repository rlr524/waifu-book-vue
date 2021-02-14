import axios from "axios";

const ROOT_URL = "http://localhost:3000/";

export default {
	fetchAllWaifus() {
		return axios.get(`${ROOT_URL}waifus/`);
	},
};
