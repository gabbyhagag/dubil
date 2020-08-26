import {
    CommonRoutesConfig,
    configureRoutes,
} from '../common/common.routes.config';
import { PostsController } from './controllers/posts.controller';
import { PostsMiddleware } from './middlewares/posts.middleware';
import express from 'express';
export class PostsRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'PostsRoute');
        this.configureRoutes();
    }
    configureRoutes() {
        const postsController = new PostsController();
        const postsMiddleware = PostsMiddleware.getInstance();
        this.app.get(`/posts`, [postsController.listPosts]);
        this.app.post(`/posts`, [
            // postsMiddleware.validateRequiredCreatePostBodyFields,
            postsController.createPost,
        ]);
        this.app.put(`/posts/:postId`, [
            postsMiddleware.validatePostExists,
            postsMiddleware.extractPostId,
            postsController.put,
        ]);
        this.app.patch(`/posts/:postId`, [
            postsMiddleware.validatePostExists,
            postsMiddleware.extractPostId,
            postsController.patch,
        ]);
        this.app.delete(`/posts/:postId`, [
            postsMiddleware.validatePostExists,
            postsMiddleware.extractPostId,
            postsController.removePost,
        ]);
        this.app.get(`/posts/:postId`, [
            postsMiddleware.validatePostExists,
            postsMiddleware.extractPostId,
            postsController.getPostById,
        ]);
    }
}
