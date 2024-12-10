import * as React from "react";
import { LocationCardProps } from "./types";

export const LocationCard: React.FC<LocationCardProps> = ({
  image,
  city,
  type,
  company,
  address
}) => {
  return (
    <div className="flex flex-col px-7 py-6 rounded-xl max-md:px-5">
      <div className="flex flex-col justify-center max-w-full w-[237px]">
        <img
          loading="lazy"
          src={image}
          alt={`${city} office location`}
          className="object-contain rounded-lg shadow-lg aspect-[1.32] w-[53px]"
        />
        <div className="flex flex-col mt-3 w-full">
          <div className="text-lg font-semibold leading-none text-stone-50">
            {city}
          </div>
          <div className="mt-1.5 text-sm leading-none text-neutral-200">
            {type}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 w-full text-sm text-neutral-200">
        <div className="leading-none">{company}</div>
        <div className="mt-2 leading-5">{address}</div>
      </div>
    </div>
  );
};