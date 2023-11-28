import React from "react";

export default function Login() {
  return (
    <div>
      <div>
        <form>
          <label>
            <span>USERNAME</span>
            <input name="username" type="text" />
          </label>

          <label>
            <span>PASSWORD</span>
            <input name="password" type="password" />
          </label>
        </form>
      </div>
    </div>
  );
}
