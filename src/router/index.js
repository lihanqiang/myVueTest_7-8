import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import error from '@/components/error'

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
