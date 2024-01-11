import React, { useState } from "react";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  let submitData = (event) => {
    if (email && password) {
      event.preventDefault();
      const newAllEntry = {
        id: new Date().getTime().toString(),
        email,
        password,
      };
      setAllEntry([...allEntry, newAllEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("Enter Valid Entry");
    }
  };
  let onClickEmail = (event) => {
    setEmail(event.target.value);
  };
  let onClickPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form action="" onSubmit={submitData}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={onClickEmail}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="email"
            autoComplete="off"
            value={password}
            onChange={onClickPassword}
          />
        </div>

        <button>Login</button>
      </form>
      <div>
        {allEntry.map((event) => {
          const { id, email, password } = event;
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Loginform;
