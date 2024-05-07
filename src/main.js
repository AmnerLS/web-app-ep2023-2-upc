import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

// Application Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css'


import Card from "primevue/card";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";


import PrimeVue from "primevue/config";
import router from './router/index.js'
import i18n from "./i18n.js";
import SelectButton from "primevue/selectbutton";
import Rating from "primevue/rating";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";


createApp(App)
    .use(router)
    .use(i18n)
    .use(PrimeVue,{ripple: true})
    .component('pv-card',Card)
    .component('pv-button',Button)
    .component('pv-sidebar',Sidebar)
    .component('pv-toolbar',Toolbar)
    .component('pv-select-button',SelectButton)
    .component('pv-rating',Rating)
    .component('pv-splitter',Splitter)
    .component('pv-splitter-panel',SplitterPanel)
    .mount('#app')
