import Fastify from "fastify"
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {routes} from "./routes/request.routes";
import {swaggerOptions, swaggerUiOptions} from "./docs/swagger";
import {userRoutes} from "./routes/user-routes";

export const fastify = Fastify({
    logger: true
})

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);
fastify.register(routes)
fastify.register(userRoutes)
fastify.get("/hello", (request, reply)=>{
    reply.send({message:"hello"})
})




const startServer = async () => {
    try{
        await fastify.listen({ port: 3000 })

    }catch (e) {
        fastify.log.error(e)
        process.exit(1)
    }
}

startServer()
