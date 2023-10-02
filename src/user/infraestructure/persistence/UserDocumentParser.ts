import User from "../../domain/entity/User";

export default class UserDocumentParser {
    listToDomain(userDocumentList: any[]): User[] {
        return userDocumentList.map(ud => {
            return new User(ud._id, ud.name, ud.lastname, ud.password);
        });
    }
    toDomain(userDocument: {
        _id: string;
        name: string;
        lastname: string;
        password: string;
    }): User {
        return new User(userDocument?._id,
            userDocument?.name,
            userDocument?.lastname,
            userDocument?.password
            );
    }

    toDocument(user: User): {} {
        return {
            _id: user.id,
            name: user.name,
            lastname: user.lastname,
            password: user.password
        }
    }
}