import React, { useEffect } from 'react'
import User from '../models/User'
import {Container, Grid} from '@material-ui/core';
import UserCard from '../components/UserCard';
import { UserContextProvider } from '../contexts/UserContext';
import { RootState } from '../store/rootReducer';
import { loadUsers } from '../store/user/userActions';
import { useSelector } from 'react-redux';
import useThunkDispatch from '../hooks/useThunkDispatch';

const usersSelector: (state: RootState) => User[] = state => Object.values(state.users.byId)
const loadedSelector: (state: RootState) => boolean = state => state.users.loaded

const UsersPage = () => {

    const users = useSelector(usersSelector);
    const loaded = useSelector(loadedSelector);
    const dispatch = useThunkDispatch();

    useEffect(() => {
        if(!loaded) {
            dispatch(loadUsers());
        }
    }, [dispatch, loaded])

    return (
        <Container>
            <Grid container direction="row" spacing={2}>
                {users.map(user => (
                    <Grid key={user.id} item xl={4}>
                        <UserContextProvider user={user}>
                            <UserCard />
                        </UserContextProvider>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


export default UsersPage
