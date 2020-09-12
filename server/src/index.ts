import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import { CommonRoutesConfig } from './common/common.routes.config';
import { PostsRoutes } from './posts/posts.routes.config';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config';

const app: express.Application = express();
const port = process.env.PORT || 3010;
const server: http.Server = http.createServer(app);
const routes: any = [];
// app.use(bodyparser.json({limit: '5mb'}));

// set NODE_ENV=production
console.log('Application Name: ' + config.get('name'));
// console.log('Application pass: ' + config.get('password'));

app.use(helmet());
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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
