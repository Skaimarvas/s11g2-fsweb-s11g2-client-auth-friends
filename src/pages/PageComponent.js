import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import Logout from "./Logout";

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
        <Route path="/logout" exact>
          <Logout />
        </Route>
      </Switch>
    </div>
  );
}
