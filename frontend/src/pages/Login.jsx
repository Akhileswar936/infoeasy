import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8314/login', { email, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          navigate('/send');
        } else {
          setMsg(res.data.msg);
        }
      })
      .catch(() => setMsg('Server error'));
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-violet-600 px-4 capitalize">
        <div className="bg-violet-300 w-full max-w-sm sm:max-w-md p-5 rounded-lg shadow-lg space-y-4">
          <h1 className="text-xl font-semibold text-center text-violet-900">
            Login
          </h1>

          <form onSubmit={submithandler} className="space-y-3">
            <div>
              <label htmlFor="e" className="block text-sm font-medium mb-1">
                Enter Email
              </label>
              <input
                type="email"
                id="e"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="p" className="block text-sm font-medium mb-1">
                Enter Password
              </label>
              <input
                type="password"
                id="p"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition"
            >
              Submit
            </button>
          </form>

          {msg && (
            <p className="text-center text-sm text-blue-800">
              {msg}
            </p>
          )}

          <p className="text-center text-sm">
            Create an account?{' '}
            <Link to="/register" className="font-bold text-violet-800">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
