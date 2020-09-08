import React from 'react'
import Todo from '../models/Todo'
import { Card, CardContent, Checkbox, Typography, makeStyles } from '@material-ui/core';

type TodoCardProps = {
    todo: Todo
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

    const {todo} = props;

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
