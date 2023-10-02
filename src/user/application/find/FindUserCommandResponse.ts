import User from "../../domain/entity/User";

export default class FindUserCommandResponse {
    users: { name: string; id: string; lastname: string }[] | undefined;

    constructor(users?: { id: string; name: string; lastname: string }[]) {
        this.users = users;
    }
}