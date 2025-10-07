import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatadogTraceModule } from 'nestjs-ddtrace';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatadogTraceModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
