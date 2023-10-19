import React, { useState } from "react";
import { usePetsContext } from "../context/pets.context";
import Swal from "sweetalert2";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";
import { useNavigate } from "react-router-dom";

function PetForm() {
  const navigate = useNavigate();
  const { createPet } = usePetsContext();
  const [profilePicture, setProfilePicture] = useState("");
  //   const [images,setImages] = useState('')

  const [petFormData, setPetFormData] = useState({
    typeOfAnimal: "dog",
    breed: "Unknown",
    age: "young",
    size: "medium",
    name: "",
    gender: "",
    dateOfBirth: "",
    profilePicture: "",
    images: [],
    description: "",
  });

  // Handle images
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const showSubmitAlert = () => {
    Swal.fire({
      title: "Submit",
      text: "Do you want to add this pet?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        createPet(petFormData); // Create the pet and save data
        Swal.fire("Pet created!", "Your pet has been created.", "success");
        navigate(`/pets/`);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigate(`/pets/`);
      }
    });
  };

  // Function to handle and save form information
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetFormData({
      ...petFormData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    showSubmitAlert();

    // Reset the form
    setPetFormData("");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <div className="flex flex-col items-center justify-center text-center">
          <PawPrint size={40} className="text-AMblue mt-2" />
          <h1 className="text-orange-400 text-xl">
            Add a new pet to AdoptifyMe family!
          </h1>
        </div>
        <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Name:</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              type="text"
              name="name"
              onChange={handleChange}
              value={petFormData.name}
            />
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Type of Animal:
            </label>
            <select
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              name="typeOfAnimal"
              onChange={handleChange}
              value={petFormData.typeOfAnimal}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Breed:</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              type="text"
              name="breed"
              onChange={handleChange}
              value={petFormData.breed}
            />
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Age:</label>
            <select
              name="age"
              onChange={handleChange}
              value={petFormData.age}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            >
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Size:</label>
            <select
              name="size"
              onChange={handleChange}
              value={petFormData.size}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            >
              <option value="very small">Very Small</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="big">Big</option>
              <option value="super big">Super Big</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Gender:</label>
            <select
              name="gender"
              onChange={handleChange}
              value={petFormData.gender}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Do you know date of birth?
            </label>
            <input
              type="date"
              name="dateOfBirth"
              onChange={handleChange}
              value={petFormData.dateOfBirth}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            />
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Profile Picture:
            </label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              value={petFormData.profilePicture}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            />
          </div>
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              If you want, you can add more images here:
            </label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              value={petFormData.images}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            />
          </div>
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Describe our furry friend more:
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              value={petFormData.description}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            />
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-red-500">
              Did you find it lost somewhere?
            </label>
            <input
              type="checkbox"
              name="isReported"
              onChange={(e) => {
                const value = e.target.checked;
                handleChange({ target: { name: "isReported", value } });
              }}
              checked={petFormData.isReported}
              className="ml-3"
            />
          </div>

          <div className="mt-6 flex justify-center items-center">
            <button className="bg-orange-400 text-white p-5 rounded-xl text-sm shadow-xl shadow-orange-400/25">
              Add new pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PetForm;
