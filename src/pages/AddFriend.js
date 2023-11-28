import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import randomAge from "random-age";
import { axiosRequest } from "../api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddFriend() {
  const [addFriend, setAddFriend] = useState("");
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const history = useHistory();

  const submitHandler = (data) => {
    const dataInfo = { ...data, age: randomAge() };
    console.log("ADDFRIEND", dataInfo);
    axiosRequest
      .post("/friends", dataInfo)
      .then((res) => {
        console.log("ADDFRIEND RESPONSE", res);
        setTimeout(history.push("/friendlist"), 1000);
      })
      .catch((err) => console.log("ADDFRIEND ERROR", err.response.data.error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>
            <div>
              {" "}
              <span>FRIEND NAME</span>{" "}
            </div>
            <div>
              <input type="name" {...register("name", { required: true })} />
            </div>
          </label>
        </div>
        <div>
          <label>
            <div>
              {" "}
              <span>FRIEND EMAIL</span>{" "}
            </div>
            <div>
              <input type="email" {...register("email", { required: true })} />
            </div>
          </label>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
