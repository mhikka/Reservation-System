import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gAuthPlugin from 'vue3-google-oauth2';
import { registerLicense } from '@syncfusion/ej2-base';
// import VCalendar from 'v-calendar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

registerLicense("ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xLe0x0RWFab1Z6d1ZMYllBJAtUQF1hSn5SdENhWXxacXxVTmNY");
const app = createApp(App).use(router);

let gauthClientId = '419495325412-v9pcnjtdjassi19cmhk7q8ge457iisso.apps.googleusercontent.com';
// app.use(gAuthPlugin,{
//     clientId: gauthClientId,
// })

// let gauthClientId = '976977201109-avjdhuu7onnok9c0g5i5p2mjr31oioj8.apps.googleusercontent.com';
let API_KEY ='AIzaSyBWQSzuiNmUffyVNZFannNdQNeI1LAIiTM';

const SCOPES = ['https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile'];
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  apiKey: API_KEY,
  scope: SCOPES.join(' '),
  access_type: "offline",
  prompt: 'consent',
  plugin_name: 'classroomify'
})

// app.user(VCalendar)

app.mount('#app')
