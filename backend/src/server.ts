import express from 'express';
import './database/connection';
import routes from './routes';

import cors from 'cors';
import { join } from 'path';
import 'express-async-errors';
import './database/connection';

import errorHandler from './errors/handler';

 const app = express();

 app.use(express.json());

 
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
app.use(errorHandler);


app.listen(3333);