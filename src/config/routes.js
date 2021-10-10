import { RESOURCES } from './constants';
import { Main } from '../pages/Main';
import { AllByResource } from '../pages/AllByResource';

const routes = [
  {
    path: '/',
    component: Main,
  },
];

for (const resource of RESOURCES) {
  routes.push({
    path: `/all/${resource}`,
    component: AllByResource,
  });
}

export { routes };
