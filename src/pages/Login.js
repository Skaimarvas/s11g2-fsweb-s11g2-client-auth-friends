import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const submitHandler = (data) => {
    console.log("DATA", data);
    axios
      .post("http://localhost:9000/api/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          history.push("/friendlist");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold">LOGIN</h2>
      <div className="flex flex-col py-0 w-1/2">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div>
            <label className=" block text-gray-700 text-sm font-bold mb-2">
              <div>
                <span>USERNAME</span>
              </div>
              <div>
                <input
                  name="username"
                  type="text"
                  {...register("username", { required: true })}
                  className="bg-black shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.username && <p>Username is required</p>}
              </div>
            </label>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div>
                <span>PASSWORD</span>
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  {...register("password", { required: true })}
                  className="bg-black shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.password && <p>Password is required</p>}
              </div>
            </label>{" "}
          </div>
          <div>
            <button
              type="submit"
              className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {" "}
              SUBMIT{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
