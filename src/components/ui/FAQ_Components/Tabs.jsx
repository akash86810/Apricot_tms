// import React, { useState } from 'react';

// const Tabs = ({ tabs, defaultActiveTab = 0, onTabChange }) => {
//   const [activeTab, setActiveTab] = useState(defaultActiveTab);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     if (onTabChange) {
//       onTabChange(index);
//     }
//   };

//   return (
//     <div className="bg-[#f6f6f6] border border-[#e7e7e7] py-5 px-10">
//       <div className="flex space-x-0">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => handleTabClick(index)}
//             className={`px-4 py-3 text-[16px] font-medium leading-[20px] font-inter border transition-colors duration-200 ${
//               activeTab === index
//                 ? 'text-[#0b60b0] border-[#0b60b0] bg-white'
//                 : 'text-[#888888] border-[#d1d1d1] bg-transparent hover:bg-gray-50'
//             } ${index === 0 ? 'rounded-l' : ''} ${index === tabs.length - 1 ? 'rounded-r' : ''}`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

// import React, { useState } from 'react';

// const Tabs = ({ tabs, defaultActiveTab = 0, onTabChange }) => {
//   const [activeTab, setActiveTab] = useState(defaultActiveTab);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//     if (onTabChange) {
//       onTabChange(index);
//     }
//   };

//   return (
//     <div className="bg-[#f6f6f6] py-5 px-8 border border-[#e7e7e7]">
//       <div className="flex space-x-6 ">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => handleTabClick(index)}
//             className={`relative pb-2 text-[16px] font-medium font-inter transition-colors duration-200 focus:outline-none
//               ${
//                 activeTab === index
//                   ? 'text-[#0b60b0] after:content-[""] after:block after:w-full after:h-[2px] after:bg-[#0b60b0] after:absolute after:bottom-0 after:left-0'
//                   : 'text-[#888888] hover:text-[#0b60b0]'
//               }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

import React, { useState } from 'react';

const Tabs = ({ tabs, defaultActiveTab = 0, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index, tab) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tab);
    }
  };

  return (
    <div className="bg-[#f6f6f6] pt-7 px-6 border border-[#e7e7e7]">
      <div className="inline-flex items-center border-b-[2px] border-[#d1d1d1]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index, tab)}
            className={`relative pb-2 px-4 text-[16px] font-medium font-inter transition-colors duration-200 focus:outline-none
              ${
                activeTab === index
                  ? 'text-[#0b60b0] border-b-[2px] border-[#0b60b0]'
                  : 'text-[#888888]'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
