import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/home/Home';
import Favorite from '../pages/favorite/Favorite';

const PublicRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/favorite" component={Favorite} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export default PublicRouter;
