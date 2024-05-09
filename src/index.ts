import express, { Express } from 'express';
import bodyparser from 'body-parser';
import dotenv from "dotenv";
import './models/db.js';
import userRouter from './routes/userRouter.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
