import GitContaiter from "./components/gitContainer/GitContaiter";
import GitRepo from "./components/gitRepo/GitRepo";


export const routes = [
  {
    path: '/',
    exact: true,
    component: <GitContaiter />,
  },
  {
    path: '/:owner/:repo',
    component: <GitRepo />,
  }
]