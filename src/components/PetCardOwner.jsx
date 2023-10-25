import React from "react";
import { MapPin, PencilLine } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { usePetsContext } from "../context/pets.context";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

function PetCardOwner({ petData, owner, _id }) {
  const navigate = useNavigate();
  const { deletePet, error, message } = usePetsContext();

  const showDeleteAlert = () => {
    Swal.fire({
      title: "¿Are you sure?",
      text: "This action will remove the pet. This action can not be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePet(petData._id).then(() => {
          if (error) {
            toast.error(error, { position: "top-center" });
          } else {
            toast.success(message, { position: "top-center" });
            navigate(`/pets`);
          }
        });
        Swal.fire("Deleted", "The pet has been removed", "success");
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
    <Link to={`/pets/${petData._id}`}>
      <div className="w-full shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-orange-400/20 rounded-xl">
        {/* image */}
        {owner ? (
          <div className="h-[180px] overflow-hidden">
            <Fade>
              <div>
                <div className="m-2">
                  <button
                    className="bg-transparent"
                    onClick={() => {
                      navigate(`/pets/${petData._id}/update`);
                    }}
                  >
                    <PencilLine size={20} className="gray" />
                  </button>
                </div>

                <img
                  src={petData.profilePicture}
                  alt="pet image"
                  className="object-cover"
                />

                <div className="m-2">
                  <button className="bg-transparent" onClick={handleDelete()}>
                    <Trash size={20} className="gray" />
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        ) : (
          <div className="h-[180px] overflow-hidden">
            <Fade>
              <img
                src={petData.profilePicture}
                alt="pet image"
                className="object-cover"
              />
            </Fade>
          </div>
        )}

        {/* card body */}
        <div className="p-3 text-sm flex justify-between bg-white">
          <h3>{petData.name}</h3>

          <div className="flex gap-1 items-center">
            <MapPin size={14} />
            <h3 className="overflow-ellipsis">{petData?.shop?.shopName}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PetCardOwner;
