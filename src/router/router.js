import Home from '../views/home'
import Login from '../views/login'
import NotFound from '../views/notFound'
import ChildHome from '../views/home/children/home'
import Scheme from '../views/scheme'

export const mainRoutes = [{
    path: '/login',
    component: Login
}, {
    path: '/404',
    component: NotFound
}, {
    path: '/home',
    component: Home,
    child: [
        {
            path: '/home/childhome',
            component: ChildHome,
        }
    ]
}, {
    path: '/scheme',
    component: Scheme
}]

export const adminRoutes = []