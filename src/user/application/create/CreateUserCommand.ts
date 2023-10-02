export default class CreateUserCommand {
    id: string;
    name: string;
    lastname: string;

    constructor(id: string, name: string, lastname: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
    }
}