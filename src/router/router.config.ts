import Welcome from '../view/Welcome/Welcome'
import Auth from '../view/Auth/Auth'
import Home from '../view/Home/Home';
import Mine from '../view/Mine/Mine'
import Add from '../view/Add/Add';
import Mall from '../view/Mall/Mall';
import Msg from '../view/Msg/Msg';

import Note from '../view/Home/NoteDetail/NoteDetail'
import SearchPage from '../view/Home/SearchPage/SearchPage'
import EditAccountInfo from "../view/Mine/EditAccountInfo/EditAccountInfo";
import Setting from "../view/Mine/Setting/Setting";

const routes = [
  {
    path: "/welcome",
    component: Welcome
  },
  {
    path: "/Auth",
    component: Auth
  },
  {
    path: "/Home",
    component: Home,
    routes: [
      {
        path: "/Home/Note/:id",
        component: Note,
      },
      {
        path: "/Home/SearchPage",
        component: SearchPage,
      }
    ]
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
    component: Mine,
    routes: [
      {
        path: "/Mine/EditAccountInfo",
        component: EditAccountInfo,
      },
      {
        path: "/Mine/Setting",
        component: Setting,
      }
    ]
  }
];

export default routes
