import { createApp } from 'vue'
import App from './App.vue'

import {store} from './store';

const app = createApp(App)

// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)

app.mount('#app')