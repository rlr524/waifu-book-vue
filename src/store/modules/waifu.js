// import api from "../../api/DataService";

export const state = {
	waifus: [],
};

const getters = {
	getWaifus: (state) => state.waifus,
};

const mutations = {
	ADD_WAIFU(state, waifu) {
		state.waifus.push(waifu);
	},
	SET_WAIFUS(state, waifus) {
		state.waifus = waifus;
	},
	SET_WAIFU(state, waifu) {
		state.waifu = waifu;
	},
};

const actions = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
