import User from "../../domain/entity/User";
import UserDocumentParser from "./UserDocumentParser";
import {InsertOneResult, WithId} from "mongodb";
import DbHandler from "./DbHandler";

const USER_COLLECTION_NAME: string = 'users';
export default class UserRepository {

    private _dbHandler: ReturnType<typeof DbHandler>;
    private _userDocumentParser: UserDocumentParser;
    constructor({db, userDocumentParser}: any) {
        this._dbHandler = db;
        this._userDocumentParser = userDocumentParser;
    }

    async find(): Promise<User[]> {
        const userDocument: WithId<any>[] = await (await this._dbHandler.getCollection(USER_COLLECTION_NAME)).find({}).toArray();

        return this._userDocumentParser.listToDomain(userDocument);
    }

    async save(user: User): Promise<void> {
        try {
            const result: InsertOneResult = await (await this._dbHandler.getCollection(USER_COLLECTION_NAME)).insertOne(this._userDocumentParser.toDocument(user));

            if (result?.acknowledged) {
                return Promise.resolve();
            }
        } catch (e) {
            return Promise.reject(e);
        }

        Promise.reject();
    }
}