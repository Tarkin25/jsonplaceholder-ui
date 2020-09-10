import React from 'react'
import {Container, List, ListItem} from '@material-ui/core';
import TodoCard from '../components/TodoCard';
import { RootState } from '../store/rootReducer';
import { useSelector } from 'react-redux';
import withRenderTime from '../high-order/withRenderTime';

const TodosPage = () => {

    const todoIds = useSelector((state: RootState) => state.entities.todos.allIds.slice(0, 10));

    return (
        <Container>
            <List>
                {todoIds.map(id => (
                    <ListItem key={id}>
                        <TodoCard id={id} />
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default withRenderTime(TodosPage)
