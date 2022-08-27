import { createApp } from 'vue'
import App from './App.vue'
import './App.css'
import i18n from './locale/i18n'
import store from './modules/main/presentation/redux/store/store'
import router from './route/router'

import { createMetaManager } from 'vue-meta'
import { plugin as vueMetaPlugin } from "vue-meta"

import VueGtag from "vue-gtag"
import analytics from './config/analytics'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import icons from './style/icons'

const app = createApp(App)

icons()

app
	.use(i18n)
	.use(router)
	.use(store)
	.use(vueMetaPlugin)
	.use(createMetaManager())
	.use(VueGtag, {
 		config: analytics,
	})
app.component('v-icon', OhVueIcon)

app.mount('#app')

