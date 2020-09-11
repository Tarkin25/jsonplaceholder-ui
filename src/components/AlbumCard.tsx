import React from "react";
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    makeStyles,
    Link,
} from "@material-ui/core";
import Album from "../models/Album";

type AlbumCardProps = {
    album: Album;
};

const useStyle = makeStyles(theme => ({
    thumbnail: {
        height: 150,
    },
    link: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none"
        }
    },
    cardContent: {
        padding: theme.spacing(1)
    }
}));

const AlbumCard = (props: AlbumCardProps) => {
    const { album } = props;

    const classes = useStyle();

    return (
        <Card raised>
            <Link className={classes.link} variant="body1" color="inherit" href={`/albums/${album.id}`}>
                <CardActionArea>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="body1">{album.title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default AlbumCard;
