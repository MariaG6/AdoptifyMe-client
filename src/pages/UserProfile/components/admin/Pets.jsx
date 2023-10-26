import React, { useEffect } from "react";
import { usePetsContext } from "../../../../context/pets.context";
import { useNavigate } from "react-router-dom";

function Pets() {
  const { allPets, fetchAllPets, loading } = usePetsContext();
  const navigate = useNavigate();

  // Fetch users when the component render
  useEffect(() => {
    fetchAllPets();
  }, []);

  return <div>Pets</div>;
}

export default Pets;
