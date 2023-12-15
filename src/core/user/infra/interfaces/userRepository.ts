import {User} from "../../domain/user";

export interface UserRepository {
    getById(userId: string): Promise<User | null>
}
