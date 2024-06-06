import { Body, Controller, Post } from '@nestjs/common';
import { SumService } from './sum.service';

type SumBody = {
  number1: Number,
  number2: Number,
};

@Controller('sum')
export class SumController {
  constructor(private sumService: SumService) {}

  @Post('/')
  sum(@Body() payload: SumBody) {
    return this.sumService.count(payload.number1, payload.number2)
  }
}
