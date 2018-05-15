import React from "react";
// import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import "./app.css";

const Header = () => (
  <header>
    <ul>
      <li key="hli1">
        <NavLink to="/hi" activeClassName="is-active">
          Hi
        </NavLink>
      </li>
      <li key="hli2">
        <NavLink to="/there" activeClassName="is-active">
          There
        </NavLink>
      </li>
    </ul>
  </header>
);

const Test1 = () => <h2>hi</h2>;
const Test2 = props => {
  console.log(props);
  return <h2>there is {props.match.params.personName}</h2>;
};
const NotFound = () => (
  <h1>
    404 Not Found - <Link to="/hi">Get hi</Link>
  </h1>
);
// const routes = (
//   <Router>
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/hi" component={Test2} exact={true} />
//         <Route path="/there" component={Test1} exact={true} />
//         <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
// );

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/hi/:personName" component={Test2} exact={true} />
          <Route path="/there" component={Test1} exact={true} />
          <Route path="/:folderId" component="EmailList" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

// ReactDOM.render(
// <Provider store={store}>
//   {/* <Email /> */}
// <App />,
// </Provider>,
//   test,
//   document.getElementById("root")
// );
