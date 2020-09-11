import Comment from "../models/Comment";
import { Service, ServiceImpl } from "./serviceGenerics";

interface CommentService extends Service<Comment> {

}

const commentService: CommentService = new ServiceImpl("/comments")

export default commentService