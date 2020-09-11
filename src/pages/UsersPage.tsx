import React from 'react'
import {Container, Grid} from '@material-ui/core';
import UserCard from '../components/UserCard';
import { useSelector } from 'react-redux';
import withRenderTime from '../high-order/withRenderTime';
import { selectUserIds } from '../store/entity/user/userSelectors';

const UsersPage = () => {

    const userIds = useSelector(selectUserIds);

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
