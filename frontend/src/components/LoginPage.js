import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaRegEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import bcrypt from 'bcryptjs'; // مكتبة تشفير كلمات المرور

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email.trim().toLowerCase());

    if (isLogin) {
      if (user && bcrypt.compareSync(password, user.password)) {
        setMessage({ text: '✅ Welcome back! Successfully logged in.', type: 'success' });
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setTimeout(() => navigate('/'), 1000);
      } else {
        setMessage({ text: '❌ Invalid credentials. Please try again.', type: 'error' });
      }
    } else {
      if (user) {
        setMessage({ text: '❌ Email already exists. Try logging in.', type: 'error' });
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10); // تشفير كلمة المرور
        const newUser = { name: name.trim(), email: email.trim().toLowerCase(), password: hashedPassword };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setMessage({ text: '✅ Account created! Logging in...', type: 'success' });
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));
        setTimeout(() => navigate('/'), 1000);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
          <p className="text-gray-600">{isLogin ? 'Sign in to continue' : 'Get started with your account'}</p>
        </div>

        {message.text && (
          <div className={`text-center font-semibold mb-4 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300"
                placeholder="Enter your password"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full py-3 rounded-lg ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            disabled={loading}
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="text-sm font-medium text-blue-600">
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
