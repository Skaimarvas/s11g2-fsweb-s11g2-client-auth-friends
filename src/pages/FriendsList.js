import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { set } from "react-hook-form";

export default function FriendsList() {
  const [friends, setFriends] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        console.log("FRIENDSLISTDATA", res.data);
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  return (
    <div>
      {" "}
      <h2>FRIENDS LIST</h2>{" "}
      <div>
        {" "}
        {friends &&
          friends.map((friend) => {
            <div key={friend.id}>
              <p> {friend.name} </p>
              <p> {friend.email} </p>
            </div>;
          })}{" "}
      </div>
    </div>
  );
}
