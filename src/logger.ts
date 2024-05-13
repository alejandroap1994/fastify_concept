import winston from 'winston'

const {combine, timestamp, json, errors, colorize, prettyPrint} =
    winston.format

const logger = winston.createLogger({
    level: 'debug',
    format: combine(errors({stack: true}), prettyPrint(), timestamp(), json()),
    transports: [new winston.transports.Console()],
})

export default logger
