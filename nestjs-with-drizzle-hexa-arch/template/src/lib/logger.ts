import { ConfigModule } from '@nestjs/config';
import { env } from '../../env';
import { format, transports, type LoggerOptions } from 'winston';

ConfigModule.forRoot();

const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: `/api/v2/logs?dd-api-key=${env.DD_API_KEY}&ddsource=nodejs&service=${env.DD_SERVICE}&ddtags=env:${env.DD_ENV}`,
  ssl: true,
};

const transportHttp = env.DD_LOGS_ENABLED
  ? new transports.Http(httpTransportOptions)
  : new transports.Http();

export const loggerOptions: LoggerOptions = {
  exitOnError: false,
  format: format.json(),
  transports: [
    transportHttp,
    new transports.Console({
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.colorize(),
        format.printf(({ timestamp, level, message, context }: any) => {
          return `[${timestamp}] [${level}]${context ? ' [' + context + ']' : ''}: ${message}`;
        }),
      ),
    }),
  ],
};
