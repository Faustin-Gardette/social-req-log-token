import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    pseudo: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/server/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log();

  return (
    <div className="register">
      <div className="register-content">
        <h2>S'enregistrer</h2>
        <form action="">
          <label htmlFor="">Pseudo</label>
          <input
            type="text"
            placeholder="pseudo"
            name="pseudo"
            onChange={handleChange}
          />
          <label htmlFor="">Mot de passe</label>
          <input
            type="text"
            placeholder="Mot de passe"
            name="password"
            onChange={handleChange}
          />
          <button type="submit" onClick={handleClick}>
            S'ENREGISTRER
          </button>
        </form>
        {err && err}
        <span>
          Avez-vous un compte ? <Link to="/login">Connexion</Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default Register;
