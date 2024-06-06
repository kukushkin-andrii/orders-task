import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
  count(...numbers: Number[]) {
    const sum = numbers.reduce((result: Number, number: Number) => {
      result = +result + +number;

      return result;
    }, 0);

    return sum;
  }
}
