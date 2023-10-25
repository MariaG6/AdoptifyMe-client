import React from "react";
import { MapPin, PencilLine } from "@phosphor-icons/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { usePetsContext } from "../context/pets.context";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Auth.Context";

function PetCardOwner({ petData, shop, shopId }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { deletePetById, error, message } = usePetsContext();
  const { user } = useAuthContext();

  const showDeleteAlert = () => {
    Swal.fire({
      title: "¿Are you sure?",
      text: "This action will remove the pet and can not be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "gray",
      confirmButtonText: "Yes, remove",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePetById(petData._id).then(() => {
          if (error) {
            toast.error(error, { position: "top-center" });
          } else {
            toast.success(message, { position: "top-center" });
            navigate(`/shops/${shop._id}`);
          }
        });
        // Swal.fire("Deleted", "The pet has been removed", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigator(`/pets`);
      }
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    showDeleteAlert();
  };

  return (
    <div className="w-full shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-orange-400/20 rounded-xl">
      {/* image */}
      {id === petData?.shop && shop?.owner?.includes(user?._id) && (
        <>
          <div className="absolute rounded-br-xl backdrop-blur-md bg-white px-3 py-2 z-50">
            <button
              className="bg-transparent p-2"
              onClick={() => {
                navigate(`/pets/${petData._id}/update`);
              }}
            >
              <PencilLine size={20} className="gray" />
            </button>

            <button
              className="bg-transparent text-red-700 ml-3"
              onClick={handleDelete}
            >
              <Trash size={20} className="gray" />
            </button>
          </div>
        </>
      )}

      <Link to={`/pets/${petData._id}`}>
        <div className="h-[180px] overflow-hidden">
          <Fade>
            <img
              src={petData.profilePicture}
              alt="pet image"
              className="object-cover"
            />
          </Fade>
        </div>

        {/* card body */}
        <div className="p-3 text-sm flex justify-between bg-white">
          <h3>{petData.name}</h3>

          <div className="flex gap-1 items-center">
            <MapPin size={14} />
            <h3 className="overflow-ellipsis">{petData?.shop?.shopName}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PetCardOwner;
