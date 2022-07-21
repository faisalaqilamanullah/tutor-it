import React from "react";
import {
  DesktopComputerIcon,
  PrinterIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  VideoCameraIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

const Categories = () => {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div>
          <span className="font-bold">Kategori</span>
        </div>
        <div>
          <span className="font-bold text-primary">Lihat semua</span>
        </div>
      </div>
      <div className="my-7">
        <div className="grid grid-cols-3 gap-4">
          <div className="card bg-violet-100 flex justify-center place-items-center aspect-square">
            <DesktopComputerIcon className="h-7 w-7 text-primary" />
            <span className="text-xs mt-5">Komputer</span>
          </div>
          <div className="card bg-violet-100 flex justify-center place-items-center aspect-square">
            <PrinterIcon className="h-7 w-7 text-primary" />
            <span className="text-xs mt-5">Printer</span>
          </div>
          <div className="card bg-violet-100 flex justify-center place-items-center aspect-square">
            <DeviceMobileIcon className="h-7 w-7 text-primary" />
            <span className="text-xs mt-5">PDA</span>
          </div>
          <div className="card bg-violet-100 flex justify-center place-items-center aspect-square">
            <DeviceTabletIcon className="h-7 w-7 text-primary" />
            <span className="text-xs mt-5">Tablet</span>
          </div>
          <div className="card bg-violet-100 flex justify-center place-items-center aspect-square">
            <VideoCameraIcon className="h-7 w-7 text-primary" />
            <span className="text-xs mt-5">CCTV</span>
          </div>
          <div className="card bg-violet-100 flex justify-center place-items-center aspect-square">
            <ViewGridIcon className="h-7 w-7 text-primary" />
            <span className="text-xs mt-5">Lainnya</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
