import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import Favorite from '../pages/favorite/favorite';

const PublicRouter = ({ children }) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/favorite" component={Favorite} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default PublicRouter;
