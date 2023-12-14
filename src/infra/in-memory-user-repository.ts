import {User} from "../domain/user";
import {UserRepository} from "../domain/user-repository";

const users: User[] = [
    {
        id:"1",
        email:"alejo@bemobile.es"
    },
    {
        id:"2",
        email:"chuki@bemobile.es"
    }
]

export class InMemoryUserRepository implements UserRepository{
    async getById(userId:string): Promise<User | null> {
        const user = users.find((user)=>user.id === userId)
        if(!user){
            return null
        }

        return user
    }
}
