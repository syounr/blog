import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Posts } from './dto/post.dto';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [Array,AppService],
})
export class AppModule {}
