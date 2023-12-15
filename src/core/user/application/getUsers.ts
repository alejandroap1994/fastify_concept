import {InMemoryUserRepository} from "../infra/in-memory-user-repository";
import {User} from "../domain/user";

export class GetUsers {
    constructor(private readonly inMemoryRepository: InMemoryUserRepository) {
    }

    async getAll(): Promise<User[]> {
        return this.inMemoryRepository.getAll()
    }

    async getById(userId: string): Promise<User | null> {
        const user = this.inMemoryRepository.getById(userId)

        if (!user) return null

        return user
    }
}
