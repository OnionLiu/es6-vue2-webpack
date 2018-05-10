import Welcome from "./views/welcome.vue";

export default [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '*',
    redirect: '/'
  }
]
