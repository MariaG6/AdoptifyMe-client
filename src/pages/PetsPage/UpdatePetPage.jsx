import React, { useEffect, useState } from "react";
import { usePetsContext } from "../../context/pets.context";
import Swal from "sweetalert2";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function UpdatePetPage() {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    loading,
    message,
    error,
    updatePetById,
    getPetById,
    petDetails,
    setPetDetails,
  } = usePetsContext();

  const [profilePicture, setProfilePicture] = useState(null);
  const [images, setImages] = useState(null);

  // const [petFormData, setPetFormData] = useState({});

  const showSubmitAlert = () => {
    Swal.fire({
      title: "Submit",
      text: "Do you want to updated this pet?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const petData = new FormData();

        for (const [key, value] of Object.entries(petDetails)) {
          if (key !== "profilePicture" || key !== "images") {
            petData.append(key, value);
          }
        }
        profilePicture && petData.append("profilePicture", profilePicture);
        images !== null && petData.append("images", images);

        updatePetById(id, petData).then(() => {
          if (error) {
            toast.error(error, { position: "top-center" });
          } else {
            toast.success(message, { position: "top-center" });
            navigate(`/pets/${id}`);
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigate(`/pets/`);
      }
    });
  };

  // Function to handle and save form information
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetDetails({
      ...petDetails,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    showSubmitAlert();

    // Reset the form
    setPetDetails("");
  };

  useEffect(() => {
    window.scroll(0, 0);
    getPetById(id);
  }, [id]);

  return (
    <div className="w-full flex items-center justify-center pt-24 pb-12">
      <div className="bg-white px-10 py-12 rounded-3xl border-2 border-gray-100">
        <div className="flex flex-col items-center justify-center text-center">
          <PawPrint size={60} className="text-AMblue mt-2" />
          <h1 className="text-orange-400 text-xl">Update your pet!</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Name:</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              type="text"
              name="name"
              onChange={handleChange}
              value={petDetails?.name || ""}
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
              value={petDetails?.typeOfAnimal || ""}
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
              value={petDetails?.breed || ""}
            />
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Age:</label>
            <select
              name="age"
              onChange={handleChange}
              value={petDetails?.age || ""}
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
              value={petDetails?.size || ""}
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
              value={petDetails?.gender || ""}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Profile Picture:
            </label>
            <input
              type="file"
              name="profilePicture"
              onChange={(e) => {
                setProfilePicture(e.target.files[0]);
              }}
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
              multiple
              onChange={(e) => {
                setImages(e.target.files);
              }}
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
              value={petDetails?.description || ""}
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
              checked={petDetails?.isReported || false}
              className="ml-3"
            />
          </div>

          <div className="mt-6 flex justify-center items-center">
            <button
              className="bg-orange-400 text-white p-5 rounded-xl text-sm shadow-xl shadow-orange-400/25"
              disabled={loading}
            >
              {loading ? "Updating Pet Details" : "Update Pet Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePetPage;
