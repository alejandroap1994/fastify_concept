import Fastify from "fastify"
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {routes} from "./routes/request.routes";
import {swaggerOptions, swaggerSquema, swaggerUiOptions} from "./docs/swagger";

export const fastify = Fastify({
    logger: true
})

fastify.register(fastifySwagger, swaggerOptions);
fastify.register(fastifySwaggerUi, swaggerUiOptions);
fastify.register(routes)
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
