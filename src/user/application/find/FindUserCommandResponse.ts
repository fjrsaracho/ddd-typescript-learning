export default class FindUserCommandResponse {
    users: { name: string; id: string; lastname: string }[];

    constructor(users: { id: string; name: string; lastname: string }[]) {
        this.users = users;
    }
}