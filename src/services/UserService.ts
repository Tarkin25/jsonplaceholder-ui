import User from "../models/User";
import { Service, ServiceImpl } from "./serviceGenerics";

interface UserService extends Service<User> {

}

const userService: UserService = new ServiceImpl("/users");

export default userService;