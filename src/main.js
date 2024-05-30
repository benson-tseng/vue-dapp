// import './assets/main.css'
import './assets/font.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.config.globalProperties.$provider = '123'
app.config.globalProperties.$signer = '123'

app.use(vuetify)
app.use(router)

app.mount('#app')
