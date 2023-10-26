import { createContext, useContext, useEffect, useState } from "react";
import { apiConnect } from "../services/axios";

const PetsContext = createContext();

const PetsProviderWrapper = ({ children }) => {
  const [allPets, setAllPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setsearchResults] = useState([]);
  const [petDetails, setPetDetails] = useState(null);
  const [message, setMessage] = useState(null);

  function handleError(error) {
    setLoading(false);
    const { response } = error;
    setError(response?.message);
  }

  const fetchAllPets = async () => {
    try {
      setLoading(true);
      const response = await apiConnect.getAllPets();
      setAllPets(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  // Create a pet
  const createPet = async (petFormData) => {
    try {
      setLoading(true);
      const response = await apiConnect.createPet(petFormData);
      setPetDetails(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  // Fetch a pet by ID
  const getPetById = async (id) => {
    try {
      setLoading(true);
      const response = await apiConnect.getPetById(id);
      setPetDetails(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const deletePetById = async (id) => {
    try {
      setLoading(true);
      const response = await apiConnect.deletePet(id);
      setMessage(response.data?.message);
      // update all pets by fetching it
      await fetchAllPets();
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  const updatePetById = async (id, updatedData) => {
    try {
      setLoading(true);
      const response = await apiConnect.updatePet(id, updatedData);
      setMessage(response.data);
      // Update the pet in the state
      await fetchAllPets();
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  // Create a shop
  const createShop = async (shopFormData) => {
    try {
      setLoading(true);
      await apiConnect.createShop(shopFormData);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  // search pets
  const searchPets = async (searchQuery) => {
    try {
      setLoading(true);
      const response = await apiConnect.searchPets(searchQuery);
      setsearchResults(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      handleError(error);
    }
  };

  // Create questionaire
  const createQuestionnaire = async (id, formData) => {
    try {
      setLoading(true);
      const response = await apiConnect.createQuestionnarie(id, formData);
      setMessage(response.data?.message);
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchAllPets();
  }, []);

  // Define context value
  const contextValue = {
    allPets,
    petDetails,
    loading,
    message,
    error,
    searchResults,
    createPet,
    fetchAllPets,
    getPetById,
    deletePetById,
    updatePetById,
    createQuestionnaire,
    createShop,
    searchPets,
  };

  return (
    <PetsContext.Provider value={contextValue}>{children}</PetsContext.Provider>
  );
};

// Define a custom hook to access the context
const usePetsContext = () => {
  const context = useContext(PetsContext);
  return context;
};

export { PetsProviderWrapper, usePetsContext };
