import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Retrieve = () => {
  const [token, setToken] = useState('');
  const [info, setInfo] = useState('');
  const [res, setRes] = useState('');

  const submithandler = (e) => {
    e.preventDefault();

    if (!token.trim()) {
      setRes('Enter a token');
      setInfo('');
      return;
    }

    axios
      .get(`https://infoeasy-backend.onrender.com/retrieve/${token}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        if (res.data.msg === 'sucess') {
          setRes('');
          setInfo(res.data.result);
        } else {
          setInfo('');
          setRes(res.data.msg);
        }
      })
      .catch((err) => {
        console.error(err);
        setRes('Server error. Try again.');
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-400 min-h-screen flex items-center justify-center px-4">
        <div className="bg-blue-100 w-full max-w-md rounded-lg shadow-lg p-5">
          <h2 className="text-center text-xl font-semibold mb-4 text-blue-800">
            Retrieve Information
          </h2>

          <form onSubmit={submithandler} className="space-y-3">
            <div>
              <label htmlFor="tid" className="block text-sm font-medium text-blue-900 mb-1">
                Enter Token
              </label>
              <input
                type="text"
                id="tid"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter token"
                onChange={(e) => setToken(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>

            {res && (
              <p className="text-center text-sm text-red-600">
                {res}
              </p>
            )}

            <div>
              <label htmlFor="info" className="block text-sm font-medium text-blue-900 mb-1">
                Retrieved Data
              </label>
              <textarea
                id="info"
                className="w-full h-28 border rounded px-3 py-2 resize-none bg-gray-100"
                value={info}
                readOnly
                disabled={!info}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Retrieve;
