import React, { useEffect } from "react";
import { useState } from "react";
import { axiosRequest } from "../api";
import { useParams, Link } from "react-router-dom";

export default function FriendsList() {
  const [friends, setFriends] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await axiosRequest
        .get("/friends")
        .then((res) => {
          console.log("FRIENDSLISTDATA", res.data);
          setFriends(res.data);
        })
        .catch((err) => console.log("ERROR", err.response.data.error));
    };
    fetchData();
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
                <Link to={`/friendlist/${friend.id} `}>
                  <p> {friend.name} </p>
                  <p> {friend.email} </p>{" "}
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
