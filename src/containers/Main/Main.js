import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { App, Sub } from '../../routes';
import ButtonNav from "../../components/ButtonNav";
import { AnswersProvider } from '../../modules/Answers';
import s from "./Main.module.css";

export const Main = () => (
  <Router>
    <div className={s.main}>
      <div className={s.mainWrapper}>
        <Route exact path="/">
          <div className={s.row}>
            <Link to="/App" style={{ textDecoration: 'none' }}><ButtonNav>Go to calc</ButtonNav></Link>
            <Link to="/Sub" style={{ textDecoration: 'none' }}><ButtonNav>Show results</ButtonNav></Link>
          </div>
        </Route>
        <AnswersProvider>
          <Route exact path="/App" component={App} />
          <Route exact path="/Sub" component={Sub} />
        </AnswersProvider>
      </div>
    </div>
  </Router>
);
