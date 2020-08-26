import { CRUD } from '../../common/interfaces/crud.interface';
import { GenericInMemoryDao } from '../daos/in.memory.dao';

export class PostsService implements CRUD {
    private static instance: PostsService;
    dao: GenericInMemoryDao;

    constructor() {
        this.dao = GenericInMemoryDao.getInstance();
    }

    static getInstance(): PostsService {
        if (!PostsService.instance) {
            PostsService.instance = new PostsService();
        }
        return PostsService.instance;
    }

    create(resource: any) {
        return this.dao.addPost(resource);
    }

    deleteById(resourceId: any) {
        return this.dao.removePostById(resourceId);
    }

    list(limit: number, page: number) {
        return this.dao.getPosts();
    }

    patchById(resource: any) {
        return this.dao.patchPostById(resource);
    }

    readById(resourceId: any) {
        return this.dao.getPostById(resourceId);
    }

    updateById(resource: any) {
        return this.dao.putPostById(resource);
    }
}
