import axios from "axios";

const ROOT_URL = "https://polar-refuge-05452.herokuapp.com/";

export default {
	fetchAllWaifus() {
		return axios.get(`${ROOT_URL}waifus/`);
	},
};
