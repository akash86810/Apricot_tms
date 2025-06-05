import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <div key={index} className="border border-[#888888] bg-white">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-0 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-[16px] font-medium leading-[20px] text-[#454545] font-inter flex-1 px-6">
              {item.question}
            </span>
            <div className="px-6">
              <img
                src="/images/img_eparrowdown.svg"
                alt="Toggle Arrow"
                className={`w-[24px] h-[24px] transition-transform duration-200 ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>
          {openItems.has(index) && (
            <div className="px-6 pb-6">
              <p className="text-[16px] font-normal leading-[19px] text-[#5d5d5d] font-inter">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
