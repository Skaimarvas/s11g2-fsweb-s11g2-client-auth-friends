import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export default function AddFriend() {
  const [addFriend, setAddFriend] = useState();
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const submitHandler = (data) => {
    const dataInfo = { ...data };
  };
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label>
            <div>
              {" "}
              <span>FRIEND NAME</span>{" "}
            </div>
            <div>
              <input
                type="name"
                {...register("friendname", { required: true })}
              />
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
              <input
                type="email"
                {...register("friendemail", { required: true })}
              />
            </div>
          </label>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
