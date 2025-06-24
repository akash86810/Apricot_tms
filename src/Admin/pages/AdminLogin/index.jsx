import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/adminlogin/Button';
import EditText from '../../components/adminlogin/EditText';
import '../../../styles/admin_login/index.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <div className="flex flex-row w-full h-screen bg-white">
      {/* Left Section */}
      <div className="flex flex-col flex-1 bg-global-2">
        {/* Logo */}
        <div className="pt-16 pb-8 flex justify-center items-center">
          <img
            src="../../../images/img_apricot_1_1.png"
            alt="Apricot Logo"
            className="w-[80px] h-[50px] object-contain"
          />
          <h1 className="ml-4 text-3xl font-league-spartan text-global-3">apricot</h1>
        </div>

        {/* Illustration */}
        <div className="flex flex-1 justify-center items-center px-6 overflow-hidden">
          <img
            src="../../../images/img_image_1.png"
            alt="Customer Support Illustration"
            className="object-scale-down max-h-[50vh] w-auto"
          />
        </div>
      </div>

      {/* Right Section – Login Form */}
      <div className="flex flex-col justify-center w-[480px] bg-global-1 px-12 py-8">
        <div className="space-y-6 w-full max-w-md mx-auto">
          {/* Username Field */}
          <div className="space-y-3">
            <label className="text-base font-poppins text-global-2">Username</label>
            <EditText
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Send OTP Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setOtp('')}
              className="px-6 py-2 bg-global-1 text-base font-poppins text-global-1 border border-global-1 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Send OTP
            </button>
          </div>

          {/* OTP Field */}
          <div className="space-y-3">
            <label className="text-base font-poppins text-global-2">OTP</label>
            <EditText
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Login Button */}
          <div className="pt-8 flex justify-center">
            <Button onClick={() => navigate('/admin')} className="w-full max-w-[200px]">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
