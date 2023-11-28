import React from "react";
import { axiosRequest } from "../api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Logout() {
  const history = useHistory();
  const logoutHandler = () => {
    axiosRequest
      .post("/logout")
      .then((res) => {
        console.log("LOGOUTRESDATA", res.data.token);
        localStorage.removeItem("token");
        setTimeout(() => {
          history.push("/login");
        }, 1000);
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
