import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/hello/hello';
import OverView from '@/components/overview/overview';
import Say from '@/components/say-say/say';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/overview',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/say',
      name: 'Say',
      component: Say
    }
  ]
});
