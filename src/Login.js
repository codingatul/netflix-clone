import React, { useState } from "react";
import Button from "./Button";
import "./css/login.css";
import img from "./image/netflix.jpeg";
import Input from "./Input";
import Signup from "./Signup";

function Login() {
  const [SignIn, setSignIn] = useState(false);
  // const [text, settext] = useState("");

  const showSignUp = (e) => {
    e.preventDefault();
    setSignIn(true);
  };

  return (
    <div className="login">
      <div className="login__header">
        <img src={img} alt="" className="login__logo" />
        <Button title="sign in" />
      </div>
      <div className="login__body">
        {SignIn ? (
          <Signup />
        ) : (
          <>
            {/* <h1>{text}</h1> */}
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login__form" onSubmit={showSignUp}>
              <Input
                type="text"
                placeholder="EmailAddress"
                // value={text}
                // setvalue={settext}
              />

              <Button title="get started" />
            </form>
          </>
        )}
      </div>
      <div className="login__gradient"></div>
    </div>
  );
}

export default Login;
