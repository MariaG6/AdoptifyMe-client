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
}

export const apiConnect = new Api();
