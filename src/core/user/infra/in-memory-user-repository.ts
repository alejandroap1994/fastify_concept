import {User} from "../domain/user";
import {UserRepository} from "./interfaces/userRepository";

const users: User[] = [
    {
        id: "1",
        email: "alejo@bemobile.es"
    },
    {
        id: "2",
        email: "chuki@bemobile.es"
    }
]

export class InMemoryUserRepository implements UserRepository {
    async getById(userId: string): Promise<User | null> {
        const user = users.find((user) => user.id === userId)
        if (!user) {
            return null
        }

        return user
    }

    async addUser(email: string): Promise<User> {
        const latestId = parseInt(users[users.length - 1]["id"])
        const newUser = {
            id: (latestId + 1).toString(),
            email
        }
        users.push(newUser)
        return newUser
    }

    async getAll(): Promise<User[]> {
        return users
    }
}
