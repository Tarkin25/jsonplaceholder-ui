import React, { createContext, ReactNode } from 'react'
import User from '../models/User';
import Todo from '../models/Todo';
import { AlbumBase } from '../models/Album';
import Post from '../models/Post';
import UserService from '../services/UserService';
import useLoader, { Loader } from '../hooks/useLoader';

type UserContextValue = User & {
    todos: Loader<Todo>,
    albums: Loader<AlbumBase>,
    posts: Loader<Post>
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
    todos: undefined!,
    albums: undefined!,
    posts: undefined!
}

const UserContext = createContext<UserContextValue>(defaultValue);

const UserContextProvider = (props: UserContextProviderProps) => {

    const {user, children} = props;

    const value = {
        ...user,
        todos: useLoader(() => UserService.getTodos(user.id).then(res => res.data)),
        albums: useLoader(() => UserService.getAlbums(user.id).then(res => res.data)),
        posts: useLoader(() => UserService.getPosts(user.id).then(res => res.data))
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
