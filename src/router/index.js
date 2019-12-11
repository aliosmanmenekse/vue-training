import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateProduct from '../views/CreateProduct.vue'
import Products from '../views/Products.vue'
import ProductInfo from '../views/ProductInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'create-product',
    component: CreateProduct
  },
  {
    path: '/about',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product-info',
    component: ProductInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
