import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import FriendsList from "./FriendsList";
import AddFriend from "./AddFriend";
import Logout from "./Logout";
import ProtectedPage from "./ProtectedPage";

export default function PageComponent() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/friendlist" exact>
          <ProtectedPage>
            <FriendsList />
          </ProtectedPage>
        </Route>
        <Route path="/addfriend" exact>
          <ProtectedPage>
            <AddFriend />
          </ProtectedPage>
        </Route>
        <Route path="/logout" exact>
          <ProtectedPage>
            <Logout />
          </ProtectedPage>
        </Route>
        <Route path="*">
          <h1> 404 Not Found Page </h1>
        </Route>
      </Switch>
    </div>
  );
}
