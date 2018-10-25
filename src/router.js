import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';

Vue.use(Router);

let router = new Router({ 
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { 
                requiresAuth: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: { 
                requiresAuth: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp,
            meta: { 
                guest: true
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn,
            meta: { 
                guest: true
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (window.localStorage.getItem('access-token') == null) {
            next({ name: 'signin' })
        } else {
            next();
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(window.localStorage.getItem('access-token') == null){
            next()
        } else {
            next({ name: 'home'})
        }
    } else {
        next() 
    }
});

export default router;
