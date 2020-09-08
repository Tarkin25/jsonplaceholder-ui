import api from "../config/api";
import User from "../models/User";
import Todo from "../models/Todo";
import { AlbumBase } from "../models/Album";
import Post from "../models/Post";

const findAll = () => api.get<User[]>("/users");

const getTodos = (id: number) => api.get<Todo[]>(`/users/${id}/todos`)

const getAlbums = (id: number) => api.get<AlbumBase[]>(`/users/${id}/albums`)

const getPosts = (id: number) => api.get<Post[]>(`/users/${id}/posts`)

const UserService = {
    findAll,
    getTodos,
    getAlbums,
    getPosts
}

export default UserService;