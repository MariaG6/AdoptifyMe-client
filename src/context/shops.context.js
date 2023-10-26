import { createContext, useContext, useEffect, useState } from "react";
import { apiConnect } from "../services/axios";
import toast from "react-hot-toast";

const ShopsContext = createContext();

const ShopsProviderWrapper = ({ children }) => {
  const [allShops, setAllShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shopDetails, setShopDetails] = useState(null);
  const [userShops, setUserShops] = useState([]);
  const [applications, setShopApplications] = useState([]);
  const [message, setMessage] = useState(null);
  const [application, setApplication] = useState(null);

  function handleError(error) {
    setLoading(false);
    const { response } = error;
    // show toast messages
    toast.error(response.data.message);
    // setError(response.data?.message);
  }

  const fetchAllShops = async () => {
    try {
      setLoading(true);
      const response = await apiConnect.getAllShops();
      setAllShops(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const addNewShop = async (shopData) => {
    try {
      setLoading(true);
      const response = await apiConnect.createShop(shopData);

      console.log(response);

      setMessage(response.data.message);
      setLoading(false);
      setError(null);

      fetchAllShops();
    } catch (error) {
      handleError(error);
    }
  };

  const addPetToShop = async (newPetData, shopID) => {
    try {
      setLoading(true);
      const response = await apiConnect.addPetToShop(newPetData, shopID);

      setMessage(response.data.data.message);
      setLoading(false);
      setError(null);

      fetchAllShops();
    } catch (error) {
      handleError(error);
    }
  };

  // Fetch a pet by ID
  const getShopById = async (id) => {
    try {
      setLoading(true);
      const response = await apiConnect.getShopById(id);
      setShopDetails(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const getShopByUser = async (id) => {
    try {
      setLoading(true);
      const response = await apiConnect.getShopByUser(id);
      setUserShops(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setUserShops([]);
      handleError(error);
    }
  };

  const deleteShopById = async (id) => {
    try {
      setLoading(true);
      const response = await apiConnect.deleteShop(id);
      setMessage(response.data.message);
      // update all pets by fetching it
      await fetchAllShops();
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const updateShopById = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await apiConnect.updateShop(id, updatedData);
      setMessage(response.data?.message);
      // Update the pet in the state
      await fetchAllShops();
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const getAdoptionApplications = async (id) => {
    try {
      setLoading(true);
      const response = await apiConnect.getShopApplications(id);
      setShopApplications(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const getAdoptionApplicationById = async (shopId, queId) => {
    try {
      setLoading(true);
      const response = await apiConnect.getApplicationById(shopId, queId);

      setApplication(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchAllShops();
  }, []);

  // Define context value
  const contextValue = {
    allShops,
    shopDetails,
    loading,
    message,
    userShops,
    error,
    applications,
    application,
    fetchAllShops,
    getShopById,
    deleteShopById,
    updateShopById,
    addNewShop,
    addPetToShop,
    getShopByUser,
    getAdoptionApplications,
    getAdoptionApplicationById,
  };

  return (
    <ShopsContext.Provider value={contextValue}>
      {children}
    </ShopsContext.Provider>
  );
};

// Define a custom hook to access the context
const useShopsContext = () => {
  const context = useContext(ShopsContext);
  return context;
};

export { ShopsProviderWrapper, useShopsContext };
