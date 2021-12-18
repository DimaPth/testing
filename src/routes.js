import GitContaiter from "./components/gitContainer/GitContaiter";
import GitRepo from "./components/gitRepo/GitRepo";


export const routes = [
  {
    path: '/',
    component: <GitContaiter />,
  },
  {
    path: '/:id',
    component: <GitRepo />,
  }
]