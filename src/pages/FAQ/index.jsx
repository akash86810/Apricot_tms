import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../../components/ui/FAQ_Components/Tabs';
import Accordion from '../../components/ui/FAQ_Components/Accordion';
import PageHeader from '@/components/ui/MyTickets_components/PageHeader';
import '../../styles/FAQ_css/FAQ.css';

const FAQPage = () => {
  const navigate = useNavigate();

  const tabs = [
    { label: 'My Tickets' },
    { label: "FAQ's" },
    { label: 'Trainings' },
    { label: 'New Requirement' },
  ];

  const leftColumnFAQs = [
    {
      question: 'How can I view consolidated cash positions across multiple bank accounts?',
      answer:
        'The TMS aggregates real-time or end-of-day balances from all connected bank accounts through API integrations or statement uploads (e.g., MT940, BAI2).',
    },
    {
      question: 'Why is the cash forecast not matching actuals?',
      answer:
        'Cash forecast discrepancies can occur due to timing differences, unexpected transactions, or data synchronization issues. Please check your forecast parameters and ensure all bank connections are active.',
    },
    {
      question: 'Can I make bulk payments from the TMS?',
      answer:
        'Yes, the TMS supports bulk payment processing. You can upload payment files in various formats or create batch payments directly within the system.',
    },
    {
      question: 'Does the TMS support Multi-Factor Authentication (MFA)?',
      answer:
        'Yes, the TMS includes comprehensive MFA support including SMS, email, and authenticator app options to ensure secure access to your treasury operations.',
    },
    {
      question: 'How does the TMS connect with banks?',
      answer:
        "The TMS connects with banks through secure API integrations, SWIFT messaging, and file-based communication methods depending on your bank's supported connectivity options.",
    },
  ];

  const rightColumnFAQs = [
    {
      question: 'Why is the cash forecast not matching actuals?',
      answer:
        'Cash forecast discrepancies can occur due to timing differences, unexpected transactions, or data synchronization issues. Please check your forecast parameters and ensure all bank connections are active.',
    },
    {
      question: 'Can I make bulk payments from the TMS?',
      answer:
        'Yes, the TMS supports bulk payment processing. You can upload payment files in various formats or create batch payments directly within the system.',
    },
    {
      question: 'Does the TMS support Multi-Factor Authentication (MFA)?',
      answer:
        'Yes, the TMS includes comprehensive MFA support including SMS, email, and authenticator app options to ensure secure access to your treasury operations.',
    },
    {
      question: 'How does the TMS connect with banks?',
      answer:
        "The TMS connects with banks through secure API integrations, SWIFT messaging, and file-based communication methods depending on your bank's supported connectivity options.",
    },
  ];

  const handleTabChange = (tabIndex) => {
    console.log(`Switched to tab: ${tabs[tabIndex].label}`);
    switch (tabIndex) {
      case 0:
        navigate('/dashboard');
        break;
      case 3:
        navigate('/trainings');
        break;
      case 4:
        navigate('/new-requirement');
        break;
      default:
        // For FAQ tabs (1 & 2), stay on current page
        break;
    }
  };

  return (
    <div className="faq-page min-h-screen bg-[#fafafa]">
      <PageHeader
        className="Position: sticky;
Top: 0;"
      />

      {/* <div> */}
      {/* Navigation Tabs */}
      <Tabs tabs={tabs} defaultActiveTab={1} onTabChange={handleTabChange} />
      {/* </div> */}

      {/* FAQ Content */}
      <div className="px-8 py-8">
        <h1 className="text-[32px] font-medium leading-[39px] text-[#0b60b0] font-inter mb-8">
          FAQ's
        </h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Accordion items={leftColumnFAQs} />
          </div>
          <div>
            <Accordion items={rightColumnFAQs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
