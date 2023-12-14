import {FastifyReply, FastifyRequest} from "fastify";
import {WelcomeEmailSender} from "../application/welcome-email-sender";

export class UserController {
    constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {}

    async run (request:FastifyRequest,reply:FastifyReply) {
        const {id} = request.params as {id:string}
        await this.welcomeEmailSender.run(id)
        reply.status(200).send()
    }
}
