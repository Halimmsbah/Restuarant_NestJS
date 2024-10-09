import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { MealSchema } from './schemas/meal.schema';
import { AuthModule } from 'src/auth/auth.module';
import { RestaurentsModule } from 'src/restaurents/restaurents.module';

@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: 'Meal', schema: MealSchema }]),
    RestaurentsModule
  ],
  controllers: [MealController],
  providers: [MealService]
})
export class MealModule {}
