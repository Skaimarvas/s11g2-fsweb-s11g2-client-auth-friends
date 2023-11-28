import React, { useEffect, useState } from "react";
import { axiosRequest } from "../api";
import { useParams } from "react-router-dom";

export default function Characters(props) {
  const [userFriend, setUserFriend] = useState();
  const { id } = useParams();

  useEffect(() => {
    axiosRequest
      .get(`/friends/${id}`)
      .then((res) => {
        console.log("CHARACTER", res.data);
        setUserFriend(res.data);
      })
      .catch((err) => console.log("CHARACTERERROR", err));
  }, []);

  return (
    <div>
      Characters
      {userFriend && (
        <div>
          <p> Name: {userFriend.name} </p>
          <p> Email: {userFriend.email} </p>
          <p> Age: {userFriend.age} </p>
        </div>
      )}
    </div>
  );
}
