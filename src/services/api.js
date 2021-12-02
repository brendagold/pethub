import axios from "axios";

const api = axios.create({
    baseURL:"https://pets-v2.dev-apis.com/pets"
    
    
})

export default api;