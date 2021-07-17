import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import MitraInfo from '../views/MitraInfo.vue'
import Transaction from '../views/Transaction.vue'
import EditProfile from '../views/EditProfile.vue'
import Login from '../views/Login.vue'
import MitraInfoDetail from '../views/MitraInfoDetail.vue'
import Ads from '../views/Ads.vue'
import DetailsMenu from '../views/DetailsMenu.vue'

Vue.use(VueRouter)



const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/mitrainfo",
    name: "mitrainfo",
    component: MitraInfo,
  },
  {
    path: "/transaction",
    name: "transaction",
    component: Transaction,
  },
  {
    path: "/editprofile",
    name: "editprofile",
    component: EditProfile,
  },
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/mitrainfodetail/:id",
    name: "mitrainfodetail",
    component: MitraInfoDetail,
  },
  {
    path: "/ads",
    name: "ads",
    component: Ads,
  },
  {
    path: "/detailsmenu/:order_id",
    name: "detailsmenu",
    component: DetailsMenu,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
