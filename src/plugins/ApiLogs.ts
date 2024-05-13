import fp from 'fastify-plugin'
import type {FastifyPluginCallback} from 'fastify'
import logger from "../logger"

const ApiLogs: FastifyPluginCallback = (fastify, _, done) => {
    fastify.addHook('onSend', (req, res, payload, done) => {
        const {method, url, body: rawBody} = req
        const body: any = rawBody
        const status = res.statusCode

        if (body && Object.keys(body).length > 0) {
            if (body?.password?.length >= 1) {
                body.password = '********'
            }

            logger.debug({method, url, body, status})
        } else {
            logger.debug({method, url, status})
        }

        done(null, payload)
    })

    done()
}

export default fp(ApiLogs, {
    fastify: '4.x',
    name: 'api-logs',
})
