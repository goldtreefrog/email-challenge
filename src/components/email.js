import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./sidebar";
import SingleEmail from "./single-email";
import EmailList from "./email-list";
import "./email.css";
import NotFound from "./not-found";

const Email = props => {
  // Find out if the URL contains one of the mailboxes contained in the state. If not, you want to fall through to the NotFound page (in router below).
  let validRoute = props.state.hasOwnProperty(window.location.href.split("/")[3]);

  console.log(props);

  return (
    <Router>
      <div className="email">
        {validRoute && <Sidebar />}
        <main>
          <Switch>
            <Redirect from="/" to="/inbox" exact />
            {validRoute && <Route path="/:folderId" component={EmailList} exact />}
            {validRoute && <Route path="/:folderId/:emailId" component={SingleEmail} exact />}
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Email;
