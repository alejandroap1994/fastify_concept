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

