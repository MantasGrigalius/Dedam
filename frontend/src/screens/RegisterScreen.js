import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Slaptažodis ir Patvirtinti slaptažodį nesutampa")
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sukurti paskyrą</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Vardas</label>
          <input
            type="text"
            id="name"
            placeholder="Vardas"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Elektroninis paštas</label>
          <input
            type="email"
            id="email"
            placeholder="Elektroninis paštas"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Slaptažodis</label>
          <input
            type="password"
            id="password"
            placeholder="Slaptažodis"
            minlength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Patvirtinti slaptažodį</label>
          <input
            type="password"
            id="Password"
            placeholder="Patvirtinti slaptažodį"
            minlength="8"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Registruotis
          </button>
        </div>
        <div>
          <label />
          <div>
            Jau turite paskyrą? <Link to={`/signin?redirect=${redirect}`}>Prisijungti</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
