class APIHandler {
    constructor(baseUrl) {
      this.BASE_URL = baseUrl;
      this.api = axios.create({ baseURL: this.BASE_URL });
    }

    getFullList() {
        return this.api
          .get("/recipes")
          .then((response) => response.data)
          .catch((error) => {
            console.error("Error in getFullList:", error);
            throw error;
          });
      }

      getOneRegister(recipesId) {
        return this.api
          .get(`/recipes/${recipesId}`)
          .then((response) => response.data)
          .catch((error) => {
            console.error("Error in getting 1 recipe:", error);
            throw error;
          });
          }
          
        }
// module.exports=APIHandler



