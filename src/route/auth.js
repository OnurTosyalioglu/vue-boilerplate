import auth from './auth.routes'

const Login = () => import('../modules/auth/presentation/layout/login/Login.vue')
const Signup = () => import('../modules/auth/presentation/layout/login/Login.vue')
const Recover = () => import('../modules/auth/presentation/layout/recover/Recover.vue')
const Confirmation = () => import('../modules/auth/presentation/layout/confirmation/Confirmation.vue')

export default [
	{
		path: auth.login,
		component: Login,
		name: 'login',
		meta: {
			auth: 'protected',
		},
	},
	{
		path: auth.signup,
		component: Signup,
		name: 'signup',
		meta: {
			auth: 'protected',
		},
	},
	{
		path: auth.recover,
		component: Recover,
		name: 'recover',
		meta: {
			auth: 'protected',
		},
	},
	{
		path: auth.confirmation,
		component: Confirmation,
		name: 'confirmation',
		meta: {
			auth: 'protected',
		},
	},
]
