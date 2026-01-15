import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Send = () => {
  const [info, setInfo] = useState('');
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [res, setRes] = useState('');

  const arr = [...'0123456789abcdef'];

  const tokencode = () => {
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += arr[Math.floor(Math.random() * arr.length)];
    }
    return code;
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (!info.trim()) {
      setRes('Enter information');
      return;
    }

    const newtoken = tokencode();
    setToken(newtoken);

    axios
      .post(
        'http://localhost:8314/send',
        { info, token: newtoken },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      .then((res) => {
        if (res.data.msg === 'sucess') {
          setRes('');
          setTimeout(() => {
            setInfo('');
            setToken('');
          }, 60000);
        } else {
          setRes(res.data.msg);
          setToken('');
        }
      })
      .catch(() => setRes('Server error'));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8314/user', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => setName(res.data.msg));
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="bg-blue-400 font-bold px-4 py-2 text-white text-center sm:text-left">
        Welcome to {name}
      </h1>

      <div className="bg-blue-400 min-h-screen flex items-center justify-center px-4 capitalize">
        <div className="bg-blue-100 w-full max-w-sm sm:max-w-md rounded-lg shadow-lg p-5 space-y-4">
          <h1 className="text-lg font-semibold text-center text-blue-900">
            Send the Data
          </h1>

          <form onSubmit={submithandler} className="space-y-3">
            <div>
              <label htmlFor="t" className="block text-sm font-medium text-blue-900 mb-1">
                Enter Information
              </label>
              <textarea
                id="t"
                className="w-full h-28 border rounded px-3 py-2 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>

          {res && (
            <p className="text-center text-sm text-red-600">
              {res}
            </p>
          )}

          {token && (
            <div className="bg-white rounded p-3 text-center break-all">
              <p className="text-sm font-medium text-blue-800">Token</p>
              <p className="font-bold text-blue-900">{token}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Send;
