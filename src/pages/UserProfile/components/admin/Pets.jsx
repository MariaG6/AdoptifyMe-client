import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useAdminContext } from "../../../../context/Admin.Context";

function AllPets() {
  const { loading, allPets, fetchAllPets } = useAdminContext();
  const navigate = useNavigate();

  // Fetch users when the component render
  useEffect(() => {
    fetchAllPets();
  }, []);

  const columns = [
    {
      name: "",
      selector: (row) => (
        <button
          onClick={() => {
            navigate(`/pets/${row._id}`);
          }}
        >
          <img
            src={row.profilePicture}
            alt="user"
            className="h-10 w-10 rounded-full p-[4px]"
          />
        </button>
      ),
      sortable: true,
      wrap: true,
    },
    {
      name: "Pet Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },

    {
      name: "Pet Gender",
      selector: (row) => row.gender,
      sortable: true,
    },

    {
      name: "Pet Type",
      selector: (row) => row.typeOfAnimal,
      sortable: true,
      center: true,
    },

    {
      name: "Adopted Owner",
      selector: (row) => row.owner ?? "N/A",
      sortable: true,
      wrap: true,
      center: true,
    },

    {
      name: "Caretaker",
      selector: (row) =>
        row.isAdopted ? (
          row.user.fullName
        ) : (
          <button
            className="border border-gray-300 px-2 py-[3px] rounded-xl"
            onClick={() => {
              navigate(`/shops/${row.shop._id}`);
            }}
          >
            {row.shop.shopName}
          </button>
        ),
      sortable: true,
      center: true,
      wrap: true,
    },
  ];
  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Pets</p>
      </div>
    );
  }

  if (allPets.length > 0) {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <h2 className="text-2xl text-AMblue">All Pets</h2>
        <hr />
        <div className="">
          <DataTable
            columns={columns}
            data={allPets}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="90vh"
            selectableRowsHighlight
            highlightOnHover
            subHeader
            // onRowClicked={(row) => {
            //   navigator(`/user/shops/${row.id}`);
            // }}
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
          <h2 className="text-2xl mb-4 text-AMblue">All Users</h2>
          <p>There is no users at the moment</p>
          <Link to="/">
            <button className="mt-4 bg-AMblue text-white py-2 px-4 rounded flex gap-4 items-center shadow-xl shadow-AMblue/25">
              <ArrowCircleLeft /> Go Homepage
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AllPets;
