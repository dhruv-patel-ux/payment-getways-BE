/* eslint-disable prettier/prettier */

import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Get,
  Query,
} from '@nestjs/common';
import { StipeService } from './stipe.service';

@Controller('stipe')
export class StipeController {
  constructor(private readonly stipeService: StipeService) {}

  @Post('create-checkout-session')
  create(@Body() body: any) {
    if (!body.price || body.price <= 0) {
      throw new HttpException('Invalid price', HttpStatus.NOT_ACCEPTABLE);
    }
    if (!body.quantity || body.quantity <= 0) {
      throw new HttpException('Invalid Quantity', HttpStatus.NOT_ACCEPTABLE);
    }
    return this.stipeService.createCheckoutSession(body);
  }
  @Get('verify-checkout-session')
  verify(@Query('paymentId') paymentId: any) {
    return this.stipeService.verifySession(paymentId);
  }
  // @Get()
  // findAll() {
  //   return this.stipeService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.stipeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStipeDto: UpdateStipeDto) {
  //   return this.stipeService.update(+id, updateStipeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.stipeService.remove(+id);
  // }
}
