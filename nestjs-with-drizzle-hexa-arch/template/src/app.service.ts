import { Injectable } from '@nestjs/common';
import { Logger } from 'winston';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}

  getHello(): string {
    this.logger.info('Hello World!');
    return 'Hello World!';
  }
}
