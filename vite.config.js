import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	// server: {
	// 	port: 3000,
	// },
	plugins: [
		vue(),
		VitePWA({

		}),
	]
})
