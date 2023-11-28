import React from "react";
import { axiosRequest } from "../api";

export default function Logout() {
  const logoutHandler = () => {
    axiosRequest
      .post("/logout")
      .then((res) => {
        console.log("LOGOUTRESDATA", res.data.token);
        localStorage.removeItem("token");
      })
      .catch((err) => console.log("LOGOUTERROR", err));
  };

  return (
    <div>
      Çıkış yapmak istediğinizden emin misiniz?
      <button onClick={() => logoutHandler()}>Evet</button>
      <button>Hayır</button>
    </div>
  );
}
