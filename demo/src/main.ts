import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Kongponents styles
import '@kong/kongponents/dist/style.css'
// Import global custom styles
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
