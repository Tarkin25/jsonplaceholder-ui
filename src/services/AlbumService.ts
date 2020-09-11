import Album from "../models/Album";
import { Service, ServiceImpl } from "./serviceGenerics";

interface AlbumService extends Service<Album> {
    
}

const albumService: AlbumService = new ServiceImpl("/albums")

export default albumService