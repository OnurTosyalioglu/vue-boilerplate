export default {
	loading(state) {
		state.loading = true	
		state.error = null
		state.user = null
	},

	success(state, data) {
		state.loading = null
		state.error = null
		state.user = data
	},

	error(state, data) {
		state.loading = null
		state.error = data
		state.user = null
	}
}
