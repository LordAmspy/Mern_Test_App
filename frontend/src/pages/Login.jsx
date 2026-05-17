
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await loginUser(formData);

      localStorage.setItem(
        "token",
        response.data.token
      );

      setToken(response.data.token);

      alert("Login successful");

      navigate("/dashboard");

    } catch (error) {

      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">

      <h1 className="text-3xl font-bold mb-4">
        Login
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
