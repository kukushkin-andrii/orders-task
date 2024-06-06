import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderType } from './types/order.type';
import { NotificationsService } from 'src/notifications/notifications.service';

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService, private readonly notificationsService: NotificationsService ) {}

  @Get()
  get(): string {
    return this.ordersService.getOrders();
  };

  @Post()
  create(@Body() order: OrderType): void{
    this.ordersService.saveOrder(order);
    this.notificationsService.send(`order processed: ${order.id}`);
  }
}
