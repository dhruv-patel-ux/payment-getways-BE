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
        'sk_test_51PIpLLSHukomVMbJaj8P3PUq8XHuuLOkSjn7WzcaWf7M5VvHxPs2gkAtZvva6lRkyc87rCRZAnvTXtFZqG5dfoOn00KKc43sj3',
      apiVersion: '2020-08-27',
    }),
    // NestjsPaypalPayoutsModule.register({
    //   environment: 'sandbox',
    //   clientId: 'AbCiNdx9PNFxKkbugyEAGALlZthXJ4zJop0Z36faLvhQ1GShL9...',
    //   clientSecret: 'ELHf5RTxtwok5Ay29AjMMZjJrvsvZjdBXL5V_DBhw3jUgOtIE0...',
    // }),
    PaypalModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
