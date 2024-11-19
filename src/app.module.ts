/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StipeModule } from './stipe/stipe.module';
import { StripeModule } from 'nestjs-stripe';
import { PaypalModule } from './paypal/paypal.module';
// import { NestjsPaypalPayoutsModule } from 'nestjs-paypal-payouts';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [
    StipeModule,
    StripeModule.forRoot({
      apiKey:
        'your strip private key',
      apiVersion: '2020-08-27',
    }),
    PaypalModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
