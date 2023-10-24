import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/Auth.Context.js";
import toast from "react-hot-toast";

function Signupform() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const { signup, user, errorMessage, isLoading } = useAuthContext();
  const navigate = useNavigate();

  // ******** this method handles the file upload ********
  // const handleFileUpload = (e) => {
  //   console.log("The file to be uploaded is: ", e.target.files[0]);

  //   const uploadData = new FormData();

  //   uploadData.append("profilePicture", e.target.files[0]);

  //   service
  //     .uploadImage(uploadData)
  //     .then((response) => {
  //       console.log("response is: ", response);
  //       setProfilePicture(response.fileUrl);
  //     })
  //     .catch((err) => console.log("Error while uploading the file: ", err));

  //   setProfilePicture(e.target.file);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uploadData = new FormData();
    uploadData.append("profilePicture", profilePicture);
    uploadData.append("fullName", fullName);
    uploadData.append("email", email);
    uploadData.append("password", password);
    uploadData.append("address", address);
    uploadData.append("phoneNumber", phoneNumber);

    signup(uploadData).then(() => {
      if (errorMessage) {
        toast.error(errorMessage, { position: "top-center" });
      }
    });
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Welcome to Adoptify!</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your details
          </p>
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            <div className="mt-8">
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="tel"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="file"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Add profile picture"
                onChange={(e) => {
                  setProfilePicture(e.target.files[0]);
                }}
              />
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-AMblue text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out"
              >
                {isLoading ? "Signing up" : "Sign up"}
              </button>
              <button
                disabled={isLoading}
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 "
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                    fill="#34A853"
                  />
                  <path
                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                    fill="#FBBC05"
                  />
                </svg>
                {isLoading ? "Signing up with Google" : "Sign up with Google"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex h-full items-center justify-center w-1/2">
        <img
          src="https://unsplash.com/photos/XATEEfeN7C4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk2OTU3NTA0fA&force=true&w=2400"
          alt="Puppy-img"
        />
      </div>
    </div>
  );
}

export default Signupform;
