import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FriendsList from "./FriendsList";

export default function PageComponent() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/friendlist" exact>
          <FriendsList />
        </Route>
      </Switch>
    </div>
  );
}
