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
    console.log("ADDFRIEND", data);
    axiosRequest
      .post("/friends", data)
      .then((res) => {
        console.log("ADDFRIEND RESPONSE", res);
        setTimeout(history.push("/friendlist"), 3000);
      })
      .catch((err) => console.log("ADDFRIEND ERROR", err.response.data.error));
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <h2>ADD A FRIEND</h2>
      <div className="flex flex-col py-0 w-1/2">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div>
                {" "}
                <span>FRIEND NAME</span>{" "}
              </div>
              <div>
                <input
                  type="name"
                  {...register("name", { required: true })}
                  className="bg-black shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div>
                {" "}
                <span>FRIEND EMAIL</span>{" "}
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="bg-black shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div>
                {" "}
                <span>FRIEND AGE</span>{" "}
              </div>
              <div>
                <input
                  type="number"
                  {...register("age", { required: true })}
                  className="bg-black shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </label>
            <button
              type="submit"
              className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
