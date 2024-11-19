/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class StipeService {
  private stripeClient: Stripe;

  public constructor(private prisma: PrismaService) {
    this.stripeClient = new Stripe(
      'your strip private key',
      { apiVersion: '2020-08-27' },
    );
  }

  async createCheckoutSession(body: any) {
    try {
      const saveTransection = {
        uuid: uuidv4(),
        name: body.name,
        price: +body.price,
        quantity: +body.quantity,
        status: 'pending',
        sessionId: '',
      };
      await this.prisma.transectionHistory.create({
        data: { ...saveTransection },
      });
      const session = await this.stripeClient.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: body.name,
              },
              unit_amount: +body.price * 100,
            },
            quantity: 1,
          },
        ],
        success_url: `http://localhost:4200/success?status=true&paymentId=${saveTransection.uuid}&type=stripe`,
        cancel_url:
          'http://localhost:4200/cancel?status=false&paymentId=&type=stripe',
      });
      await this.prisma.transectionHistory.update({
        data: { sessionId: session.id },
        where: { uuid: saveTransection.uuid },
      });
      return { id: session.id };
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async verifySession(sessionId: any) {
    const transection = await this.prisma.transectionHistory.findUnique({
      where: { uuid: sessionId, status: { not: 'complete' } },
    });

    if (transection) {
      const session = await this.stripeClient.checkout.sessions.retrieve(
        transection.sessionId,
      );
      if (session?.status == 'complete') {
        await this.prisma.transectionHistory.update({
          data: { status: 'complete' },
          where: { uuid: sessionId },
        });
        
        return {
          status: true,
          message: 'Payment Successfully.',
        };
      } else {
        throw new HttpException('Payment Failed!', HttpStatus.BAD_REQUEST);
      }
    } else {
      throw new HttpException('Transection Not Found!', HttpStatus.BAD_REQUEST);
    }
  }
  // findAll() {
  //   return `This action returns all stipe`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} stipe`;
  // }

  // update(id: number, updateStipeDto: UpdateStipeDto) {
  //   return `This action updates a #${id} stipe`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} stipe`;
  // }
}
