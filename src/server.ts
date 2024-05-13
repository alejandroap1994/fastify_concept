import Fastify from "fastify"
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {swaggerOptions, swaggerUiOptions} from "./docs/swagger";
import fastifyHelmet from "@fastify/helmet";
import {routes} from "./api/routes/user.routes";
import ApiLogs from "./plugins/ApiLogs";

export const fastify = Fastify()
fastify.register(fastifyHelmet, {global: true})
fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);

fastify.register(routes, {prefix: "/"})

const startServer = async () => {
    try {
        await Promise.all([
            fastify.register(ApiLogs),
        ])
        await fastify.listen({port: 3000})
        console.log(`Service running on ${"0.0.0.0"}:${"3000"} `)
        // console.log(fastify.printRoutes())
    } catch (e) {
        fastify.log.error(e)
        process.exit(1)
    }
}

startServer()
