import React from 'react'
import {AppBar, Toolbar, Typography, Link, makeStyles} from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    nav: {
        display: 'flex',
        padding: theme.spacing(0, 2)
    },
    navItem: {
        margin: theme.spacing(0, 1)
    }
}))

const Navbar = () => {

    const history = useHistory();

    const classes = useStyle();

    const handleClick = (path: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()

        history.push(path);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3">Jsonplaceholder with TypeScript</Typography>
                <nav className={classes.nav}>
                    {[["/users", "Users"], ["/todos", "Todos"]].map(([path, name]) => (
                            <Link className={classes.navItem} key={path} color="inherit" variant="h5" href={path} onClick={handleClick(path)}>{name}</Link>
                    ))}
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Navbar);
