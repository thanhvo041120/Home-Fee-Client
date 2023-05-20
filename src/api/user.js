import rootInstance from "../utils/axios.config";

export class UserApi {
  async register(data) {
    try {
      const URL = "/user/add";
      const response = await rootInstance.post(URL, data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
}
