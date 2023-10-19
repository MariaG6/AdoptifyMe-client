import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PetDetailsPage from "./pages/PetDetailsPage/PetDetailsPage";
import AllPetsPage from "./pages/AllPetsPage/AllPetsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Signupform from "./pages/Auth/Signupform";
import Loginform from "./pages/Auth/Loginform";
import Questionnaire from "./components/Questionnaire";
import AllShopsPage from "./pages/ShopPages/AllShopsPage";
import ShopDetailsPage from "./pages/ShopPages/ShopDetailsPage";
import { Toaster } from "react-hot-toast";
import PetForm from "./components/PetForm";
import ShopForm from "./components/ShopForm";

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
        <Route path="/shops" element={<AllShopsPage />} />
        <Route path="/shops/:id" element={<ShopDetailsPage />} />
        <Route path="/pets/adopt" element={<Questionnaire />} />
        <Route path='/signup' element={<Signupform/>} />
        <Route path='/login' element={<Loginform/>} />
        <Route path="/pets/:id/adopt" element={<Questionnaire />} />
  

        {/* This should be the error page, any routes that we have not declared will be routed here */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* end add routes */}
    </div>
  );
}

export default App;
