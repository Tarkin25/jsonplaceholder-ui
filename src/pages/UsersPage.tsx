import React, { useState, useEffect } from 'react'
import User from '../models/User'
import UserService from '../services/UserService';
import {Container, Grid} from '@material-ui/core';
import UserCard from '../components/UserCard';
import { UserContextProvider } from '../contexts/UserContext';

const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        UserService.findAll().then(res => {
            setUsers(res.data);
        });
    }, []);

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
