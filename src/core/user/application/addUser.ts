import {User} from "../domain/user";
import {IUserRepository} from "../infra/interfaces/userRepository";

export class AddUser {
    constructor(private readonly userRepository: IUserRepository) {
    }

    async add(email: string): Promise<User> {
        return this.userRepository.addUser(email)
    }
}
