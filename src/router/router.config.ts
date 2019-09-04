import Welcome from '../view/Welcome/Welcome'
import Auth from '../view/Auth/Auth'
import Home from '../view/Home/Home';
import Mine from '../view/Mine/Mine'
import Add from '../view/Add/Add';
import Mall from '../view/Mall/Mall';
import Msg from '../view/Msg/Msg';

const routes = [
    {
        path: "/Welcome",
        component: Welcome
    },
    {
        path: "/Auth",
        component: Auth
    },
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/Mall",
        component: Mall
    },
    {
        path: "/Add",
        component: Add
    },
    {
        path: "/Msg",
        component: Msg
    },
    {
        path: "/Mine",
        component: Mine
    }
];

export default routes
