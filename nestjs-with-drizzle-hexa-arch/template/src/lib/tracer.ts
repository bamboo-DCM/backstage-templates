import { Logger } from '@nestjs/common';

import tracer from 'dd-trace';
import { env } from 'env';

const logger = new Logger('main');

tracer.init({
  env: env.DD_ENV,
  service: env.DD_SERVICE,
  logInjection: false,
  logger: {
    error: (err) => logger.error(err),
    warn: (message) => logger.warn(message),
    info: (message) => logger.log(message),
    debug: (message) => logger.debug(message),
  },
  runtimeMetrics: true,
  startupLogs: true,
});

export default tracer;
