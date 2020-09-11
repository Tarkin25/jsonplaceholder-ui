import Post from "../models/Post";
import { Service, ServiceImpl } from "./serviceGenerics";

interface PostService extends Service<Post> {

}

const postService: PostService = new ServiceImpl("/posts");

export default postService