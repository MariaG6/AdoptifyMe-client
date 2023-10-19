import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // ============ auth routes ===============
  login(loginData) {
    // {email: test@gmail.com, password: 12345}
    return this.api.post("/login");
  }

  // ============ Pets Routes ===============
  getAllPets() {
    return this.api.get("/pets/allPets");
  }

  getPetById(id) {
    return this.api.get(`/pets/${id}`);
  }

  createPet(newPetData) {
    return this.api.post("/pets/new", newPetData);
  }

  updatePet(id, updateData) {
    return this.api.put(`/pets/${id}`, updateData);
  }

  adoptPet(id, applicationData) {
    return this.api.put(`/pets/${id}/adopt`, applicationData);
  }

  deletePet(id) {
    return this.api.delete(`/pets/${id}`);
  }

  // =========== shops routes =================
  getAllShops() {
    return this.api.get("/shops/allShops");
  }

  getShopById(id) {
    return this.api.get(`/shops/${id}`);
  }

  deleteShop(id) {
    return this.api.delete(`/shops/${id}`);
  }

  updateShop(id, updateData) {
    return this.api.put(`/shops/${id}`, updateData);
  }
}

export const apiConnect = new Api();
