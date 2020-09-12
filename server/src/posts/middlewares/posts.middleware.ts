import express from 'express';
import { PostsService } from '../services/post.service';

export class PostsMiddleware {
    private static instance: PostsMiddleware;
    static getInstance() {
        if (!PostsMiddleware.instance) {
            PostsMiddleware.instance = new PostsMiddleware();
        }
        return PostsMiddleware.instance;
    }

    validateRequiredCreatePostBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(req.body);

        if (req.body && req.body.email && req.body.password) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields email and password`,
            });
        }
    }

    async validatePostExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const postService = PostsService.getInstance();
        const post = await postService.readById(req.params.postId);
        if (post) {
            next();
        } else {
            res.status(404).send({
                error: `Post ${req.params.postId} not found`,
            });
        }
    }

    async extractPostId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.postId;
        next();
    }
}
