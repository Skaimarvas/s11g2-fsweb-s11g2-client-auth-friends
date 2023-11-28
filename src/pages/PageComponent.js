import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";

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
        <Route path="/addfriend" exact>
          <AddFriend />
        </Route>
      </Switch>
    </div>
  );
}
