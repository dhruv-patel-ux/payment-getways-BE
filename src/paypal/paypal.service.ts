/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import { InjectPaypal, InjectPaypalClient } from 'nestjs-paypal-payouts';

@Injectable()
export class PaypalService {
  constructor(
    // @InjectPaypalClient()
    // private readonly paypalClient,
    // @InjectPaypal()
    // private readonly paypal,
  ) {}

  async create() {
    // const request = this.paypal.payouts.PayoutsPostRequest();

    // request.requestBody({
    //   sender_batch_header: {
    //     recipient_type: 'EMAIL',
    //     email_message: 'SDK payouts test txn',
    //     note: 'Enjoy your Payout!!',
    //     sender_batch_id: 'Test_sdk_1',
    //     email_subject: 'This is a test transaction from SDK',
    //   },
    //   items: [
    //     {
    //       note: 'Your 5$ Payout!',
    //       amount: {
    //         currency: 'USD',
    //         value: '1.00',
    //       },
    //       receiver: 'payout-sdk-1@paypal.com',
    //       sender_item_id: 'Test_txn_1',
    //     },
    //   ],
    // });

    // const response = await this.paypalClient.execute(request);
    // console.log(`Response: ${JSON.stringify(response)}`);
    // // If call returns body in response, you can get the deserialized version from the result attribute of the response.
    // console.log(`Payouts Create Response: ${JSON.stringify(response.result)}`);
  }

  // findAll() {
  //   return `This action returns all paypal`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} paypal`;
  // }

  // update(id: number, updatePaypalDto: UpdatePaypalDto) {
  //   return `This action updates a #${id} paypal`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} paypal`;
  // }
}
