import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import { AlbumBase } from "../models/Album";
import AlbumService from "../services/AlbumService";
import Photo from "../models/Photo";
import PhotoCard from "../components/PhotoCard";

const AlbumPage = () => {
    const { id } = useParams();

    const [album, setAlbum] = useState<AlbumBase>();
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        AlbumService.findById(id).then((res) => {
            setAlbum(res.data);
        });

        AlbumService.getPhotos(id).then((res) => {
            setPhotos(res.data);
        });
    }, [id]);

    if (album) {
        return (
            <Container>
                <Grid container justify="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            {album.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={2} justify="space-between">
                    {photos.map(photo => (
                        <Grid item key={photo.id} >
                            <PhotoCard photo={photo} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    } else return <CircularProgress />;
};

export default AlbumPage;
