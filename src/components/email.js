import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./sidebar";
import SingleEmail from "./single-email";
import EmailList from "./email-list";
import "./email.css";

export default function Email() {
  return (
    <Router>
      <div className="email">
        <Sidebar />
        <main>
          <Switch>
            <Redirect from="/" to="/inbox" exact />
            <Route path="/:folderId" component={EmailList} exact />
            <Route path="/:folderId/:emailId" component={SingleEmail} exact />
            {/* <SingleEmail folderId="inbox" emailId="1" /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}
