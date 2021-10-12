import { RESOURCES } from './constants';
import { Main } from '../pages/Main';
import { AllByResource } from '../pages/AllByResource';
import { OneByResource } from '../pages/OneByResource';

const routes = [
  {
    path: '/',
    component: Main,
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
