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

const routes = [
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
        path: '/about',
        name: 'about',
        component: AboutPage,
    },
    {
        path: '/a/reservation',
        name: 'adminReservation',
        component: AdminCalendar,
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
export default router
  