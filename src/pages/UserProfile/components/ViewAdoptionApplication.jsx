import React, { useEffect } from "react";
import { useShopsContext } from "../../../context/shops.context";
import { useNavigate, useParams } from "react-router-dom";
import { XCircle } from "@phosphor-icons/react/dist/ssr";
import { ArrowCircleLeft, CheckCircle } from "@phosphor-icons/react";
import UserCard from "./UserCard";
import QuestionnaireCard from "./QuestionnaireCard";
import Swal from "sweetalert2";

function ViewAdoptionApplication() {
  const { shopId, queId } = useParams();
  const {
    getAdoptionApplicationById,
    loading,
    application,
    acceptAdoptionApplication,
    rejectAdoptionApplication,
    accepting,
    rejecting,
  } = useShopsContext();

  const navigator = useNavigate();

  function revokeAcceptedApplication() {
    Swal.fire({
      title: "Confirm",
      text: "Revoking this application will make the pet available for adoption and this change is not reversible. Do you wish to continue?",
      icon: "warning",

      showCancelButton: true,
      confirmButtonText: "Revoke",
      denyButtonText: `Cancel`,
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        rejectAdoptionApplication(shopId, queId).then(() => {
          navigator(-1);
        });
      } else if (result.isDenied) {
        Swal.fire("No chamges were made!", "", "info");
      }
    });
  }

  function rejectApplication() {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to Reject this application?",
      icon: "warning",

      showCancelButton: true,
      confirmButtonText: "Reject",
      denyButtonText: `Cancel`,
      confirmButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        rejectAdoptionApplication(shopId, queId).then(() => {
          navigator(-1);
        });
      } else if (result.isDenied) {
        Swal.fire("No chamges were made!", "", "info");
      }
    });
  }

  function acceptApplication() {
    Swal.fire({
      title: "Confirm",
      text: "This action will approve the applicant and will become the pet's adoptor. Do you wish to continue?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Accept",
      denyButtonText: `Cancel`,
      confirmButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {
        acceptAdoptionApplication(shopId, queId).then(() => {
          navigator(-1);
        });
      } else if (result.isDenied) {
        Swal.fire("No chamges were made!", "", "info");
      }
    });
  }

  // Fetch user shops when the component render
  useEffect(() => {
    getAdoptionApplicationById(shopId, queId);
  }, [queId]);

  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Application</p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-4">
            <button
              onClick={() => {
                navigator(-1);
              }}
            >
              <ArrowCircleLeft size={30} />{" "}
            </button>

            <h2 className="text-2xl text-AMblue">Application</h2>
          </div>

          {application?.isRejected && (
            <p className="p-2 bg-red-200 text-red-600 rounded-xl flex gap-2 items-center">
              <CheckCircle size={25} /> Application was once rejected!
            </p>
          )}

          {application?.isAccepted ? (
            <div className="flex gap-6">
              <p className="p-2 bg-green-200 text-green-600 rounded-xl flex gap-2 items-center">
                <CheckCircle size={25} /> Application already accepted
              </p>

              <button
                className="bg-red-400 px-5 py-2 text-white flex items-center gap-2 shadow-lg shadow-red-400/25"
                disabled={accepting || rejecting}
                onClick={() => {
                  revokeAcceptedApplication();
                }}
              >
                <XCircle size={25} /> {rejecting ? "Revoking" : "Revoke"}
              </button>
            </div>
          ) : (
            <div className="flex gap-6">
              <button
                className="bg-red-400 px-5 py-2 text-white flex items-center gap-2 shadow-lg shadow-red-400/25"
                disabled={accepting || rejecting}
                onClick={() => {
                  rejectApplication();
                }}
              >
                <XCircle size={25} /> {rejecting ? "Rejecting" : "Reject"}
              </button>
              <button
                className={`${
                  application?.isAccepted ? "bg-gray-300" : "bg-green-400"
                }  px-5 py-2 text-white flex items-center gap-2  ${
                  !application?.isAccepted && "shadow-lg shadow-green-400/25"
                }`}
                disabled={accepting || rejecting}
                onClick={() => {
                  acceptApplication();
                }}
              >
                <CheckCircle size={25} /> {accepting ? "Accepting" : "Accept"}
              </button>
            </div>
          )}
        </div>
        <hr />
        <div className="mt-4 flex gap-3">
          {/* user Profile */}
          <div className="w-1/3">
            <UserCard user={application?.user} />
          </div>

          {/* application answers */}
          <div className="w-2/3">
            <QuestionnaireCard questionnaireData={application} />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewAdoptionApplication;
