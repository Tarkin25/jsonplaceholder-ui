import React, { useState, useEffect } from 'react'
import {Container, Grid} from '@material-ui/core';
import Album from '../models/Album';
import AlbumService from '../services/AlbumService';
import AlbumCard from '../components/AlbumCard';

const AlbumsPage = () => {

    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        AlbumService.findAll().then(res => {
            setAlbums(res.data);
        })
    }, []);

    return (
        <Container>
            <Grid container direction="row" spacing={2} justify="space-between">
                {albums.map(album => (
                    <Grid item key={album.id}>
                        <AlbumCard album={album} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default AlbumsPage
