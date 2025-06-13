import React, { useState } from 'react';

const FileModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([false, false, false]); // 3 sample rows

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const toggleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setSelectedRows(selectedRows.map(() => newValue));
  };

  const toggleRow = (index) => {
    const updatedRows = [...selectedRows];
    updatedRows[index] = !updatedRows[index];
    setSelectedRows(updatedRows);
    setSelectAll(updatedRows.every(Boolean)); // if all true, then selectAll = true
  };

  return (
    <div>
      {/* Modal Open Button */}
      <span
        className="text-sm underline cursor-pointer"
        style={{ color: '#42A0EE' }}
        onClick={openModal}
      >
        img001.png
      </span>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div
            className="bg-white rounded-lg shadow-xl relative w-full max-w-2xl"
            style={{ width: '727px' }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-4"
              style={{
                color: '#0B60B0',
                height: '44px',
              }}
            >
              <h2
                className="font-medium"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  lineHeight: '18px',
                }}
              >
                Attachment Details
              </h2>

              <button
                onClick={closeModal}
                style={{
                  width: '64px',
                  height: '25px',
                  borderRadius: '155px',
                  borderWidth: '1px',
                  padding: '2px 10px',
                  borderColor: '#D90000',
                  color: '#D90000',
                  fontWeight: 'bold',
                }}
              >
                Delete
              </button>
            </div>

            {/* Table */}
            <div className="p-4">
              <table className="table-auto w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 bg-[#0B60B0] text-white">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={toggleSelectAll}
                      />{' '}
                      Attachment Name
                    </th>
                    <th className="border px-4 py-2 bg-[#0B60B0] text-white">Uploaded By</th>
                    <th className="border px-4 py-2 bg-[#0B60B0] text-white">Uploaded Date</th>
                    <th className="border px-4 py-2 bg-[#0B60B0] text-white">Uploaded Time</th>
                  </tr>
                </thead>
                <tbody>
                  {['img001.png', 'img002.png', 'img003.png'].map((fileName, index) => (
                    <tr key={index}>
                      <td
                        className="border px-4 py-2"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '18px',
                          color: '#007AFF',  
                        //   background: #007AFF;

                        }}
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedRows[index]}
                          onChange={() => toggleRow(index)}
                        />
                        {fileName}
                      </td>
                      <td className="border px-4 py-2 text-[#5D5D5D]">John</td>
                      <td className="border px-4 py-2 text-[#5D5D5D]">23/03/2023</td>
                      <td className="border px-4 py-2 text-[#5D5D5D]">11:00 AM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileModal;
