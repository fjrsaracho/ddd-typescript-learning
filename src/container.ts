import {createContainer, asClass, asValue, InjectionMode, asFunction} from "awilix";
import UserRepository from "./user/infraestructure/persistence/UserRepository";
import FindUser from "./user/application/find";
import DbHandler from "./user/infraestructure/persistence/DbHandler";
import UserDocumentParser from "./user/infraestructure/persistence/UserDocumentParser";
import CreateUser from "./user/application/create";

const container = createContainer({
    injectionMode: InjectionMode.PROXY
});

container.register({
    findUser: asClass(FindUser),
    createUser: asClass(CreateUser),
    userRepository: asClass(UserRepository),
    userDocumentParser: asClass(UserDocumentParser),
    db: asFunction(DbHandler)
});

export default container;