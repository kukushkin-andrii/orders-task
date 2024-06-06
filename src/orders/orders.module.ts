import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { SumModule } from 'src/sum/sum.module';

@Module({
  imports: [SumModule],
  controllers: [OrdersController],
  providers: [OrdersService, NotificationsService],
})
export class AppModule {}
