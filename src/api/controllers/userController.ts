import {AddUser} from "../../core/user/application/addUser";
import {InMemoryUserRepository} from "../../core/user/infra/in-memory-user-repository";
import {FastifyReply, FastifyRequest} from "fastify";
import {GetUsers} from "../../core/user/application/getUsers";
import {GetUser} from "../../core/user/application/getUser";

const inMemoryRepository = new InMemoryUserRepository()

const addUser = new AddUser(inMemoryRepository)
const getUsers = new GetUsers(inMemoryRepository)
const getUser = new GetUser(inMemoryRepository)

export class UserController {
    static async add(request: FastifyRequest, reply: FastifyReply) {
        const {email} = request.body as { email: string }

        const newUser = await addUser.add(email)

        reply.status(201).send(newUser)
    }

    static async getAll(_request: FastifyRequest, reply: FastifyReply) {
        const users = await getUsers.getAll()
        reply.status(200).send(users)
    }

    static async getById(request: FastifyRequest, reply: FastifyReply) {
        const {id} = request.params as { id: string }
        const user = await getUser.getById(id)
        console.log(user)
        reply.status(200).send(user)

    }

    static async sendError(request: FastifyRequest, reply: FastifyReply) {
        try {
            const {email} = request.body as { email: string }
            if (email === "error") {
                throw new Error("Error")
            }
            reply.status(200).send({email})
        } catch (e) {
            reply.status(400).send(e)
        }
    }
}
