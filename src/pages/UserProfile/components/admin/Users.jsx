import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useAdminContext } from "../../../../context/Admin.Context";

function Users() {
  const { loading, allUsers, fetchAllUsers } = useAdminContext();
  const navigate = useNavigate();

  // Fetch users when the component render
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const columns = [
    {
      name: "User",
      selector: (row) => (
        <button
          disabled
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
      name: "Name",
      selector: (row) => row.fullName,
      sortable: true,
      wrap: true,
    },
    {
      name: "Address",
      selector: (row) => row.address ?? "N/A",
      sortable: true,
      wrap: true,
      center: true,
    },
    {
      name: "Contact",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "User email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "No. of Shops",
      selector: (row) => row.shops.length,
      sortable: true,
      center: true,
    },
  ];
  if (loading) {
    return (
      <div className="text-xl mb-4 text-AMblue flex justify-center items-center h-full bg-white">
        <p>Loading Users</p>
      </div>
    );
  }

  if (allUsers.length > 0) {
    return (
      <div className="flex flex-col bg-white h-full p-4">
        <h2 className="text-2xl text-AMblue">All Users</h2>
        <hr />
        <div className="">
          <DataTable
            columns={columns}
            data={allUsers}
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

export default Users;
