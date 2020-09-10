import React from 'react'
import Todo from '../models/Todo'
import { Card, CardContent, Checkbox, Typography, makeStyles } from '@material-ui/core';
import { RootState } from '../store/rootReducer';
import {createSelector} from 'reselect';
import { useSelector } from 'react-redux';

type TodoCardProps = {
    id: string
}

const useStyle = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
}))

const TodoCard = (props: TodoCardProps) => {

    const {id} = props;

    const todo = useSelector((state: RootState) => state.entities.todos.byId[id]);

    const classes = useStyle();

    return (
        <Card raised className={classes.root}>
            <CardContent className={classes.content}>
                <Checkbox readOnly checked={todo.completed} color="primary" />
                <Typography variant="h5">
                    {todo.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TodoCard
