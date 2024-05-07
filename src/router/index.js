import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";
import DrinkwareComponent from "../store/pages/drinkware.component.vue";
import AccessoriesComponent from "../store/pages/accessories.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/home', component: HomeComponent, meta:{ title: 'Home' } },
        { path:'/store/collections/all-drinkware',component: DrinkwareComponent, meta:{ title: 'Drinkware' }},
        { path:'/store/collections/accessories', component: AccessoriesComponent, meta:{ title: 'Accessories' }},
        { path: "/", redirect: "home"}
    ]
});

export default router;