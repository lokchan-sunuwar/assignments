import * as React from 'react';
import { FormField } from './FormField';
import { UploadSection } from './UploadSection';
import { StepIndicator } from './StepIndicator';

const steps = [
  { label: "Business\nType", isActive: false },
  { label: "Business\nDetails", isActive: true },
  { label: "Authorized\nRepresentative", isActive: false },
  { label: "Business\nOwners", isActive: false },
  { label: "Company\nDirectors", isActive: false },
  { label: "Support\nInformation", isActive: false },
  { label: "Add\nDetails", isActive: false },
  { label: "Complete\nRegistration", isActive: false }
];

export const BusinessDetailsForm: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center pb-20 bg-white">
      <div className="flex-1 shrink gap-2 self-stretch px-80 py-8 text-xl font-semibold leading-tight text-center text-zinc-900 max-md:px-5 max-md:max-w-full">
        Multi-Step Process Form Assignment
      </div>
      <div className="flex flex-col mt-4 max-w-full text-sm leading-5 text-center whitespace-nowrap text-neutral-500 w-[1120px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8089f15f423bce8fa99e11076a66af4965682d0cc202d926a3d5df2d64d05dc2?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c"
          alt=""
          className="object-contain self-center max-w-full rounded-none aspect-[76.92] w-[1065px]"
        />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-3 w-full max-md:max-w-full">
          {steps.map((step, index) => (
            <StepIndicator key={index} {...step} />
          ))}
        </div>
      </div>

      <form className="flex overflow-hidden flex-col px-12 py-14 mt-14 max-w-full bg-white rounded-2xl w-[894px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="text-xl leading-tight font-[550] text-zinc-900 max-md:max-w-full">
            Tell us more about your business
          </div>
          <div className="mt-2 text-sm leading-5 font-[450] text-neutral-500 max-md:max-w-full">
            Your info is like the Wi-Fi password—totally crucial for keeping things running, impressing the money folks, and making sure you get top-notch service without any buffering!
          </div>
        </div>

        <div className="flex flex-col mt-10 w-full text-sm max-md:max-w-full">
          <div className="flex flex-wrap gap-6 items-center w-full max-md:max-w-full">
            <FormField label="Legal Name" required placeholder="Legal name" />
            <FormField label="Doing business as" required placeholder="Doing business as" />
          </div>

          {/* Continuing with all form fields */}
          <div className="flex flex-wrap gap-6 items-center mt-5 w-full max-md:max-w-full">
            <FormField label="Company Registration Number" required placeholder="Company Registration Number" />
            <FormField label="Random Registration Number" required placeholder="Random Registration Number" />
          </div>

          <div className="flex flex-wrap gap-6 items-center mt-5 w-full max-md:max-w-full">
            <FormField label="Website URL" required placeholder="Website URL" />
            <FormField label="Industry Name" required placeholder="Industry Name" hasDropdown />
          </div>

          {/* Continue with all other form fields... */}
        </div>

        <UploadSection
          title="Certification of Incorporation"
          subtitle="Upload the incorporation certificate"
          required
        />

        <UploadSection
          title="Company Logo"
          subtitle="Upload the company logo"
          required
        />

        <div className="flex flex-wrap gap-10 justify-between items-center mt-10 w-full text-base leading-none text-center whitespace-nowrap font-[550] max-md:max-w-full">
          <button type="button" className="overflow-hidden gap-2.5 self-stretch p-3.5 my-auto rounded-xl border border-solid border-zinc-900 text-zinc-900">
            Previous
          </button>
          <button type="submit" className="overflow-hidden gap-2.5 self-stretch p-3.5 my-auto text-white bg-red-600 rounded-xl w-[95px]">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}