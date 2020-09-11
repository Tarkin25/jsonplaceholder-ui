import Photo from "../models/Photo";
import { Service, ServiceImpl } from "./serviceGenerics";

interface PhotoService extends Service<Photo> {
    
}

const photoService: PhotoService = new ServiceImpl("/photos")

export default photoService