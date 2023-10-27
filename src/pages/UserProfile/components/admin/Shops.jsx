import React, { useEffect } from "react";
import { useShopsContext } from "../../../../context/shops.context";
import { useNavigate } from "react-router-dom";

function Shops() {
  const { allShops, fetchAllShops, loading } = useShopsContext();
  const navigate = useNavigate();

  // Fetch users when the component render
  useEffect(() => {
    fetchAllShops();
  }, []);

  return <div>Shops</div>;
}

export default Shops;
