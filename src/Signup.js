import React, { useRef, useState } from "react";
import Button from "./Button";
import "./css/login.css";
import Input from "./Input";

function Signup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [eye, setEye] = useState(false);
  const [value, setValue] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEye(eye ? false : true);
  };

  const passwordValue = (e) => {
    setValue(e.target.value);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = () => {
    // e.preventDefault();
    console.log("pr", passwordRef.current.value);
    alert(passwordRef.current.value);
  };

  return (
    <div className="signUpScreen">
      <form className="signup__form">
        <h1>Sign In</h1>
        <Input type="email" placeholder="Email" />
        <div className="pass__wrapper">
          <Input
            ref={passwordRef}
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            value={value}
            onChange={passwordValue}
          />
          {value && (
            <i
              className={`fa-solid fa-${eye ? "eye-slash" : "eye"}`}
              onClick={togglePasswordVisiblity}
            ></i>
          )}
        </div>

        <Button title="Sign In" />
        <h4>
          New to Netflix <span onClick={register}>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
