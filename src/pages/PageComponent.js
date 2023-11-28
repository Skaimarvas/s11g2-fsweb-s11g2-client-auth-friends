import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

export default function PageComponent() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
