import {User} from "../../domain/user";

export interface IUserRepository {
    getById(userId: string): Promise<User | null>

    getAll(): Promise<User[]>

    addUser(email: string): Promise<User>
}
