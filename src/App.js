import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import PetDetailsPage from "./pages/PetsPage/PetDetailsPage";
import AllPetsPage from "./pages/PetsPage/AllPetsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Signupform from "./pages/Auth/Signupform";
import Loginform from "./pages/Auth/Loginform";
import AllShopsPage from "./pages/ShopPages/AllShopsPage";
import ShopDetailsPage from "./pages/ShopPages/ShopDetailsPage";
import { Toaster } from "react-hot-toast";
import PetForm from "./pages/PetsPage/PetForm";
import ShopForm from "./pages/ShopPages/ShopForm";
import IsPrivate from "./components/IsPrivate";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserDetails from "./pages/UserProfile/components/UserDetails";
import Questionnaire from "./pages/PetsPage/Questionnaire";
import IsAnon from "./components/IsAnon";
import Users from "./pages/UserProfile/components/admin/Users";
import IsAdmin from "./components/IsAdmin";
import MyShops from "./pages/UserProfile/components/MyShops";
import MyPets from "./pages/UserProfile/components/MyPets";
import UpdateShopForm from "./pages/ShopPages/UpdateShopPage";
import UpdatePetPage from "./pages/PetsPage/UpdatePetPage.jsx";
import SearchResults from "./pages/Homepage/SearchResults";
import Adoptions from "./pages/UserProfile/components/Adoptions";
import ViewAdoptionApplication from "./pages/UserProfile/components/ViewAdoptionApplication";
import Shops from "./pages/UserProfile/components/admin/Shops";
import Pets from "./pages/UserProfile/components/admin/Pets";
import SuccessStories from "./pages/SuccessStories/SuccessStories";

function App() {
  return (
    <div className="page-bg min-h-screen">
      <Toaster />
      <Navbar />
      {/* Add routes here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/pets" element={<AllPetsPage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />

        <Route path="/success-stories" element={<SuccessStories />} />
        {/* should be authenticated */}
        <Route path="/shops/:id/pets/new" element={<PetForm />} />
        <Route
          path="/pets/:id/update"
          element={
            <IsPrivate>
              <UpdatePetPage />
            </IsPrivate>
          }
        />

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
        <Route path="/shops/:shopId/update" element={<UpdateShopForm />} />
        {/* 
        1. profile => shops, pets, update profile details
        2. admin manage pages
        3. 
        */}

        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signupform />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Loginform />
            </IsAnon>
          }
        />

        <Route
          path="/admin/users"
          element={
            <IsPrivate>
              <UserProfile>
                <IsAdmin>
                  <Users />
                </IsAdmin>
              </UserProfile>
            </IsPrivate>
          }
        />

        <Route
          path="/admin/shops"
          element={
            <IsPrivate>
              <UserProfile>
                <IsAdmin>
                  <Shops />
                </IsAdmin>
              </UserProfile>
            </IsPrivate>
          }
        />

        <Route
          path="/admin/pets"
          element={
            <IsPrivate>
              <UserProfile>
                <IsAdmin>
                  <Pets />
                </IsAdmin>
              </UserProfile>
            </IsPrivate>
          }
        />

        {/* <Route
          path="/user/details"
          element={
            <IsPrivate>
              <UserDetails>
                <p>hello</p>
              </UserDetails>
            </IsPrivate>
          }
        /> */}

        <Route path="/signup" element={<Signupform />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/pets/:id/adopt" element={<Questionnaire />} />
        <Route path="/shops/new" element={<ShopForm />} />

        <Route
          path="/user"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        >
          <Route path="details" element={<UserDetails />} />
          <Route path="mypets" element={<MyPets />} />
          <Route path="shops" element={<MyShops />} />
          <Route path="shops/:id/applications" element={<Adoptions />} />
          <Route
            path="shops/:shopId/applications/:queId"
            element={<ViewAdoptionApplication />}
          />
        </Route>

        {/* This should be the error page, any routes that we have not declared will be routed here */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* end add routes */}
    </div>
  );
}

export default App;
