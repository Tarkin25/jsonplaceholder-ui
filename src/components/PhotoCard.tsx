import React from 'react'
import Photo from '../models/Photo'
import {Card, CardMedia, CardContent, makeStyles, Typography} from '@material-ui/core';

type PhotoCardProps = {
    photo: Photo
}

const useStyle = makeStyles(theme => ({
    image: {
        height: 600,
        width: 600
    }
}));

const PhotoCard = (props: PhotoCardProps) => {

    const {photo} = props;

    const classes = useStyle();

    return (
        <Card raised>
            <CardMedia
                image={photo.url}
                className={classes.image}
                component="img"
            />
            <CardContent>
                <Typography variant="body1">
                    {photo.title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PhotoCard
