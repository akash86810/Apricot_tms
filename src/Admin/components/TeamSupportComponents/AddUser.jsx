import React, { useState } from 'react';
import AdminHeader from '../AdminHeader';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
  const [activeTab, setActiveTab] = useState('user');
const navigate = useNavigate();

  const renderInput = (label, type = 'text', colSpan = 1) => (
    <div className={`flex flex-col col-span-${colSpan}`}>
      <label className="text-sm text-gray-700 mb-1">{label}</label>
      <input type={type} placeholder={label} className="input-style" />
    </div>
  );

  return (
    <>
      <div className="adduser min-h-screen bg-gray-50 px-4 py-4 sm:px-6 lg:px-10">
        <AdminHeader />

        {/* Back Button */}
        <button
  onClick={() => navigate('/support-team')}
  className="mt-4 mb-6 inline-flex items-center text-sm border rounded px-3 py-1 hover:bg-gray-100"
>
  ← Back
</button>

        {/* Tabs */}
        <div className="border-b flex gap-8 mb-6 flex-wrap">
          <button
            className={`pb-2 border-b-2 ${
              activeTab === 'user'
                ? 'border-blue-600 text-blue-600 font-medium'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('user')}
          >
            User Details
          </button>
          <button
            className={`pb-2 border-b-2 ${
              activeTab === 'address'
                ? 'border-blue-600 text-blue-600 font-medium'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab('address')}
          >
            Address Details
          </button>
        </div>

        {/* Form Content */}
        {activeTab === 'user' ? (
          <>
            {[
              ['User id', 'Username', 'First Name', 'Middle Name', 'Last Name'],
              ['Role', 'Salute', 'User Email', 'Mobile Number', 'Whatsapp No'],
              ['Extension Number', 'Valid from', 'Valid To', 'Joining Date', 'Resignation Date'],
            ].map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-4">
                {row.map((label, i) => {
                  const field = {
                    label,
                    type: ['Valid from', 'Valid To', 'Joining Date', 'Resignation Date'].includes(label)
                      ? 'date'
                      : label === 'User Email'
                      ? 'email'
                      : ['Role', 'Salute'].includes(label)
                      ? 'select'
                      : 'text',
                    options: ['Role', 'Salute'].includes(label) ? [`Select ${label}`] : undefined,
                  };

                  return (
                    <div key={i} className="flex flex-col mb-16 mr-10" >
                      <label className="text-sm text-gray-700 mb-1">{field.label}</label>
                      {field.type === 'select' ? (
                        <select className="input-style">
                          {field.options.map((opt, j) => (
                            <option key={j}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input type={field.type} placeholder={field.label} className="input-style" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        ) : (
          <div className="space-y-6">
  {/* Building */}
  <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
    <h2 className="text-sm font-medium text-gray-800 mb-4">Building</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
      {['Door No', 'Floor No', 'Building Number', 'Building Name', 'Land Mark'].map((label) =>
        renderInput(label)
      )}
    </div>
  </div>

  {/* Street */}
  <div className="border border-gray-200 rounded-lg p-4 shadow-sm ">
    <h2 className="text-sm font-medium text-gray-800 mb-4 ">Street</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
      {['Street No', 'Street Name', 'Road Number', 'Road Name', 'Block'].map((label) =>
        renderInput(label)
      )}
    </div>
  </div>

  {/* Area */}
  <div className="border border-gray-200 rounded-lg p-4  shadow-sm">
    <h2 className="text-sm font-medium text-gray-800 mb-4">Area</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
      {['Block', 'Area Name'].map((label) => renderInput(label))}
    </div>
  </div>

  {/* City */}
  <div className="border border-gray-200 rounded-lg p-4  shadow-sm">
    <h2 className="text-sm font-medium text-gray-800 mb-4">City</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
      {['Phase', 'Sector', 'Village', 'Town', 'City'].map((label) => renderInput(label))}
    </div>
  </div>

  {/* Address */}
   <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
    <h2 className="text-sm font-medium text-gray-800 mb-4">Address</h2>
    <div className="space-y-6"> {/* vertical spacing between rows */}
    {['Address 1', 'Address 2', 'Address 3'].map((label) => (
      <div key={label} className="w-full">
        {renderInput(label)}
      </div>
    ))}
  </div>
  </div>
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
    <h2 className="text-sm font-medium text-gray-800 mb-4">Country</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-4">
      {['Country Code', 'Country Name', 'State/Province Code', 'State/Province Name', 'District'].map((label) =>
        renderInput(label)
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
      {['Postal Code', 'Zip Code', 'PO Box'].map((label) => renderInput(label))}
    </div>
  </div>

  
</div>

        )}

        {/* Next or Submit Button */}
        <div className="mt-6">
          <button className="px-6 py-2 rounded text-white" style={{ backgroundColor: '#0B60B0' }}>
            {activeTab === 'user' ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .input-style {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px 14px; /* was 8px 12px */
  background-color: white;
  width: 100%;
  color: #374151;
}


          .input-style::placeholder {
            color: #374151;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default AddUser;
