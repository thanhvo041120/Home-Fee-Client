import rootInstance from "../utils/axios.config";

export class AuthApi {
  async login(data) {
    try {
      const URL = "/auth/login";
      const response = await rootInstance.post(URL, data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}
