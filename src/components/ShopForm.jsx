import React, { useState } from "react";
import { Storefront } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import service from "../api/service.js";
import { usePetsContext } from "../context/pets.context";

function ShopForm() {
  const navigate = useNavigate();
  const { createShop } = usePetsContext();
  const [shopName, setShopName] = useState("");
  const [webSite, setWebSite] = useState("");
  const [shopLogo, setShopLogo] = useState("");

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    uploadData.append("shopLogo", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        setShopLogo(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));

    setShopLogo(e.target.file);
  };

  const showSubmitAlert = () => {
    Swal.fire({
      title: "Submit",
      text: "Do you want to connect this shop?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const uploadData = new FormData();

        uploadData.append("shopName", shopName);
        uploadData.append("website", webSite);
        uploadData.append("shopLogo", shopLogo);

        createShop(uploadData); // Create the pet and save data

        Swal.fire("Shop created!", "Your shop has been created.", "success");
        navigate(`/shops/`);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigate(`/shops/`);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showSubmitAlert();

    // Reset the form
    setShopName("");
    setWebSite("");
    setShopLogo("");
  };

  return (
    <div className="w-full flex items-center justify-center h-screen pb-12 ">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <div className="flex flex-col items-center justify-center text-center">
          <Storefront size={40} className="text-AMblue mt-2" />
          <h1 className="text-orange-400 text-xl">Connect a new shop!</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Shop Name:
            </label>
            <input
              type="text"
              name="shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              required
            />
          </div>
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">Website:</label>
            <input
              type="text"
              name="website"
              value={webSite}
              onChange={(e) => setWebSite(e.target.value)}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            />
          </div>
          <div className="mt-4">
            <label className="font-medium text-lg text-AMblue">
              Shop Logo:
            </label>
            <input
              type="file"
              name="shopLogo"
              value={shopLogo}
              onChange={(e) => {
                handleFileUpload(e);
              }}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            />
          </div>
          <div className="mt-6 flex justify-center items-center">
            <button className="bg-orange-400 text-white p-5 rounded-xl text-sm shadow-xl shadow-orange-400/25">
              Add shop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShopForm;
