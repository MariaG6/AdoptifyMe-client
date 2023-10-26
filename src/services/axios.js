import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("authToken");
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
    return this.api.post("/auth/login", loginData);
  }

  verify() {
    return this.api.get("/auth/verify");
  }

  uploadImage(file) {
    return this.api.post("/api/upload", file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  createUser(newUser) {
    return this.api.post("/auth/signup", newUser, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  // =========== User Routes=============
  getUserById(id) {
    return this.api.get(`/users/${id}`);
  }

  updateUserById(id, updateData) {
    return this.api.patch(`/users/${id}`, updateData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  // ========================================

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
    return this.api.patch(`/pets/${id}`, updateData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  adoptPet(id, applicationData) {
    return this.api.put(`/pets/${id}/adopt`, applicationData);
  }

  deletePet(id) {
    return this.api.delete(`/pets/${id}`);
  }

  // =========== Shops routes =================
  getAllShops() {
    return this.api.get("/shops/allShops");
  }

  getShopById(id) {
    return this.api.get(`/shops/${id}`);
  }

  getShopByUser(userId) {
    return this.api.get(`/shops/user/${userId}`);
  }

  getShopApplications(shopId) {
    return this.api.get(`/shops/${shopId}/questionnaries`);
  }

  getApplicationById(shopId, queId) {
    return this.api.get(`/shops/${shopId}/questionnaries/${queId}`);
  }

  deleteShop(id) {
    return this.api.delete(`/shops/${id}`);
  }

  updateShop(id, updateData) {
    return this.api.patch(`/shops/${id}`, updateData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  // ============ Questionnaire Routes ===============
  createQuestionnarie(id, formData) {
    return this.api.post(`/pets/${id}/adopt`, formData);
  }

  createShop(newShopData) {
    return this.api.post("/shops/new", newShopData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  addPetToShop(newPetData, shopID) {
    return this.api.post(`/shops/${shopID}/pets/new`, newPetData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  searchPets(searchQuery) {
    return this.api.get(`/pets/search`, { params: searchQuery });
  }
}

export const apiConnect = new Api();
