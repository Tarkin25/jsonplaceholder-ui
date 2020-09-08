import React, { createContext, ReactNode, useState } from 'react'
import User from '../models/User';
import Todo from '../models/Todo';
import { AlbumBase } from '../models/Album';
import Post from '../models/Post';
import UserService from '../services/UserService';

type UserContextValue = User & {
    todos: Todo[] | false
    loadTodos: () => Promise<void>
    albums: AlbumBase[] | false
    loadAlbums: () => Promise<void>
    posts: Post[] | false
    loadPosts: () => Promise<void>
}

type UserContextProviderProps = {
    children: ReactNode,
    user: User
}

const defaultValue: UserContextValue = {
    id: undefined!,
    name: undefined!,
    username: undefined!,
    email: undefined!,
    address: undefined!,
    phone: undefined!,
    website: undefined!,
    company: undefined!,
    todos: false,
    loadTodos: undefined!,
    albums: false,
    loadAlbums: undefined!,
    posts: false,
    loadPosts: undefined!
}

const UserContext = createContext<UserContextValue>(defaultValue);

const UserContextProvider = (props: UserContextProviderProps) => {

    const {user, children} = props;

    const [albums, setAlbums] = useState<AlbumBase[] | false>(false);

    const loadAlbums = () => UserService.getAlbums(user.id).then(res => {
        setAlbums(res.data);
    })

    const [posts, setPosts] = useState<Post[] | false>(false);

    const loadPosts = () => UserService.getPosts(user.id).then(res => {
        setPosts(res.data);
    })

    const [todos, setTodos] = useState<Todo[] | false>(false);

    const loadTodos = () => UserService.getTodos(user.id).then(res => {
        setTodos(res.data);
    })

    const value = {
        ...user,
        albums,
        loadAlbums,
        posts,
        loadPosts,
        todos,
        loadTodos
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
export {
    UserContextProvider
}
