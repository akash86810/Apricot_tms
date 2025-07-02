import React from "react";
import { useNavigate } from "react-router-dom";
const UserBasicDetailsTable = ({ users }) => {
  const navigate = useNavigate(); 

  const handleAddUser = () => {
    navigate("/add-user"); // 👈 route to AddUser page
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
      <div className="relative w-full max-w-[355px]">
  <input
    type="text"
    placeholder="Search"
    className="w-full h-[40px] bg-[#D1D1D1] border border-gray-400 rounded-[8px] pl-10 pr-10 py-[8px]"
  />
  <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black">
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
    </svg>
  </button>
</div>


       <button
  className="text-white px-4 py-2 rounded"
  style={{ backgroundColor: "#0B60B0" }}
  onClick={handleAddUser}
>
  + Add User
</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className=" text-white text-sm" style={{ backgroundColor: "#006FC9" }}>
            <tr className="font-inter">
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">User Name</th>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Middle Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Salute</th>
              <th className="px-4 py-2 border">Email ID</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Whatsapp No</th>
              <th className="px-4 py-2 border">Extension No</th>
              <th className="px-4 py-2 border">Valid From</th>
              <th className="px-4 py-2 border">Valid To</th>
              <th className="px-4 py-2 border">Joining Date</th>
              <th className="px-4 py-2 border">ResignationDate</th>
               
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{user.userId}</td>
                <td className="border px-4 py-2">{user.userName}</td>
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.middleName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">{user.salute}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">{user.whatsapp}</td>
                <td className="border px-4 py-2">{user.extension}</td>
                <td className="border px-4 py-2">{user.validFrom}</td>
                <td className="border px-4 py-2">{user.validTo}</td>
                <td className="border px-4 py-2">{user.joiningDate}</td>
                <td className="border px-4 py-2">{user.resignationDate}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBasicDetailsTable;
