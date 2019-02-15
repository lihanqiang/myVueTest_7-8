import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import error from '@/components/error'
import home from '@/views/home'
import page1 from '@/views/page1'
import page2 from '@/views/page2'


Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: '/',
			redirect: 'login'
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/error',
			name: 'error',
			component: error
		},
		{
			path: '/page1',
			name: 'page1',
			component: page1
		},
		{
			path: '/page2',
			name: 'page2',
			component: page2
		}
	]
});

router.beforeEach((to, form, next) => {
	if(to.name != 'login'){
		//判断是否已登陆
		const current_user = localStorage.current_user;
		//若未登陆
		if(!current_user){
			next('/login');
		}
		else{
			if(to.matched.length){
				next();
			}
			else{
				next('/error');
			}
		}
	}
	else{
		localStorage.clear('current_user');
		next();
	}
})

export default router
