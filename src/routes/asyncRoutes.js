import { AsyncComponent } from '../utils';

export const routes = [
  {
    component: AsyncComponent(() => import('../components/Page/Listing')),
    path: '/',
    exact: true,
  },
];
