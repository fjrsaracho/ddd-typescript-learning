import CreateUserCommand from "./CreateUserCommand";
import UserRepository from "../../infraestructure/persistence/UserRepository";
import User from "../../domain/entity/User";

export default class CreateUser {
    private _userRepository: UserRepository;
    constructor({userRepository}: any) {
        this._userRepository = userRepository;
    }
    exec(command: CreateUserCommand): void {
        this._userRepository.save(new User(command.id, command.name, command.lastname));
    }
}