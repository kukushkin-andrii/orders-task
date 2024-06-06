import { Injectable } from '@nestjs/common';
import { OrderType } from './types/order.type';

@Injectable()
export class OrdersService {
  getOrders(): string {
    return 'Hello World!';
  }

  saveOrder(order: OrderType): void {
    console.log('Received new order:', order);
  }
}
