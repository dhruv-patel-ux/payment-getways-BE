/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  @Post()
  create() {
    return this.paypalService.create();
  }

  // @Get()
  // findAll() {
  //   return this.paypalService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.paypalService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePaypalDto: UpdatePaypalDto) {
  //   return this.paypalService.update(+id, updatePaypalDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.paypalService.remove(+id);
  // }
}
