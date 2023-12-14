import {fastify} from "../server";
import {userController} from "../infra/dependencies";

const optionsUser = {
    schema: {
        description: 'Send email to user',
        tags:['User'],
        summary: 'This send a email to selected user',
        params:{
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'user id'
                }
            }
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    ok: { type: 'boolean' }
                }
            },
            500: {
                description: 'Internal Server Error',
                type: 'object',
                properties: {
                    statusCode: { value: 500 },
                    error: {type: "string"},
                    message: {type: "string"}
                }
            }
        }
    }
}

export async function userRoutes () {
    fastify.post("/user/:id", optionsUser, userController.run.bind(userController))
}
