import React from 'react';
import Header from '../../components/common/Header';
import Tabs from '../../components/ui/Tabs';
import Accordion from '../../components/ui/Accordion';

const FAQPage = () => {
  const tabs = [
    { label: 'My Tickets' },
    { label: "FAQ\'s" },
    { label: "FAQ\'s" },
    { label: 'Trainings' },
    { label: 'New Requirement' }
  ];

  const leftColumnFAQs = [
    {
      question: 'How can I view consolidated cash positions across multiple bank accounts?',
      answer: 'The TMS aggregates real-time or end-of-day balances from all connected bank accounts through API integrations or statement uploads (e.g., MT940, BAI2).'
    },
    {
      question: 'Why is the cash forecast not matching actuals?',
      answer: 'Cash forecast discrepancies can occur due to timing differences, unexpected transactions, or data synchronization issues. Please check your forecast parameters and ensure all bank connections are active.'
    },
    {
      question: 'Can I make bulk payments from the TMS?',
      answer: 'Yes, the TMS supports bulk payment processing. You can upload payment files in various formats or create batch payments directly within the system.'
    },
    {
      question: 'Does the TMS support Multi-Factor Authentication (MFA)?',
      answer: 'Yes, the TMS includes comprehensive MFA support including SMS, email, and authenticator app options to ensure secure access to your treasury operations.'
    },
    {
      question: 'How does the TMS connect with banks?',
      answer: 'The TMS connects with banks through secure API integrations, SWIFT messaging, and file-based communication methods depending on your bank\'s supported connectivity options.'
    }
  ];

  const rightColumnFAQs = [
    {
      question: 'Why is the cash forecast not matching actuals?',
      answer: 'Cash forecast discrepancies can occur due to timing differences, unexpected transactions, or data synchronization issues. Please check your forecast parameters and ensure all bank connections are active.'
    },
    {
      question: 'Can I make bulk payments from the TMS?',
      answer: 'Yes, the TMS supports bulk payment processing. You can upload payment files in various formats or create batch payments directly within the system.'
    },
    {
      question: 'Does the TMS support Multi-Factor Authentication (MFA)?',
      answer: 'Yes, the TMS includes comprehensive MFA support including SMS, email, and authenticator app options to ensure secure access to your treasury operations.'
    },
    {
      question: 'How does the TMS connect with banks?',
      answer: 'The TMS connects with banks through secure API integrations, SWIFT messaging, and file-based communication methods depending on your bank\'s supported connectivity options.'
    }
  ];

  const handleTabChange = (tabIndex) => {
    console.log(`Switched to tab: ${tabs[tabIndex].label}`);
    // Handle navigation logic here
    switch(tabIndex) {
      case 0:
        // Navigate to My Tickets
        break;
      case 1:
      case 2:
        // Stay on FAQ page
        break;
      case 3:
        // Navigate to Trainings
        break;
      case 4:
        // Navigate to New Requirement
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      
      {/* Navigation Tabs */}
      <Tabs 
        tabs={tabs} 
        defaultActiveTab={1} 
        onTabChange={handleTabChange}
      />
      
      {/* FAQ Content */}
      <div className="px-8 py-8">
        <h1 className="text-[32px] font-medium leading-[39px] text-[#0b60b0] font-inter mb-8">
          FAQ's
        </h1>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <Accordion items={leftColumnFAQs} />
          </div>
          
          {/* Right Column */}
          <div>
            <Accordion items={rightColumnFAQs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;