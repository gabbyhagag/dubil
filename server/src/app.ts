import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import { CommonRoutesConfig } from './common/common.routes.config';
import { PostsRoutes } from './posts/posts.routes.config';

const app: express.Application = express();
const port = 3010;
const server: http.Server = http.createServer(app);
const routes: any = [];
// app.use(bodyparser.json({limit: '5mb'}));
app.use(express.json());

routes.push(new PostsRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at port ${port}`);
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
});
export default app;
