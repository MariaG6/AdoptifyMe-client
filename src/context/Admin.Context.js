import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { apiConnect } from "../services/axios";

// Create the AdminContext
const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [allShops, setAllShops] = useState([]);
  const [allPets, setAllPets] = useState([]);
  const [allAdoptionApplications, setAllAdoptionApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleError(error) {
    setLoading(false);
    const { response } = error;
    toast.error(response.data?.message, { position: "top-center" });
  }

  const fetchAllPets = async () => {
    try {
      setLoading(true);
      const response = await apiConnect.adminGetAllPets();
      setAllPets(response.data);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await apiConnect.adminGetAllUsers();
      setAllUsers(response.data);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchAllShops = async () => {
    try {
      setLoading(true);
      const response = await apiConnect.adminGetAllShops();
      setAllShops(response.data);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchAllAdoptionApplications = async () => {
    try {
      setLoading(true);
      const response = await apiConnect.adminGetAllAdoptionApplications();
      setAllAdoptionApplications(response.data);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        fetchAllPets,
        allPets,
        loading,
        allUsers,
        allShops,
        allAdoptionApplications,
        fetchAllUsers,
        fetchAllAdoptionApplications,
        fetchAllShops,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

// Create a custom hook for using the AdminContext
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  return context;
};
