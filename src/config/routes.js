import { RESOURCES } from './constants';
import { Main } from './pages/Main';
import { AllByResource } from './pages/AllByResource';

const routes = [
  {
    path: '/',
    component: Main,
  },
];

RESOURCES.map((resource) =>
  routes.push({
    path: `all/${resource}`,
    component: AllByResource,
  })
);

export { routes };
