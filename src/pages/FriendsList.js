import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { axiosRequest } from "../api";

export default function FriendsList() {
  const [friends, setFriends] = useState();

  useEffect(() => {
    axiosRequest
      .get("/friends")
      .then((res) => {
        console.log("FRIENDSLISTDATA", res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log("ERROR", err.response.data.error));
  }, []);

  return (
    <div>
      <h2>FRIENDS LIST</h2>
      <div>
        {friends &&
          friends.map((friend) => (
            <div key={friend.id}>
              <div>
                {" "}
                <p> {friend.name} </p>
                <p> {friend.email} </p>{" "}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
