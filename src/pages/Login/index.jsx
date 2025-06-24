import React, { useState } from 'react';
import Button from '../../components/ui/Login_Components/Button';
import InputField from '../../components/ui/Login_Components/InputField';
import { useNavigate } from 'react-router-dom';
import '../../styles/login_css/index.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clientId: '',
    userId: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.clientId.trim()) {
      newErrors.clientId = 'Client ID is required';
    }

    if (!formData.userId.trim()) {
      newErrors.userId = 'Username is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    // if (validateForm()) {
    //   // Simulate login process
    //   console.log('Login attempt with:', formData);
    //   // alert('Login successful! Welcome to Apricot Platform.');

    //   // Reset form after successful login
    //   setFormData({
    //     clientId: '',
    //     userId: '',
    //     password: '',
    //   });

    //   // Navigate to FAQ page
    // }
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  // return (
  //   <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4">
  //     <div className="w-[673px] h-[796px] bg-[#f6f6f6] rounded-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative">
  //       {/* Logo and Brand */}
  //       <div className="absolute top-[112px] left-1/2 transform -translate-x-1/2 flex items-center">
  //         <img
  //           src="/images/img_apricot_1_1.png"
  //           alt="Apricot Logo"
  //           className="w-[67px] h-[44px] mr-4"
  //         />
  //         <h1 className="text-[48px] font-medium leading-[45px] text-[#444444] font-league-spartan">
  //           apricot
  //         </h1>
  //       </div>

  //       {/* Login Form */}
  //       <form onSubmit={handleSubmit} className="absolute top-[225px] left-[100px] right-[100px]">
  //         <div className="space-y-8">
  //           {/* Client ID Field */}
  //           <div>
  //             <InputField
  //               label="Client ID"
  //               placeholder="Enter your client id"
  //               value={formData.clientId}
  //               onChange={handleInputChange('clientId')}
  //               // error={errors.clientId}
  //             />
  //           </div>

  //           {/* Username Field */}
  //           <div>
  //             <InputField
  //               label="Userid"
  //               placeholder="Enter your username"
  //               value={formData.userId}
  //               onChange={handleInputChange('userId')}
  //               // error={errors.userId}
  //             />
  //           </div>

  //           {/* Password Field */}
  //           <div>
  //             <InputField
  //               label="password"
  //               type="password"
  //               placeholder="Enter your password"
  //               value={formData.password}
  //               onChange={handleInputChange('password')}
  //               // error={errors.password}
  //             />
  //           </div>

  //           {/* Login Button */}
  //           <div className="flex justify-center pt-8">
  //             <Button
  //               type="submit"
  //               variant="primary"
  //               className="w-[179px] h-[48px] bg-[#0b60b0] text-white text-[14px] font-medium leading-[21px] rounded-[5px] font-poppins"
  //             >
  //               Login
  //             </Button>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
  // return (
  //   <div className="min-h-screen bg-white flex items-center justify-center">
  //     <div className="flex flex-col items-center justify-center">
  //       {/* Logo and Brand */}
  //       <div className="flex items-center mb-8">
  //         <img
  //           src="/images/img_apricot_1_1.png"
  //           alt="Apricot Logo"
  //           className="w-[50px] h-[35px] mr-3"
  //         />
  //         <h1 className="text-[36px] font-medium leading-[40px] text-[#444444] font-league-spartan">
  //           apricot
  //         </h1>
  //       </div>

  //       {/* Login Box */}
  //       <div className="w-[480px] bg-[#f6f6f6] rounded-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] p-10">
  //         <form onSubmit={handleSubmit} className="space-y-6">
  //           <InputField
  //             label="Client ID"
  //             placeholder="Enter your client id"
  //             value={formData.clientId}
  //             onChange={handleInputChange('clientId')}
  //           />
  //           <InputField
  //             label="Userid"
  //             placeholder="Enter your username"
  //             value={formData.userId}
  //             onChange={handleInputChange('userId')}
  //           />
  //           <InputField
  //             label="Password"
  //             type="password"
  //             placeholder="Enter your password"
  //             value={formData.password}
  //             onChange={handleInputChange('password')}
  //           />
  //           <div className="flex justify-center pt-4">
  //             <Button
  //               type="submit"
  //               variant="primary"
  //               className="w-[150px] h-[42px] bg-[#0b60b0] text-white text-[14px] font-medium leading-[21px] rounded-[5px] font-poppins"
  //             >
  //               Login
  //             </Button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-[480px] bg-[#f6f6f6] rounded-[30px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] p-10">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-8">
            <img
              src="/images/img_apricot_1_1.png"
              alt="Apricot Logo"
              className="w-[50px] h-[35px] mr-3"
            />
            <h1 className="text-[36px] font-medium leading-[40px] text-[#444444] font-league-spartan">
              apricot
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              label="Client ID"
              placeholder="Enter your client id"
              value={formData.clientId}
              onChange={handleInputChange('clientId')}
            />
            <InputField
              label="Userid"
              placeholder="Enter your username"
              value={formData.userId}
              onChange={handleInputChange('userId')}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange('password')}
            />
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="primary"
                className="w-[150px] h-[42px] bg-[#0b60b0] text-white text-[14px] font-medium leading-[21px] rounded-[5px] font-poppins"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
