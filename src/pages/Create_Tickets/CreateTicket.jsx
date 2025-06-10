import React, { useState } from 'react';
import Header from '../../components/ui/Create_Tickets_components/Header';
import Button from '../../components/ui/Create_Tickets_components/Button';
import InputField from '../../components/ui/Create_Tickets_components/InputField';
import Textarea from '../../components/ui/Create_Tickets_components/Textarea';
import Dropdown from '../../components/ui/Create_Tickets_components/Dropdown';
import FileUpload from '../../components/ui/Create_Tickets_components/FileUpload';

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    moduleName: '',
    subModule: '',
    icon: '',
    issueTitle: '',
    issueDescription: '',
    priority: '',
    attachments: [],
  });

  const [errors, setErrors] = useState({});

  // Dropdown options
  const moduleOptions = [
    { value: 'user-management', label: 'User Management' },
    { value: 'billing', label: 'Billing' },
    { value: 'reports', label: 'Reports' },
    { value: 'settings', label: 'Settings' },
    { value: 'api', label: 'API' },
  ];

  const subModuleOptions = [
    { value: 'authentication', label: 'Authentication' },
    { value: 'permissions', label: 'Permissions' },
    { value: 'profile', label: 'Profile' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'integration', label: 'Integration' },
  ];

  const iconOptions = [
    { value: 'user', label: 'User Icon' },
    { value: 'settings', label: 'Settings Icon' },
    { value: 'billing', label: 'Billing Icon' },
    { value: 'report', label: 'Report Icon' },
    { value: 'api', label: 'API Icon' },
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'critical', label: 'Critical' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleFileSelect = (files) => {
    setFormData((prev) => ({
      ...prev,
      attachments: Array.isArray(files) ? files : [files],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.moduleName) {
      newErrors.moduleName = 'Module Name is required';
    }
    if (!formData.subModule) {
      newErrors.subModule = 'Sub module is required';
    }
    if (!formData.icon) {
      newErrors.icon = 'Icon is required';
    }
    if (!formData.issueTitle.trim()) {
      newErrors.issueTitle = 'Issue Title is required';
    }
    if (!formData.issueDescription.trim()) {
      newErrors.issueDescription = 'Issue Description is required';
    }
    if (!formData.priority) {
      newErrors.priority = 'Priority is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate ticket creation
      console.log('Ticket created:', formData);
      alert('Ticket created successfully!');

      // Reset form
      setFormData({
        moduleName: '',
        subModule: '',
        icon: '',
        issueTitle: '',
        issueDescription: '',
        priority: '',
        attachments: [],
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      <main className="px-8 py-6">
        <h1 className="text-[24px] font-medium leading-[30px] text-black font-inter mb-8">
          Create Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row - Module Name, Sub module, Icon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dropdown
              label="Module Name"
              value={formData.moduleName}
              onChange={(option) => handleInputChange('moduleName', option.value)}
              options={moduleOptions}
              placeholder="Module Name"
              required
              error={errors.moduleName}
              className="w-[320px]"
            />

            <Dropdown
              label="Sub module"
              value={formData.subModule}
              onChange={(option) => handleInputChange('subModule', option.value)}
              options={subModuleOptions}
              placeholder="submodule"
              required
              error={errors.subModule}
              className="w-[320px]"
            />

            <Dropdown
              label="Icon"
              value={formData.icon}
              onChange={(option) => handleInputChange('icon', option.value)}
              options={iconOptions}
              placeholder="Icon"
              required
              error={errors.icon}
              className="w-[320px]"
            />
          </div>

          {/* Issue Title */}
          <InputField
            label="Issue Title"
            value={formData.issueTitle}
            onChange={(e) => handleInputChange('issueTitle', e.target.value)}
            placeholder="Title"
            required
            error={errors.issueTitle}
            className="w-full max-w-[1082px]"
          />

          {/* Issue Description */}
          <Textarea
            label="Issue Description"
            value={formData.issueDescription}
            onChange={(e) => handleInputChange('issueDescription', e.target.value)}
            placeholder="Issue"
            required
            rows={4}
            error={errors.issueDescription}
            className="w-full max-w-[1082px]"
          />

          {/* Second Row - Priority and Attachment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <Dropdown
              label="Priority"
              value={formData.priority}
              onChange={(option) => handleInputChange('priority', option.value)}
              options={priorityOptions}
              placeholder="Priority"
              required
              error={errors.priority}
              className="w-[320px]"
            />

            <FileUpload
              label="Attachment"
              onFileSelect={handleFileSelect}
              accept="*/*"
              multiple
              className="w-[320px]"
            />
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
              className="bg-[#0b60b0] text-white px-[35px] py-[9px] rounded-[5px] text-[14px] font-medium leading-[21px] font-poppins"
            >
              Save
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateTicket;
