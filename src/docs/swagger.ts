export const swaggerOptions = {
    swagger: {
        info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },

        tags: [
            {name: 'User', description: 'User related end-points'}
        ],
        definitions: {
            User: {
                type: 'object',
                required: ['id', 'email'],
                properties: {
                    id: {type: 'string', format: 'uuid'},
                    email: {type: 'string', format: 'email'}
                }
            }
        },

    }
};

export const swaggerUiOptions = {
    routePrefix: "/docs",
    exposeRoute: true,
    securityDefinitions: {
        apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
        }
    }
};

export const swaggerSquema = {
    schema: {
        description: 'post some data',
        tags: ['user', 'code'],
        summary: 'qwerty',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    description: 'user id'
                }
            }
        },
        body: {
            type: 'object',
            properties: {
                hello: {type: 'string'},
                obj: {
                    type: 'object',
                    properties: {
                        some: {type: 'string'}
                    }
                }
            }
        },
        response: {
            201: {
                description: 'Successful response',
                type: 'object',
                properties: {
                    hello: {type: 'string'}
                }
            },
            default: {
                description: 'Default response',
                type: 'object',
                properties: {
                    foo: {type: 'string'}
                }
            }
        }
    }
}
