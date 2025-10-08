import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER, WinstonModule } from 'nest-winston';
import { DatadogTraceModule } from 'nestjs-ddtrace';
import { Logger } from 'winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { loggerOptions } from './lib/logger';

@Module({
  imports: [
    DatadogTraceModule.forRoot(),
    WinstonModule.forRoot(loggerOptions),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useFactory: (logger: Logger) => {
        return new AppService(logger);
      },
      inject: [WINSTON_MODULE_PROVIDER],
    },
  ],
})
export class AppModule {}
