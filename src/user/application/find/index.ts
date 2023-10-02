import FindUserCommandResponse from "./FindUserCommandResponse";
import User from "../../domain/entity/User";
import UserRepository from "../../infraestructure/persistence/UserRepository";

export default class FindUser {
    private _userRepository: UserRepository;
    constructor({userRepository}: any) {
        this._userRepository = userRepository;
    }
    async exec(): Promise<FindUserCommandResponse> {
        const userList: User[] = await this._userRepository.find();

        return new FindUserCommandResponse(userList.map(u => ({id: u.id, name: u.name, lastname: u.lastname}) ));
    }
}