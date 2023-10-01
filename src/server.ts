import 'dotenv/config';
import express, { Router, json } from 'express';
import BullBoard from 'bull-board';
import { UserController } from './users/infra/http';

import Queue from './users/infra/queue';

const app = express();
const routes = Router();
const userController = new UserController();

app.use(json());
app.use(routes);

app.post('/users', userController.handler);

//Queue.process();

app.listen(3000, () => console.log('Listening 3000'));
