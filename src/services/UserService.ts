import api from "../config/api";
import User from "../models/User";

const UserService = {
    findAll: () => api.get<User[]>("/users")
}

export default UserService;