import {UserController} from "../controllers/userController";
import {FastifyInstance} from "fastify";

const optionsAddUser = {
    schema: {
        description: 'Add new user with provided email',
        tags: ['User'],
        summary: 'Add new user with provided email',
        body: {
            type: "object",
            properties: {
                email: {
                    type: "string",
                    description: "email of new user"
                }
            }
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: {type: 'string'},
                    email: {type: "string"}
                }
            },
            500: {
                description: 'Internal Server Error',
                type: 'object',
                properties: {
                    statusCode: {value: "string"},
                    error: {type: "string"},
                    message: {type: "string"}
                }
            }
        }
    },
    handler: UserController.add
}

const optionsGetAllUser = {
    schema: {
        description: 'Get All Users',
        tags: ['User'],
        summary: 'Get All Users',
        response: {
            200: {
                description: 'Successful response',
                type: 'array',
                items: {
                    properties: {
                        id: {type: 'string'},
                        email: {type: "string"}
                    }
                }
            },

        }
    },
    handler: UserController.getAll
}

const optionsGetByIdUser = {
    schema: {
        description: 'Get user info with provided id',
        tags: ['User'],
        summary: 'Get user info with provided id',
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "id of requerid user"
                }
            }
        },
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: {type: 'string'},
                    email: {type: "string"}
                }
            },
            500: {
                description: 'Internal Server Error',
                type: 'object',
                properties: {
                    statusCode: {value: "string"},
                    error: {type: "string"},
                    message: {type: "string"}
                }
            }
        }
    },
    handler: UserController.getById
}

export async function routes(fastify: FastifyInstance) {
    fastify.post("/", optionsAddUser)
    fastify.get("/", optionsGetAllUser)
    fastify.get("/:id", optionsGetByIdUser)

}
