import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useShopsContext } from "../../../context/shops.context";
import DataTable from "react-data-table-component";

function Adoptions() {
  const { id } = useParams();
  const { getAdoptionApplications, applications, loading } = useShopsContext();

  const navigator = useNavigate();

  // Fetch user shops when the component render
  useEffect(() => {
    getAdoptionApplications(id);
  }, []);

  const columns = [
    {
      name: "Pet",
      selector: (row) => (
        <button
          onClick={() => {
            navigator(`/pets/${row.pet._id}`);
          }}
        >
          <img
            src={row.pet.profilePicture}
            alt=""
            className="h-10 w-10 rounded-full p-[4px]"
          />
        </button>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Pet Name",
      selector: (row) => row.pet.name,
      sortable: true,
      wrap: true,
    },

    {
      name: "Pet Gender",
      selector: (row) => row.pet.gender,
      sortable: true,
      wrap: false,
    },

    {
      name: "Type of Pet",
      selector: (row) => row.pet.typeOfAnimal,
      sortable: true,
    },

    {
      name: "Applicant",
      selector: (row) => (
        <img
          src={row.user.profilePicture}
          alt=""
          className="h-10 w-10 rounded-full p-[4px]"
        />
      ),
      sortable: true,
      wrap: true,
    },

    {
      name: "Applicant Name",
      selector: (row) => row.user.fullName,
      sortable: true,
    },

    {
      name: "Accepted",
      selector: (row) => (row.isAccepted ? "Yes" : "No"),
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => (
        <button
          className="bg-orange-400 text-white text-xs p-[5px] rounded-xl shadow-xl"
          onClick={() => navigator(`/user/shops/${id}/applications/${row._id}`)}
        >
          View
        </button>
      ),
      sortable: true,
    },
  ];

  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Pet Applications</p>
      </div>
    );
  }

  if (applications.length > 0) {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <h2 className="text-2xl text-AMblue">Adoption Applications</h2>
        <hr />
        <div className="">
          <DataTable
            columns={columns}
            data={applications}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="90vh"
            selectableRowsHighlight
            highlightOnHover
            subHeader
            onRowClicked={(row) => {
              // console.log(row);
              navigator(`/user/shops/${id}/applications/${row._id}`);
            }}
            pointerOnHover
            responsive
            striped
            subHeaderAlign="right"
            direction="vertical"
            dense
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="items-center justify-center flex flex-1 bg-white h-full">
        <div className="p-4 rounded-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl mb-4 text-AMblue">Adoption Applications</h2>
          <p>There is not applications at the moment</p>
          <Link to="/user/shops">
            <button className="mt-4 bg-AMblue text-white py-2 px-4 rounded flex gap-4 items-center shadow-xl shadow-AMblue/25">
              <ArrowCircleLeft /> Go Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Adoptions;
