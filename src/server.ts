import Fastify from "fastify"
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {swaggerOptions, swaggerUiOptions} from "./docs/swagger";
import {userRoutes} from "./api/routes/user.routes";

export const fastify = Fastify({
    logger: {level: "debug"}
})

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

fastify.register(userRoutes)

const startServer = async () => {
    try {
        await fastify.listen({port: 3000})
        // console.log(fastify.printRoutes())
    } catch (e) {
        fastify.log.error(e)
        process.exit(1)
    }
}

startServer()
