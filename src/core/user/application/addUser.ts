import {InMemoryUserRepository} from "../infra/in-memory-user-repository";

export class AddUser {
    constructor(private readonly userRepository: InMemoryUserRepository) {
    }

    async add(email: string) {
        return this.userRepository.addUser(email)
    }
}
