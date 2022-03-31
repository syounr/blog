import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Get()
  async sendTestEmail() {
    return await this.mailService.sendLogMessage('gbtestar@mail.ru');
  }
}
