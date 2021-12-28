import "./login.scss";
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import {Link} from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMayZNEpc-L9eSKWJjCDtLlSWMyQWTea3Hg&usqp=CA"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number"  onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
          <button className="loginButton" type= "button" onClick={handleLogin}>Sign In</button>
          <span>
            New to Netflix?
            <Link to="/register">
             <b>Sign up now.</b>
             </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
