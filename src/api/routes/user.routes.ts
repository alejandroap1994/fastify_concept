import {fastify} from "../../server";
import {UserController} from "../controllers/userController";

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
    }
}

const optionsGetAllUser = {
    schema: {
        description: 'Get All Users',
        tags: ['User'],
        summary: 'Get All Users',
        response: {
            200: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    id: {type: 'string'},
                    email: {type: "string"}
                }
            },

        }
    }
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
    }
}

export async function userRoutes() {
    fastify.post("/", optionsAddUser, UserController.add)
    fastify.get("/", optionsGetAllUser, UserController.getAll)
    fastify.get("/:id", optionsGetByIdUser, UserController.getById)

}
