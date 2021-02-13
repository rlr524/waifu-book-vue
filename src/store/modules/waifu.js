export const namespaced = true;

export const state = {
	waifus: [],
	waifu: {},
};

export const mutations = {
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

export const actions = {};
