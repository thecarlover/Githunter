import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirectToMain, setRedirectToMain] = useState(false);

  const handleEmailPasswordSignIn = async (e) => {
    e.preventDefault();
    try {
      await doSignInWithEmailAndPassword(email, password);
      setRedirectToMain(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      setRedirectToMain(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (redirectToMain) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleEmailPasswordSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center my-4">
          <span className="text-gray-400 mx-2">or</span>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
