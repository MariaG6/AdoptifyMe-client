import { ArrowCircleLeft } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePetsContext } from "../../context/pets.context";
import PetCardShimmer from "../../components/PetCardShimmer";
import PetCard from "../../components/PetCard";
import { v4 as uuidv4 } from "uuid";

function PetDetailsPage() {
  const { id } = useParams();
  const navigator = useNavigate();

  const { petDetails, loading, message, error, getPetById, allPets } =
    usePetsContext();

  console.log(petDetails);

  useEffect(() => {
    getPetById(id);
  }, [id]);

  return (
    <div className="w-full pb-12">
      {/* body */}
      <section className="pt-16 px-8 md:px-12">
        <div className="bg-opacity-50 backdrop-blur-sm p-4">
          <button
            onClick={() => {
              navigator(-1);
            }}
          >
            <ArrowCircleLeft size={32} color="gray" />
          </button>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5">
            <div className="flex flex-col w-full p-2 text-center md:text-left">
              <h2 className="text-2xl">Story of {petDetails?.name}</h2>

              <div className="flex gap-6 mt-5">
                <div>
                  <h3>Breed</h3>
                  <p className="text-sm text-gray-400">{petDetails?.breed}</p>
                </div>

                <div>
                  <h3>Age</h3>
                  <p className="text-sm text-gray-400">{petDetails?.age}</p>
                </div>

                <div>
                  <h3>Gender</h3>
                  <p className="text-sm text-gray-400">{petDetails?.gender}</p>
                </div>

                <div>
                  <h3>Size</h3>
                  <p className="text-sm text-gray-400">{petDetails?.size}</p>
                </div>
              </div>

              {/* about the caretaker */}
              <div className="mt-8">
                <h2 className="text-xl">About caretaker</h2>

                <div className="flex mt-4 gap-6">
                  <div>
                    <h3>Name</h3>
                    <p className="text-sm text-gray-400">
                      {petDetails?.shop?.shopName}
                    </p>
                  </div>

                  <div>
                    <h3>Website</h3>
                    <a
                      href={petDetails?.shop?.website}
                      target="_blank"
                      className="text-sm text-gray-400"
                    >
                      {petDetails?.shop?.website}
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm tracking-widest leading-normal text-gray-500">
                {petDetails?.description}
              </p>
            </div>

            <div className="flex justify-center flex-col items-center">
              <img
                src={petDetails?.profilePicture}
                alt="pet photo"
                className="rounded-full w-56 h-56 object-cover"
              />

              <button
                onClick={() => {
                  navigator(`/${petDetails._id}/adopt`);
                }}
                className="mt-4 p-4 bg-orange-400 text-white rounded-xl shadow-xl shadow-orange-400/20"
              >
                I want to Adopt
              </button>
            </div>
          </div>

          {/* if there are images, show them here */}
          <div className="flex justify-center items-center mt-6 gap-3">
            {petDetails?.images != null &&
              petDetails?.images.slice(0, 4).map((image) => {
                const key = uuidv4();
                return (
                  <img src={image} className="h-48 object-cover" key={key} />
                );
              })}
          </div>

          <hr className="mt-8" />

          {/* other pets */}
          <div className="mt-8 px-4">
            <h3>Other pets available</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 py-4 bg-opacity-50 backdrop-blur-md">
              {loading
                ? [1, 2, 3, 4, 5, 6].map((shimmerId) => {
                    return <PetCardShimmer key={shimmerId} />;
                  })
                : allPets
                    .filter((pet) => pet._id != id)
                    .slice(0, 8)
                    .map((petData) => {
                      return <PetCard petData={petData} key={petData._id} />;
                    })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PetDetailsPage;
