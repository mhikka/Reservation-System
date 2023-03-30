import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import UserHome from '../views/UserHome.vue'
import ReservationPage from '../views/ReservationPage.vue'
import AdminHome from '../views/AdminHome.vue'
import HistoryLogs from '../views/HistoryLogs.vue'
import AboutPage from '../views/AboutPage.vue'
import AdminCalendar from '../views/AdminCalendar.vue'
import PageReload from '../views/PageReload.vue'
import CalendarCarousel from '../views/CalendarCarousel.vue'
import AboutPageUser from '../views/AboutPageUser.vue'
import InventoryPage from '../views/InventoryPage.vue'
import AdvisoryPage from '../views/AdvisoryPage.vue'
import TryCarousel from '../views/TryCarousel.vue'
import reloadDb from '../views/reloadDb.vue'

const routes = [
    {
        path: '/r',
        name: 'RedirectPage',
        component: RedirectPage,
    },
    {
        path: '/',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/u/home',
        name: 'home',
        component: UserHome,
    },
    {
        path: '/u/reservation',
        name: 'userReservation',
        component: ReservationPage,
    },
    {
        path: '/a/home',
        name: 'adminHome',
        component: AdminHome,
    },
    {
        path: '/a/history',
        name: 'history',
        component: HistoryLogs,
    },
    {
        path: '/a/about',
        name: 'about',
        component: AboutPage,
    },
    {
        path: '/u/about',
        name: 'aboutUser',
        component: AboutPageUser,
    },
    {
        path: '/a/reservation',
        name: 'adminReservation',
        component: AdminCalendar,
    },
    {
        path: '/a/inventory',
        name: 'inventory',
        component: InventoryPage,
    },
    {
        path: '/a/advisory',
        name: 'advisory',
        component: AdvisoryPage,
    },
    {
        path: '/u/reservation',
        name: 'reload',
        component: PageReload,
    },
    {
        path: '/viewCalendar',
        name: 'CalendarCarousel',
        component: CalendarCarousel,
    },
    {
        path: '/tryCarousel',
        name: 'tryCarousel',
        component: TryCarousel,
    },
    {
        path: '/reload',
        name: 'reloadDb',
        component: reloadDb,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router
  