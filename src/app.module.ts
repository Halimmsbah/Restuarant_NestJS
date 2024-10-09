import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurentsModule } from './restaurents/restaurents.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesModule } from './images/images.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuthModule } from './auth/auth.module';
import { AuthModuleOptions } from '@nestjs/passport';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [
    MongooseModule.forRoot( "mongodb://127.0.0.1:27017/Restaurent"),RestaurentsModule, ImagesModule, CloudinaryModule, AuthModule, MealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
