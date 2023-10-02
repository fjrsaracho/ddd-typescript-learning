import express, {Request, Response} from 'express';
import container from "../../../container";
import CreateUserCommand from "../../application/create/CreateUserCommand";

const AuthController = express.Router();

AuthController.post('/find', async (req: Request, res: Response): Promise<void> => {
        const findUser = container.resolve('findUser');

        res.status(200).json(await findUser.exec());
});

AuthController.post('/create/:id', async (req: Request, res: Response): Promise<void> => {
        const command: CreateUserCommand = new CreateUserCommand(req.params.id, req.body?.name, req.body?.lastname);
        const createUser = container.resolve('createUser');

        try {
                await createUser.exec(command);
                res.status(201).send();
        } catch (e) {
                res.status(400).send();
        }

});

export default AuthController;