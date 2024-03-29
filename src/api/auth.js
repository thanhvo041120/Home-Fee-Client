import rootInstance from "../utils/axios.config";

export class AuthApi {
  async login(data) {
    try {
      const URL = "/auths/login";
      const response = await rootInstance.post(URL, data);
      console.log("🚀 ~ file: auth.js:8 ~ AuthApi ~ login ~ response:", response)
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}

