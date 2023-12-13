import {fastify} from "../server";
import {requestIndex, requestRequest, requestUser} from "../controllers/request.controllers";

const IResponse = {
    type: 'object',
    properties: {
        message: { type: 'string' }
    }
}

const optionsIndex = {
    schema: {
        description: 'get some data',
        tags:['Index'],
        summary: 'This get a index message',

        response: {
            200: IResponse
        }
    }
}
const optionsRequest = {
    schema: {
        description: 'get some data',
        tags:['Request'],
        summary: 'This get a request message',
        response: {
            200: IResponse
        }
    }
}
const optionsUser = {
    schema: {
        description: 'create user with data',
        tags:['User'],
        summary: 'This get a request message',
        params:{
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'user id'
                }
            }
        },
        body:{
            type:"object",
            properties:{
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: {type: 'string', format: 'email' }
            }
        },
        response: {
            201: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    ok: { type: 'boolean' }
                }
            }
        }
    }
}

export async  function routes () {
    fastify.get("/", optionsIndex, requestIndex)
    fastify.get("/reques", optionsRequest, requestRequest)
    fastify.put("/user/:id", optionsUser, requestUser)
}
