import { createRouter, createWebHistory } from 'vue-router';
import MessageView from '../views/MessageView.vue';
import MeetingView from '../views/MeetingView.vue';
import WorkflowView from '../views/WorkflowView.vue';
import MoreView from '../views/MoreView.vue';

const routes = [
  {
    path: '/',
    name: 'Message',
    component: MessageView
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: MeetingView
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: WorkflowView
  },
  {
    path: '/more',
    name: 'More',
    component: MoreView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;