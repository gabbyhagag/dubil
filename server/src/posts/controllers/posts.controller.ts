import express from 'express';
import { PostsService } from '../services/post.service';

export class PostsController {
    constructor() {}

    listPosts(req: express.Request, res: express.Response) {
        const postsService = PostsService.getInstance();
        const posts = postsService.list(100, 0);
        res.status(200).send(posts);
    }

    getPostById(req: express.Request, res: express.Response) {
        const postsService = PostsService.getInstance();
        const post = postsService.readById(req.params.postId);
        res.status(200).send(post);
    }

    createPost(req: express.Request, res: express.Response) {
        const postsService = PostsService.getInstance();
        const postId = postsService.create(req.body);
        res.status(201).send({ id: postId });
    }

    patch(req: express.Request, res: express.Response) {
        const postsService = PostsService.getInstance();
        postsService.patchById(req.body);
        res.status(204).send(``);
    }

    put(req: express.Request, res: express.Response) {
        const postsService = PostsService.getInstance();
        postsService.updateById(req.body);
        res.status(204).send(``);
    }

    removePost(req: express.Request, res: express.Response) {
        const postsService = PostsService.getInstance();
        postsService.deleteById(req.params.postId);
        res.status(204).send(``);
    }
}
