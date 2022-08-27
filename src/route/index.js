import index from './index.routes'

const Home = () => import('../modules/index/presentation/layout/home/Home.vue')
const AboutUs = () => import('../modules/index/presentation/layout/aboutUs/AboutUs.vue')
const Contact = () => import('../modules/index/presentation/layout/contact/Contact.vue')
const Gdpr = () => import('../modules/index/presentation/layout/gdpr/Gdpr.vue')
const Team = () => import('../modules/index/presentation/layout/team/Team.vue')
const Cookies = () => import('../modules/index/presentation/layout/cookies/Cookies.vue')
const Faq = () => import('../modules/index/presentation/layout/faq/Faq.vue')
const Career = () => import('../modules/index/presentation/layout/career/Career.vue')

export default [
	{
		path: index.home,
		component: Home,
		name: 'home',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.aboutUs,
		component: AboutUs,
		name: 'aboutUs',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.contact,
		component: Contact,
		name: 'contact',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.team,
		component: Team,
		name: 'team',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.faq,
		component: Faq,
		name: 'faq',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.career,
		component: Career,
		name: 'career',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.gdpr,
		component: Gdpr,
		name: 'gdpr',
		meta: {
			auth: 'public',
		},
	},
	{
		path: index.cookies,
		component: Cookies,
		name: 'cookies',
		meta: {
			auth: 'public',
		},
	},
]
