import api from "../../api/DataService";

export const state = {
	waifus: [],
};

const getters = {
	getWaifus: (state) => state.waifus,
};

const mutations = {
	setWaifus: (state, waifus) => {
		state.waifus = waifus;
	},
};

const actions = {
	useWaifus: async ({ commit }) => {
		const response = await api.fetchAllWaifus();
		commit("setWaifus", response.data);
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
