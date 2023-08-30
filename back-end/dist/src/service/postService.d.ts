import { Posts } from "../entity/Posts";
declare class PostService {
    private repository;
    getPost: () => Promise<Posts[]>;
    postAdd: (posts: any) => Promise<any>;
    postUpdate: (postId: any, newPost: any) => Promise<import("typeorm").UpdateResult>;
    postDelete: (postId: any) => Promise<import("typeorm").DeleteResult>;
}
declare const _default: PostService;
export default _default;
