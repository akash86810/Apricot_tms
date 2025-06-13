import React, { useState } from 'react';

const AssignTeamModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const teamMembers = ['John', 'Jane', 'Alex', 'Maria', 'David'];

  const toggleModal = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  return (
    <div>
      {/* Trigger Button to Open Modal */}
      <div
  onClick={toggleModal}
  className="px-0 py-2 text-[14px] leading-[100%] font-normal cursor-pointer"
  style={{letterSpacing: '0%', color: '#42A0EE' }}
>
  Assign Team
</div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 "
          onClick={toggleModal} // Click backdrop to close
        >
          <div
            className="bg-white rounded-lg p-6 w-80 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Modal Heading Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-xl font-semibold">Assign Support Team</div>

              {/* Inline Labels */}
              <div className="flex gap-2 text-xs text-gray-500">
                <span>LI</span>
                <span>L2</span>
                <span>L3</span>
                <span>COE</span>
                <span>HOS</span>
                <span>TL</span>
              </div>

              {/* Close Icon */}
              <div
                className="cursor-pointer ml-2"
                onClick={toggleModal} // Close modal
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9395 12L4.71897 5.78097C4.64924 5.71124 4.59392 5.62846 4.55619 5.53735C4.51845 5.44624 4.49902 5.34859 4.49902 5.24997C4.49902 5.15135 4.51845 5.0537 4.55619 4.9626C4.59392 4.87149 4.64924 4.7887 4.71897 4.71897C4.7887 4.64924 4.87149 4.59392 4.9626 4.55619C5.0537 4.51845 5.15135 4.49902 5.24997 4.49902C5.34859 4.49902 5.44624 4.51845 5.53735 4.55619C5.62846 4.59392 5.71124 4.64924 5.78097 4.71897L12 10.9395L18.219 4.71897C18.3598 4.57814 18.5508 4.49902 18.75 4.49902C18.9491 4.49902 19.1401 4.57814 19.281 4.71897C19.4218 4.8598 19.5009 5.05081 19.5009 5.24997C19.5009 5.44913 19.4218 5.64014 19.281 5.78097L13.0605 12L19.281 18.219C19.4218 18.3598 19.5009 18.5508 19.5009 18.75C19.5009 18.9491 19.4218 19.1401 19.281 19.281C19.1401 19.4218 18.9491 19.5009 18.75 19.5009C18.5508 19.5009 18.3598 19.4218 18.219 19.281L12 13.0605L5.78097 19.281C5.64014 19.4218 5.44913 19.5009 5.24997 19.5009C5.05081 19.5009 4.8598 19.4218 4.71897 19.281C4.57814 19.1401 4.49902 18.9491 4.49902 18.75C4.49902 18.5508 4.57814 18.3598 4.71897 18.219L10.9395 12Z"
                    fill="#D90000"
                  />
                </svg>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-2">
              {teamMembers.map((member) => (
                <label
                  key={member}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member)}
                    onChange={() => handleCheckboxChange(member)}
                    className="rounded border border-gray-300 text-blue-500 focus:ring-0"
                  />
                  <span className="text-gray-700">{member}</span>
                </label>
              ))}
            </div>

            {/* Done Button */}
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignTeamModal;
