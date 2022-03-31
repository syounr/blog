import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendLogMessage(addressTo: string) {
    return this.mailerService
      .sendMail({
        to: addressTo,
        subject: 'Создание нового комментария!',
        template: 'test',
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
