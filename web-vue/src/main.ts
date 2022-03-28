import { createApp } from 'vue';
import App from './app';
import '@/styles/index.scss';
import router from './routes';

const app = createApp(App);
// 注册路由
app.use(router);
// 挂载app
app.mount('#root');
