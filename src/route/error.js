const NotFound = () => import('../modules/error/presentation/layout/NotFound.vue')

export default [
	{
		path: '/:pathMatch(.*)*',
		component: NotFound,
		name: 'notFound',
		meta: {
			auth: 'public',
		},
	},
]
