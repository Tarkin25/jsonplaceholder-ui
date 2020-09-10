import React from 'react'
import {Container, Grid} from '@material-ui/core';
import UserCard from '../components/UserCard';
import { RootState } from '../store/rootReducer';
import { useSelector } from 'react-redux';
import withRenderTime from '../high-order/withRenderTime';

const UsersPage = () => {

    const userIds = useSelector((state: RootState) => state.entities.users.allIds);

    return (
        <Container>
            <Grid container direction="row" spacing={2} >
                {userIds.map(id => (
                    <Grid key={id} item xl={4} lg={6} md={6} sm={8} xs={12}>
                            <UserCard id={id} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


export default withRenderTime(UsersPage)
