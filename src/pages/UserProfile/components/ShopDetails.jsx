import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/Auth.Context";
import { LinkSimple } from "@phosphor-icons/react/dist/ssr";

function ShopDetails() {
  const user = useAuthContext();
  const [testShop, setTestShop] = useState(false);

  // If the user has a shop, show the shop details
  if (testShop) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="p-4 w-1/2 rounded-lg">
          <h2 className="text-2xl mb-4 text-AMblue">Shop Details</h2>
          <div className="flex items-center mb-2">
            <img
              // src={shop.shopLogo}
              // alt={shop.shopName}
              className="w-12 h-12 rounded-full mr-2"
            />
            <div>
              {/* <h3 className="text-xl text-orange-400">{shop.shopName}</h3>
                  {shop.website && <p className="text-gray-700">
                  <LinkSimple size={25} />
                  {shop.website}</p>} */}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg text-orange-400">Pets</h4>
            {/* {shop.pets.length > 0 ? (
                  <ul>
                    {shop.pets.map((pet) => (
                      <li key={pet._id}>{pet.petName}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No pets available in this shop</p>
                )} */}
          </div>
          <div className="mb-4">
            <h4 className="text-lg text-orange-400">Owner</h4>
            {/* {shop.owner ? (
                  <p>{shop.owner.fullName}</p>
                ) : (
                  <p>No owner information available</p>
                )} */}
          </div>
          <div className="mb-4">
            <Link to="/shops/new">
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Connect a new shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // If the user doesnt have a store
  else {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="p-4 w-1/2 rounded-lg">
          <h2 className="text-2xl mb-4 text-AMblue">Shop Details</h2>
          <p>You currently have no shops.</p>
          <Link to="/shops/new">
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
              Connect your first shop
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShopDetails;
