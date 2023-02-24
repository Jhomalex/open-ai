import { createRouter, createWebHistory } from 'vue-router';
import ChatView from '../views/ChatView.vue';
import WelcomeView from '../views/WelcomeView.vue';

const router = createRouter({
	history: createWebHistory('#'),
	routes: [
		{
			path: '/welcome',
			name: 'welcome',
			component: WelcomeView,
		},
		{
			path: '/chat/:username',
			name: 'chat',
			component: ChatView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
		},
	],
});

export default router;
