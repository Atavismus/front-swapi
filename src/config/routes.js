import { RESOURCES } from './constants';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { AllByResource } from '../pages/AllByResource';
import { OneByResource } from '../pages/OneByResource';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
];

for (const resource of RESOURCES) {
  routes.push(
    {
      path: `/${resource}`,
      component: AllByResource,
    },
    {
      path: `/${resource}/:id`,
      component: OneByResource,
    }
  );
}

export { routes };
