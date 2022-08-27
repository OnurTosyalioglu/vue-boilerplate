import { createRouter, createWebHistory }  from "vue-router";

import PrivateIndex from './private.index'
import PublicIndex from './public.index'
import ProtectedIndex from './protected.index'
import error from './error'

const router = createRouter({
  history: createWebHistory(),
	routes: [
		...PrivateIndex,
		...PublicIndex,
		...ProtectedIndex,
		...error,
	],
});

router.beforeEach(async (to, from, next) => {
	if (to.meta.auth !== 'public') {

	}

	next()
});

export default router;
