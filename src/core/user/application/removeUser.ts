import {User} from "../domain/user";
import {IUserRepository} from "../infra/interfaces/userRepository";

export class RemoveUser {
    constructor(private readonly inMemoryRepository: IUserRepository) {
    }

    async getAll(): Promise<User[]> {
        return this.inMemoryRepository.getAll()
    }
}
