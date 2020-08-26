export class GenericInMemoryDao {
    private static instance: GenericInMemoryDao;
    posts: any = [];
    constructor() {
        console.log('Created new instance of GenericInMemoryDao');
    }

    static getInstance(): GenericInMemoryDao {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }

    addPost(post: any) {
        return this.posts.push(post);
    }

    getPosts() {
        return this.posts;
    }

    getPostById(postId: string) {
        return this.posts.find((post: { id: string }) => post.id === postId);
    }

    putPostById(post: any) {
        const objIndex = this.posts.findIndex(
            (obj: { id: any }) => obj.id === post.id
        );
        const updatedPosts = [
            ...this.posts.slice(0, objIndex),
            post,
            ...this.posts.slice(objIndex + 1),
        ];
        this.posts = updatedPosts;
        return `${post.id} updated via put`;
    }

    patchPostById(post: any) {
        const objIndex = this.posts.findIndex(
            (obj: { id: any }) => obj.id === post.id
        );
        let currentPost = this.posts[objIndex];
        for (let i in post) {
            if (i !== 'id') {
                currentPost[i] = post[i];
            }
        }
        this.posts = [
            ...this.posts.slice(0, objIndex),
            currentPost,
            ...this.posts.slice(objIndex + 1),
        ];
        return `${post.id} patched`;
    }

    removePostById(postId: string) {
        const objIndex = this.posts.findIndex(
            (obj: { id: any }) => obj.id === postId
        );
        this.posts = this.posts.splice(objIndex, 1);
        return `${postId} removed`;
    }

    getByEmail(email: string) {
        return new Promise((resolve) => {
            const objIndex = this.posts.findIndex(
                (obj: { email: any }) => obj.email === email
            );
            let currentPost = this.posts[objIndex];
            if (currentPost) {
                resolve(currentPost);
            } else {
                resolve(null);
            }
        });
    }
}
