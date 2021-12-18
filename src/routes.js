import GitContaiter from "./components/gitContainer/GitContaiter";


export const routes = [
  {
    path: '/',
    component: <GitContaiter />,
  },
  {
    path: '/:id',
    component: 'Item',
  }
]