import React, { useContext, useState } from "react";
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    makeStyles,
    Link,
    CardActions,
    Collapse,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import UserContext from "../contexts/UserContext";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyle = makeStyles((theme) => ({
    cardHeader: {
        paddingBottom: theme.spacing(1)
    },
    cardContent: {
        paddingTop: 0
    }
}));

const UserCard = () => {
    
    const { name, username, email, phone, website, todos, loadTodos } = useContext(UserContext);

    const classes = useStyle();

    const [showTodos, setShowTodos] = useState(false);

    const toggleShowTodos = () => {
        if(!showTodos && !todos) {
            loadTodos().then(() => setShowTodos(true));
        } else {
            setShowTodos(showTodos => !showTodos);
        }
    }

    return (
        <Card raised>
            <CardHeader title={name} subheader={username} className={classes.cardHeader} />
            <CardContent className={classes.cardContent} >
                <Grid container direction="row">
                    <Grid item xl={12} container direction="row" spacing={1}>
                        <Grid item xl={1}>
                            <EmailIcon fontSize="small" />
                        </Grid>
                        <Grid item xl={11}>
                            <Link href={"mailto:" + email}>
                                {email}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xl={12} container direction="row" spacing={1}>
                        <Grid item xl={1}>
                            <PhoneIcon fontSize="small" />
                        </Grid>
                        <Grid item xl={11}>
                            <Link href={"tel:" + phone}>
                                {phone}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xl={12} container direction="row" spacing={1}>
                        <Grid item xl={1}>
                            <LanguageIcon fontSize="small" />
                        </Grid>
                        <Grid item xl={11}>
                            <Link href={"https://" + website}>
                                {website}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button onClick={toggleShowTodos} endIcon={showTodos ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
                    Todos
                </Button>
            </CardActions>
            {todos ? (
                <Collapse in={showTodos} timeout="auto" unmountOnExit>
                <CardContent className={classes.cardContent}>
                    <List>
                    {todos.map(todo => (
                        <ListItem key={todo.id}>
                            <ListItemIcon>
                                <Checkbox checked={todo.completed} />
                            </ListItemIcon>
                            <ListItemText primary={todo.title} />
                        </ListItem>
                    ))}
                    </List>
                </CardContent>
            </Collapse>
            ) : null}
        </Card>
    );
};

export default UserCard;
