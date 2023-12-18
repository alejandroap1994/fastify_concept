import {IUserRepository} from "../infra/interfaces/userRepository";
import {User} from "../domain/user";

export class GetUser {
    constructor(private readonly inMemoryRepository: IUserRepository) {
    }

    async getById(userId: string): Promise<User | null> {
        return this.inMemoryRepository.getById(userId)
    }
}
