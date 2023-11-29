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
    <div className="flex flex-col justify-center items-center mt-10">
      Çıkış yapmak istediğinizden emin misiniz?
      <div className="flex justify-evenly mt-10 ">
        <button
          onClick={() => logoutHandler()}
          className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Evet
        </button>
        <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Hayır
        </button>
      </div>
    </div>
  );
}
