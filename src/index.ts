import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import AuthController from "./user/infraestructure/http/AuthController";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use('/user', AuthController);

app.get('/', (rq: Request, rs: Response) => {
    rs.send("");
});

app.listen(process.env.PORT, () => {});
