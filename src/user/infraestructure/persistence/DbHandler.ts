import User from "../../domain/entity/User";
import * as mongoDB from "mongodb"
import {Collection, Db, Document, MongoClient} from "mongodb"
import EnvParameterException from "../../domain/exception/EnvParameterException";
import UnableToConnectDatabaseException from "../../domain/exception/UnableToConnectDatabaseException";

type Data = {
    users: User[]
}

let _db: mongoDB.MongoClient;
let _client: mongoDB.MongoClient | undefined;
let _instance: Db | undefined;

const _connect = async (): Promise<MongoClient> => {
    if (!process.env.DB_CONN_STRING) {
        throw new EnvParameterException();
    }

    _client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    _db = await _client.connect();

    return _db;
}

export default function DbHandler(): {
    getCollection<T extends Document = Document>(USER_COLLECTION_NAME: string): Promise<Collection<T>>;
    disconnect(): void;
    } {
    const createDb = async (): Promise<Db> => {
        const db: mongoDB.MongoClient = await _connect();

        if (!process.env.DB_NAME) {
            throw new EnvParameterException();
        }

        if (db === undefined) {
            throw new UnableToConnectDatabaseException();
        }

        _instance = _db?.db(process.env.DB_NAME);
        return _instance;
    };

    return {
         disconnect() {
            if (_client) {
                _client.close();
            }

            _client = undefined;
        },
        async getCollection(collectionName: string)  {
            if (!_instance) {
                _instance = await createDb();
            }

            return _instance.collection(collectionName);
        }
    }
}