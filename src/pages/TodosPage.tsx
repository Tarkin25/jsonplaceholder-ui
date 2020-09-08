import React, { useState, useEffect } from 'react'
import Todo from '../models/Todo'
import TodoService from '../services/TodoService';
import {Container, List, ListItem} from '@material-ui/core';
import TodoCard from '../components/TodoCard';

const TodosPage = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        TodoService.findAll().then(res => {
            setTodos(res.data);
        })
    }, []);

    return (
        <Container>
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id}>
                        <TodoCard todo={todo} />
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default TodosPage
