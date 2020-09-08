import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3">Jsonplaceholder with TypeScript</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
