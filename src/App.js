import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './config/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route exact key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export { App };
