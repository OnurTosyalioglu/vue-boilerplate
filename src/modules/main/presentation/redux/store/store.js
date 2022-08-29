import { createStore } from "vuex";
import auth from '../../../../auth/presentation/redux/store/store'

const store = createStore({
  modules: {
		auth,
  },
});

export default store;
