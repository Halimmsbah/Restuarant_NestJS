import { Module } from '@nestjs/common';
import { RestaurentsController } from './restaurents.controller';
import { RestaurentsService } from './restaurents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurentSchema } from './schemas/restaurent.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Restaurent', schema: RestaurentSchema }])],
  controllers: [RestaurentsController],
  providers: [RestaurentsService],
  exports: [MongooseModule],
})
export class RestaurentsModule {}
