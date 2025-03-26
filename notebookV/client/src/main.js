import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import 'lib-flexible/flexible.js'
import { Button,Form, Field, CellGroup,Icon,Uploader,ActionSheet,Popup,Picker } from 'vant';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon);
app.use(Uploader);
app.use(ActionSheet);
app.use(Popup);
app.use(Picker);
app.mount('#app')



