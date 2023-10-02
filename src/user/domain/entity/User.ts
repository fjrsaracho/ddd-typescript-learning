export default class User {
    private _id: string;
    private _name: string;
    private _lastname: string;
    private _password: string;

    constructor(id: string, name: string, lastname: string, password: string) {
        this._id = id;
        this._name = name;
        this._lastname = lastname;
        this._password = password;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get password(): string {
        return this._password;
    }
}