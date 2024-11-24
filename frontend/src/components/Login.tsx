import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Zapobiega przeładowaniu strony

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-content-center align-items-center min-h-screen">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-5 xl:w-4 justify-content-center">
        <div className="text-center mb-3">
          <img
            src="../assets/BaumgartsSoftwareServices.svg"
            alt="BSS"
            height={180}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">
            Welcome in BSS App
          </div>
        </div>

        <form
          onSubmit={handleLogin}
          className="flex flex-column align-items-center"
        >
          <InputText
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full md:w-12 lg:w-8 xl:w-6 mb-3"
          />
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputClassName="w-full"
            className="md:w-12 lg:w-8 xl:w-6 mb-3"
            toggleMask
            placeholder="Password"
            pt={{ iconField: { root: { className: "w-full" } } }}
          />
          <Button
            label="Log In"
            icon="pi pi-user"
            className="w-full md:w-12 lg:w-8 xl:w-6 mb-3"
            type="submit"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <div className="w-full p-4 text-center">
          <span className="text-600 font-medium line-height-3">
            Any question for support?
          </span>
          <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Submit a request!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
