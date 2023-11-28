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
    <div>
      <h2>LOGIN</h2>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>
              <div>
                <span>USERNAME</span>
              </div>
              <div>
                <input
                  name="username"
                  type="text"
                  {...register("username", { required: true })}
                />
                {errors.username && <p>Username is required</p>}
              </div>
            </label>
          </div>
          <div>
            <label>
              <div>
                <span>PASSWORD</span>
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required</p>}
              </div>
            </label>{" "}
          </div>
          <div>
            <button type="submit"> SUBMIT </button>
          </div>
        </form>
      </div>
    </div>
  );
}
