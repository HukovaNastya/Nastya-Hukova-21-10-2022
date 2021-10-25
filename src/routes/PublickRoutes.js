import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import Favorite from '../pages/favorite/Favorite';

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
