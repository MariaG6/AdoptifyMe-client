import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PetDetailsPage from "./pages/PetsPage/PetDetailsPage";
import AllPetsPage from "./pages/PetsPage/AllPetsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Signupform from "./pages/Auth/Signupform";
import Loginform from "./pages/Auth/Loginform";
import Questionnaire from "./components/Questionnaire";
import AllShopsPage from "./pages/ShopPages/AllShopsPage";
import ShopDetailsPage from "./pages/ShopPages/ShopDetailsPage";
import { Toaster } from "react-hot-toast";
import PetForm from "./pages/PetsPage/PetForm";
import ShopForm from "./pages/ShopPages/ShopForm";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="page-bg min-h-screen">
      <Toaster />
      <Navbar />
      {/* Add routes here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pets" element={<AllPetsPage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />

        {/* should be authenticated */}
        {/* <Route path="/pets/add" element={<PetForm />} /> */}
        <Route path="/shops/:id/pets/new" element={<PetForm />} />

        {/* should be authenticated */}
        <Route
          path="/pets/:id/adopt"
          element={
            <IsPrivate>
              <Questionnaire />
            </IsPrivate>
          }
        />

        <Route path="/shops" element={<AllShopsPage />} />

        {/* should be authenticated */}
        <Route
          path="/shops/add"
          element={
            <IsPrivate>
              <ShopForm />
            </IsPrivate>
          }
        />
        <Route path="/shops/:id" element={<ShopDetailsPage />} />

        <Route path="/signup" element={<Signupform />} />
        <Route path="/login" element={<Loginform />} />

        {/* 
        1. profile => shops, pets, update profile details
        2. admin manage pages
        3. 
        
        */}

        {/* This should be the error page, any routes that we have not declared will be routed here */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* end add routes */}
    </div>
  );
}

export default App;
