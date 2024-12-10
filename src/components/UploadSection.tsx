import * as React from 'react';
import { UploadSectionProps } from './types';

export const UploadSection: React.FC<UploadSectionProps> = ({
  title,
  subtitle,
  required = false
}) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="text-base leading-6 text-red-500 font-[550] max-md:max-w-full">
          {title} {required && <span className="font-medium text-red-500">*</span>}
        </div>
        <div className="mt-1.5 text-sm leading-loose font-[450] text-neutral-500 max-md:max-w-full">
          {subtitle}
        </div>
      </div>
      <div className="flex flex-col justify-center px-8 py-9 mt-6 w-full rounded-xl border border-gray-200 border-dashed max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 items-center self-center p-2.5 bg-neutral-100 h-[52px] rounded-[32px] w-[52px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/351fa26128d4cc8fd3e3eb7be32a6e591338e55bc95e7773e5fe4d8c6ffb1d2d?placeholderIfAbsent=true&apiKey=e5d1d5a004684dad8cab9f5bdd4cd73c"
            alt=""
            className="object-contain self-stretch my-auto w-8 aspect-square"
          />
        </div>
        <div className="flex flex-col items-start mt-5 w-full text-sm leading-none text-center text-neutral-500 max-md:max-w-full">
          <label 
            htmlFor="file-upload" 
            className="underline decoration-auto decoration-solid underline-offset-auto cursor-pointer max-md:max-w-full"
          >
            <span className="underline text-zinc-900">Click to upload</span> or drag and drop
          </label>
          <input 
            id="file-upload" 
            type="file" 
            onChange={handleFileChange} 
            className="hidden" // Hide the default file input
          />
          {selectedFile && (
            <div className="mt-2 text-neutral-800">{selectedFile.name}</div>
          )}
          <div className="mt-2 max-md:max-w-full">Maximum file size 50 MB</div>
        </div>
      </div>
    </div>
  );
};