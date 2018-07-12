import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state){
			state.count++;
		},
		decrement(state){
			state.conut--;
		}
	}
})

store.commit("increment");
console.log(store.state.count);

export default store;