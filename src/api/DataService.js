import axios from "axios";

const ROOT_URL =
	"https://us-central1-emiya-firebase-waifu-api.cloudfunctions.net/app/";

export default {
	fetchAllWaifus() {
		return axios.get(`${ROOT_URL}waifus/`);
	},
};
