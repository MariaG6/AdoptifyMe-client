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

  // ============ auth Routes ===============

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
    return this.api.post("/auth/signup", newUser);
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

  // ============ Questionnaire Routes ===============
  createQuestionnarie(id, formData) {
    return this.api.post(`/pets/${id}/adopt`, formData);
  }

    // ============ Shop Routes ===============
    createShop(newShopData) {
      return this.api.post("/shops/new", newShopData);
    }
}

export const apiConnect = new Api();
