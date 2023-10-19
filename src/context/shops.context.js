import { createContext, useContext, useEffect, useState } from "react";
import { apiConnect } from "../services/axios";

const ShopsContext = createContext();

const ShopsProviderWrapper = ({ children }) => {
  const [allShops, setAllShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shopDetails, setShopDetails] = useState(null);
  const [message, setMessage] = useState(null);

  function handleError(error) {
    setLoading(false);
    const { response } = error;
    setError(response?.message);
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

  const deleteShopById = async (id) => {
    try {
      setLoading(true);
      await apiConnect.deleteShop(id);

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
      setMessage(response.data);
      // Update the pet in the state
      await fetchAllShops();
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
    error,
    fetchAllShops,
    getShopById,
    deleteShopById,
    updateShopById,
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
