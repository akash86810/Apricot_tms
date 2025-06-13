import { useLocation, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import PageHeader from '@/components/ui/MyTickets_components/PageHeader';
import MessageItem from '../TicketDetails/MessageItem';
import GridIndex from '../Gridview/GridIndex';
import GridView from './GridView';
import DropdownButtons from '../TicketDetails/DropdownButtons';
import AssignTeamModal from '../TicketDetails/AssignTeamModal';
import FileModal from '../TicketDetails/FileModal';
import BackButton from '../TicketDetails/BackButton';

const TicketDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const ticket = state?.ticket;
  console.log('ticket    ', ticket);

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  //for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const messages = [
    {
      userInitial: 'U',
      message:
        'Suggested workaround to user: limit the report parameters by selecting fewer accounts or breaking the date range into smaller intervals (e.g., weekly).',
    },
    {
      userInitial: 'A',
      message: 'Another message with different background color.',
    },
  ];

  // return (
  //   <>
  //     <div className="flex flex-col lg:flex-row h-screen">
  //       {/* Right side content */}
  //       <div className="flex-1 overflow-auto px-8">
  //         <PageHeader color="bg-[#ffffff]" className="bg-[#fafafa]" />
  //         <BackButton />
  //         {/* Ticket number line */}
  //         <div className="flex justify-between items-center mt-4">
  //           <div className="flex items-center gap-2">
  //             <span className="font-medium" style={{ color: 'var(--Colors-Orange, #FF9500)' }}>
  //               {ticket.ticketNumber}
  //             </span>
  //             <span
  //               className="border-l-2 border-blue-500 pl-2 font-medium"
  //               style={{ color: ' #0B60B0' }}
  //             >
  //               {ticket.category}
  //             </span>

  //             <span
  //               className="px-2 py-1 rounded text-xs"
  //               style={{
  //                 background: '#D2E7FF',
  //                 color: '#007AFF',
  //                 border: '1px solid #007AFF',
  //               }}
  //             >
  //               {ticket.tag}
  //             </span>
  //           </div>
  //           <span className="text-gray-400 text-xs">{ticket.timestamp}</span>
  //         </div>

  //         {/* Red color round title */}
  //         <div className="mt-2 flex items-center gap-2">
  //           <span className="inline-block bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"></span>
  //           <span className="font-medium" style={{ fontSize: '1.65rem' }}>
  //             {ticket.title}
  //           </span>
  //         </div>

  //         {/* Bordered card without bg - 1 */}
  //         <div className="border border-gray-300 rounded p-4 mt-4">
  //           <p className="text-xs font-medium" style={{ color: '#454545' }}>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisi quis
  //             libero tincidunt convallis. Phasellus laoreet, nulla at dapibus facilisis, sem ligula
  //             faucibus nisi, sit amet dapibus velit felis nec sapien.Lorem ipsum dolor sit amet,
  //             consectetur adipiscing elit. Vestibulum at nisi quis libero tincidunt convallis.
  //             Phasellus laoreet, nulla at dapibus facilisis, sem ligula faucibus nisi, sit amet
  //             dapibus velit felis nec sapien.Lorem ipsum dolor sit amet, consectetur adipiscing
  //             elit. Vestibulum at nisi quis libero tincidunt convallis. <br />
  //             Phasellus laoreet, nulla at dapibus facilisis, sem ligula faucibus nisi, sit amet
  //             dapibus velit felis nec sapien.
  //           </p>
  //         </div>

  //         {/* Bordered card without bg - 2 */}
  //         <div className="border border-gray-300 rounded p-4 mt-4">
  //           <p className="text-xs font-medium" style={{ color: '#454545' }}>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisi quis
  //             libero tincidunt convallis. Phasellus laoreet, nulla at dapibus facilisis, sem ligula
  //             faucibus nisi, sit amet dapibus velit felis nec sapien.Lorem ipsum dolor sit amet,
  //             consectetur adipiscing elit. Vestibulum at nisi quis libero tincidunt convallis.
  //             Phasellus laoreet, nulla at dapibus facilisis, sem ligula faucibus nisi, sit amet
  //             dapibus velit felis nec sapien.Lorem ipsum dolor sit amet, consectetur adipiscing
  //             elit. Vestibulum at nisi quis libero tincidunt convallis. Phasellus laoreet, nulla at
  //             dapibus facilisis, sem ligula faucibus nisi, sit amet dapibus velit felis nec sapien.
  //           </p>
  //         </div>

  //         {/* User logo with "Assign team member" */}
  //         <div className="flex items-center justify-between mt-4">
  //           {/* Left side - Assign team member */}
  //           <div className="flex items-center gap-2">
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
  //                 stroke="#5D5D5D"
  //                 strokeWidth="2"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
  //                 stroke="#5D5D5D"
  //                 strokeWidth="2"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //             <div>
  //               <AssignTeamModal
  //                 isOpen={isModalOpen}
  //                 onClose={toggleModal}
  //                 selectedMembers={selectedMembers}
  //                 setSelectedMembers={setSelectedMembers}
  //               />
  //             </div>
  //             <span
  //               className="text-sm text-[#42A0EE] font-medium cursor-pointer"
  //               onClick={toggleModal}
  //             ></span>
  //             {/* The modal itself */}
  //           </div>

  //           {/* Right side - Redefine the issue */}
  //           <div className="flex items-center gap-2">
  //             <svg
  //               width="14"
  //               height="13"
  //               viewBox="0 0 14 13"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M12.094 9.93996C12.2762 8.3826 12.3344 6.81321 12.268 5.24663C12.2665 5.20972 12.2727 5.17291 12.2861 5.1385C12.2995 5.10409 12.3199 5.07282 12.346 5.04663L13.002 4.39063C13.0199 4.3726 13.0426 4.36014 13.0675 4.35473C13.0923 4.34932 13.1182 4.3512 13.142 4.36014C13.1658 4.36908 13.1865 4.38471 13.2016 4.40513C13.2168 4.42556 13.2257 4.44993 13.2273 4.4753C13.3508 6.33612 13.3039 8.20434 13.0873 10.0566C12.93 11.4046 11.8473 12.4613 10.5053 12.6113C8.17552 12.8693 5.82439 12.8693 3.49462 12.6113C2.15329 12.4613 1.06996 11.4046 0.912622 10.0566C0.636222 7.69357 0.636222 5.30635 0.912622 2.9433C1.06996 1.5953 2.15262 0.538632 3.49462 0.388632C5.26287 0.192553 7.04444 0.145053 8.82062 0.246632C8.84604 0.248457 8.87041 0.257529 8.89083 0.272773C8.91125 0.288017 8.92688 0.308795 8.93586 0.332645C8.94484 0.356496 8.94679 0.38242 8.94149 0.407348C8.93619 0.432276 8.92386 0.455163 8.90596 0.473298L8.24396 1.13463C8.21803 1.16046 8.18708 1.18071 8.15303 1.19413C8.11898 1.20754 8.08254 1.21384 8.04596 1.21263C6.56379 1.16225 5.07993 1.21906 3.60596 1.38263C3.17525 1.4303 2.77319 1.62178 2.46473 1.92613C2.15626 2.23048 1.9594 2.62994 1.90596 3.05996C1.63865 5.34551 1.63865 7.65442 1.90596 9.93996C1.9594 10.37 2.15626 10.7694 2.46473 11.0738C2.77319 11.3781 3.17525 11.5696 3.60596 11.6173C5.84262 11.8673 8.15729 11.8673 10.3946 11.6173C10.8253 11.5696 11.2274 11.3781 11.5359 11.0738C11.8443 10.7694 12.0405 10.37 12.094 9.93996Z"
  //                 fill="#0B60B0"
  //               />
  //             </svg>
  //             <span className="text-sm text-[#0B60B0] font-medium">Redefine the issue</span>
  //           </div>
  //         </div>

  //         {/* Upload logo, text and 2 buttons */}
  //         <div className="flex items-center justify-between">
  //           {/* Icon and text aligned to the left */}
  //           <div className="flex items-center gap-2">
  //             <div className="flex items-center justify-between">
  //               <svg
  //                 width="24"
  //                 height="24"
  //                 viewBox="0 0 24 24"
  //                 fill="none"
  //                 xmlns="http://www.w3.org/2000/svg"
  //               >
  //                 <path
  //                   d="M11.5 22C9.96667 22 8.66667 21.4667 7.6 20.4C6.53333 19.3333 6 18.0333 6 16.5V6C6 4.9 6.39167 3.95833 7.175 3.175C7.95833 2.39167 8.9 2 10 2C11.1 2 12.0417 2.39167 12.825 3.175C13.6083 3.95833 14 4.9 14 6V15.5C14 16.2 13.7583 16.7917 13.275 17.275C12.7917 17.7583 12.2 18 11.5 18C10.8 18 10.2083 17.7583 9.725 17.275C9.24167 16.7917 9 16.2 9 15.5V6H10.5V15.5C10.5 15.7833 10.5958 16.0208 10.7875 16.2125C10.9792 16.4042 11.2167 16.5 11.5 16.5C11.7833 16.5 12.0208 16.4042 12.2125 16.2125C12.4042 16.0208 12.5 15.7833 12.5 15.5V6C12.5 5.3 12.2583 4.70833 11.775 4.225C11.2917 3.74167 10.7 3.5 10 3.5C9.3 3.5 8.70833 3.74167 8.225 4.225C7.74167 4.70833 7.5 5.3 7.5 6V16.5C7.5 17.6 7.89167 18.5417 8.675 19.325C9.45833 20.1083 10.4 20.5 11.5 20.5C12.6 20.5 13.5417 20.1083 14.325 19.325C15.1083 18.5417 15.5 17.6 15.5 16.5V6H17V16.5C17 18.0333 16.4667 19.3333 15.4 20.4C14.3333 21.4667 13.0333 22 11.5 22Z"
  //                   fill="#1D1B20"
  //                 />
  //               </svg>
  //             </div>
  //             <span
  //               className="text-gray-700 text-sm underline"
  //               style={{ color: '#42A0EE' }}
  //               onClick={openModal}
  //             >
  //               <FileModal isOpen={isModalOpen} closeModal={closeModal} />
  //             </span>
  //           </div>

  //           {/* Dropdown aligned to the right */}
  //           <DropdownButtons />
  //         </div>

  //         {/* Input field with placeholder and post button */}
  //         <div className="relative flex items-center  border border-gray-400 rounded-full overflow-hidden">
  //           <input
  //             type="text"
  //             placeholder="Refine problem"
  //             className="flex-1 px-4 py-4 outline-none text-sm "
  //           />
  //           <button
  //             type="button"
  //             className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm font-semibold flex items-center justify-center bg-[#0C8CE9] hover:bg-blue-700 rounded-[16px] px-5 py-2 gap-2"
  //             style={{ width: '70px', height: '33px' }}
  //           >
  //             Post
  //           </button>
  //         </div>
  //       </div>

  //       {/* Left side */}
  //       <div
  //         className="w-full lg:w-[600px] bg-gray-100 p-6 flex-shrink-0 h-screen flex flex-col justify-between relative"
  //         style={{ backgroundColor: '#F6F6F6' }}
  //       >
  //         {/* Info line above input box */}
  //         <div
  //           className="flex flex-col gap-16 mb-2"
  //           style={{
  //             width: '550px',
  //             fontFamily: 'Inter, sans-serif',
  //             fontWeight: 400,
  //             color: '#5D5D5D',
  //             fontSize: '12px',
  //             lineHeight: '100%',
  //             marginTop: '200px',
  //           }}
  //         >
  //           <div className="flex flex-col gap-4">
  //             {messages.map((msg, idx) => (
  //               <MessageItem
  //                 key={idx}
  //                 userInitial={msg.userInitial}
  //                 message={msg.message}
  //                 index={idx}
  //               />
  //             ))}
  //           </div>
  //         </div>

  //         {/* Input box at bottom */}
  //         <div className="relative w-full md:w-[560px] h-[50px] mt-auto">
  //           <input
  //             type="text"
  //             placeholder="Type your message here..."
  //             className="w-full h-full rounded-[24px] border border-gray-400 pl-14 pr-20 py-4 focus:outline-none"
  //             style={{
  //               fontFamily: 'Inter, sans-serif',
  //               fontWeight: 400,
  //               fontSize: '16px',
  //               lineHeight: '100%',
  //               letterSpacing: '0%',
  //             }}
  //           />
  //           <button
  //             type="button"
  //             className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm font-semibold hover:bg-blue-700 flex items-center justify-center"
  //             style={{
  //               width: '70px',
  //               height: '33px',
  //               borderRadius: '16px',
  //               padding: '8px 20px',
  //               gap: '10px',
  //               backgroundColor: '#0C8CE9',
  //             }}
  //           >
  //             Post
  //           </button>
  //           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold select-none">
  //             +
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  // };

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Right side content */}
        <div className="flex-1 overflow-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col min-h-screen">
          <PageHeader color="bg-[#ffffff]" className="bg-[#fafafa]" />
          <BackButton />

          {/* Ticket number line */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-[#FF9500]">{ticket.ticketNumber}</span>
              <span className="border-l-2 border-blue-500 pl-2 font-medium text-[#0B60B0]">
                {ticket.category}
              </span>

              <span
                className="px-2 py-1 rounded text-xs"
                style={{
                  background: '#D2E7FF',
                  color: '#007AFF',
                  border: '1px solid #007AFF',
                }}
              >
                {ticket.tag}
              </span>
            </div>
            <span className="text-gray-400 text-xs">{ticket.timestamp}</span>
          </div>

          {/* Red color round title */}
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-block bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"></span>
            <span className="font-medium text-2xl sm:text-3xl">{ticket.title}</span>
          </div>

          {/* Bordered card without bg - 1 */}
          <div className="border border-gray-300 rounded p-4 mt-4">
            <p className="text-xs sm:text-sm font-medium text-[#454545]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisi quis
              libero tincidunt convallis. Phasellus laoreet, nulla at dapibus facilisis, sem ligula
              faucibus nisi, sit amet dapibus velit felis nec sapien.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum at nisi quis libero tincidunt convallis.
              Phasellus laoreet, nulla at dapibus facilisis, sem ligula faucibus nisi, sit amet
              dapibus velit felis nec sapien.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum at nisi quis libero tincidunt convallis. <br />
              Phasellus laoreet, nulla at dapibus facilisis, sem ligula faucibus nisi, sit amet
              dapibus velit felis nec sapien.
            </p>
          </div>

          {/* Bordered card without bg - 2 */}
          <div className="border border-gray-300 rounded p-4 mt-4">
            <p className="text-xs sm:text-sm font-medium text-[#454545]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisi quis
              libero tincidunt convallis. Phasellus laoreet, nulla at dapibus facilisis, sem ligula
              faucibus nisi, sit amet dapibus velit felis nec sapien.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum at nisi quis libero tincidunt convallis.
              Phasellus laoreet, nulla at dapibus facilisis, sem ligula faucibus nisi, sit amet
              dapibus velit felis nec sapien.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum at nisi quis libero tincidunt convallis. Phasellus laoreet, nulla at
              dapibus facilisis, sem ligula faucibus nisi, sit amet dapibus velit felis nec sapien.
            </p>
          </div>

          {/* User logo with "Assign team member" */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4 sm:gap-0">
            {/* Left side - Assign team member */}
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13Z"
                  stroke="#5D5D5D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21C20 18.8783 19.1571 16.8434 17.6569 15.3431C16.1566 13.8429 14.1217 13 12 13C9.87827 13 7.84344 13.8429 6.34315 15.3431C4.84285 16.8434 4 18.8783 4 21"
                  stroke="#5D5D5D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <AssignTeamModal
                  isOpen={isModalOpen}
                  onClose={toggleModal}
                  selectedMembers={selectedMembers}
                  setSelectedMembers={setSelectedMembers}
                />
              </div>
              <span
                className="text-sm text-[#42A0EE] font-medium cursor-pointer"
                onClick={toggleModal}
              >
                {/* Assign team member */}
              </span>
            </div>

            {/* Right side - Redefine the issue */}
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.094 9.93996C12.2762 8.3826 12.3344 6.81321 12.268 5.24663C12.2665 5.20972 12.2727 5.17291 12.2861 5.1385C12.2995 5.10409 12.3199 5.07282 12.346 5.04663L13.002 4.39063C13.0199 4.3726 13.0426 4.36014 13.0675 4.35473C13.0923 4.34932 13.1182 4.3512 13.142 4.36014C13.1658 4.36908 13.1865 4.38471 13.2016 4.40513C13.2168 4.42556 13.2257 4.44993 13.2273 4.4753C13.3508 6.33612 13.3039 8.20434 13.0873 10.0566C12.93 11.4046 11.8473 12.4613 10.5053 12.6113C8.17552 12.8693 5.82439 12.8693 3.49462 12.6113C2.15329 12.4613 1.06996 11.4046 0.912622 10.0566C0.636222 7.69357 0.636222 5.30635 0.912622 2.9433C1.06996 1.5953 2.15262 0.538632 3.49462 0.388632C5.26287 0.192553 7.04444 0.145053 8.82062 0.246632C8.84604 0.248457 8.87041 0.257529 8.89083 0.272773C8.91125 0.288017 8.92688 0.308795 8.93586 0.332645C8.94484 0.356496 8.94679 0.38242 8.94149 0.407348C8.93619 0.432276 8.92386 0.455163 8.90596 0.473298L8.24396 1.13463C8.21803 1.16046 8.18708 1.18071 8.15303 1.19413C8.11898 1.20754 8.08254 1.21384 8.04596 1.21263C6.56379 1.16225 5.07993 1.21906 3.60596 1.38263C3.17525 1.4303 2.77319 1.62178 2.46473 1.92613C2.15626 2.23048 1.9594 2.62994 1.90596 3.05996C1.63865 5.34551 1.63865 7.65442 1.90596 9.93996C1.9594 10.37 2.15626 10.7694 2.46473 11.0738C2.77319 11.3781 3.17525 11.5696 3.60596 11.6173C5.84262 11.8673 8.15729 11.8673 10.3946 11.6173C10.8253 11.5696 11.2274 11.3781 11.5359 11.0738C11.8443 10.7694 12.0405 10.37 12.094 9.93996Z"
                  fill="#0B60B0"
                />
              </svg>
              <span className="text-sm text-[#0B60B0] font-medium">Redefine the issue</span>
            </div>
          </div>

          {/* Upload logo, text and 2 buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-4 sm:gap-0">
            {/* Icon and text aligned to the left */}
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 22C9.96667 22 8.66667 21.4667 7.6 20.4C6.53333 19.3333 6 18.0333 6 16.5V6C6 4.9 6.39167 3.95833 7.175 3.175C7.95833 2.39167 8.9 2 10 2C11.1 2 12.0417 2.39167 12.825 3.175C13.6083 3.95833 14 4.9 14 6V15.5C14 16.2 13.7583 16.7917 13.275 17.275C12.7917 17.7583 12.2 18 11.5 18C10.8 18 10.2083 17.7583 9.725 17.275C9.24167 16.7917 9 16.2 9 15.5V6H10.5V15.5C10.5 15.7833 10.5958 16.0208 10.7875 16.2125C10.9792 16.4042 11.2167 16.5 11.5 16.5C11.7833 16.5 12.0208 16.4042 12.2125 16.2125C12.4042 16.0208 12.5 15.7833 12.5 15.5V6C12.5 5.3 12.2583 4.70833 11.775 4.225C11.2917 3.74167 10.7 3.5 10 3.5C9.3 3.5 8.70833 3.74167 8.225 4.225C7.74167 4.70833 7.5 5.3 7.5 6V16.5C7.5 17.6 7.89167 18.5417 8.675 19.325C9.45833 20.1083 10.4 20.5 11.5 20.5C12.6 20.5 13.5417 20.1083 14.325 19.325C15.1083 18.5417 15.5 17.6 15.5 16.5V6H17V16.5C17 18.0333 16.4667 19.3333 15.4 20.4C14.3333 21.4667 13.0333 22 11.5 22Z"
                  fill="#1D1B20"
                />
              </svg>
              <span className="text-sm text-[#42A0EE] underline cursor-pointer" onClick={openModal}>
                {/* Upload files */}
                <FileModal isOpen={isModalOpen} closeModal={closeModal} />
              </span>
            </div>

            {/* Dropdown aligned to the right */}
            <DropdownButtons />
          </div>

          {/* Input field with placeholder and post button */}
          <div className="sticky bottom-0 bg-white pt-4 pb-4">
            <div className="relative flex items-center border border-gray-400 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Refine problem"
                className="flex-1 px-4 py-4 outline-none text-sm w-full"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm font-semibold flex items-center justify-center bg-[#0C8CE9] hover:bg-blue-700 rounded-[16px] px-5 py-2 gap-2"
                style={{ width: '70px', height: '33px' }}
              >
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Left side */}
        <div
          className="w-full lg:w-[600px] bg-gray-100 p-4 sm:p-6 flex-shrink-0 min-h-[50vh] lg:min-h-screen flex flex-col"
          style={{ backgroundColor: '#F6F6F6' }}
        >
          {/* Info line above input box */}
          <div
            className="flex flex-col gap-16 mb-2 flex-1"
            style={{
              maxWidth: '100%',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#5D5D5D',
              fontSize: '12px',
              lineHeight: '100%',
              marginTop: '2rem',
            }}
          >
            <div className="flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <MessageItem
                  key={idx}
                  userInitial={msg.userInitial}
                  message={msg.message}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Input box at bottom */}
          <div className="relative w-full h-[50px] mt-4 mb-4">
            <input
              type="text"
              placeholder="Type your message here..."
              className="w-full h-full rounded-[24px] border border-gray-400 pl-14 pr-20 py-4 focus:outline-none"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm font-semibold hover:bg-blue-700 flex items-center justify-center"
              style={{
                width: '70px',
                height: '33px',
                borderRadius: '16px',
                padding: '8px 20px',
                gap: '10px',
                backgroundColor: '#0C8CE9',
              }}
            >
              Post
            </button>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold select-none">
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetail;
