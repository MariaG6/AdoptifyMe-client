import {
  BellSimpleRinging,
  BookOpenText,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import React from "react";

function AdoptionProcess() {
  return (
    <div className="p-4 bg-opacity-50 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* title */}
      <div className="w-full bg-white rounded-xl p-4 flex flex-col justify-center items-center py-6">
        <div className="bg-orange-100 p-4 rounded-full">
          <MagnifyingGlass size={50} color="gray" />
        </div>
        <h3 className="mt-2 text-orange-400">Find a pet</h3>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Discover your perfect pet in our adoption catalog.
          </p>
        </div>
      </div>

      <div className="w-full bg-white rounded-xl p-4 flex flex-col justify-center items-center py-6">
        <div className="bg-orange-100 p-4 rounded-full">
          <BookOpenText size={50} color="gray" />
        </div>
        <h3 className="mt-2 text-orange-400">Apply</h3>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Express your interest by completing an adoption application.
          </p>
        </div>
      </div>

      <div className="w-full bg-white rounded-xl p-4 flex flex-col justify-center items-center py-6">
        <div className="bg-orange-100 p-4 rounded-full">
          <BellSimpleRinging size={50} color="gray" />
        </div>
        <h3 className="mt-2 text-orange-400">Quick Response</h3>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Get a swift response from the pet's caretaker.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdoptionProcess;
