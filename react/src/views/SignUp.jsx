import { Link } from "react-router-dom";
export default function SignUp() {
  const onSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form action="" onSubmit={onSubmit}>
          <h1 className="title">Sign up for free</h1>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
          <button className="btn btn-block">Sign up</button>
          <p className="message">
            Already Register?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
