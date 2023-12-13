import {FastifyReply, FastifyRequest} from "fastify";

export const requestIndex = async (request:FastifyRequest,reply:FastifyReply) => {
    reply.send({message:"index"})
}


export const requestRequest = async (request:FastifyRequest,reply:FastifyReply) => {
    reply.send({message:"request"})
}

export const requestUser = async (request:FastifyRequest,reply:FastifyReply) => {
    console.log(request.body)
    reply.send({ok:true})
}
