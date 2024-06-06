import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  // constructor(notificationProvider) {

  // }

  send(notification: string) {
    throw new Error('test error');
    console.log('sending notification', notification);
  }
}