import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { CurrentUser } from 'src/auth/decorators/current_user.decorators';
import { User } from 'src/auth/schemas/user.schema';
import { Meal } from './schemas/meal.schema';
import { AuthGuard } from '@nestjs/passport';
import { promises } from 'dns';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('meal')
export class MealController {

    constructor( private readonly mealService: MealService ) {}

    @Post()
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    async createMeal(
        @Body() CreateMealDto: CreateMealDto ,
        @CurrentUser() user: User
    ): Promise<Meal> {
        return await this.mealService.createMeal(CreateMealDto, user);
    }


    @Get()
    async getAllMeals(): Promise<Meal[]> {
        return await this.mealService.getAllMeals();
    }


    @Get(':id')
    async getMealById(@CurrentUser() user: User, @Body() id: string): Promise<Meal> {
        return await this.mealService.getMealById(id);
    }


    @Get('restaurent/:id')
    async getMealsByRestaurentId(@CurrentUser() user: User, @Body() id: string): Promise<Meal[]> {
        return await this.mealService.getMealsByRestaurentId(id);
    }


    @Put(':id')
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    async updateMeal(
        @CurrentUser() user: User,
        @Body() updateMealDto: CreateMealDto,
        @Body() id: string
    ): Promise<Meal> {
        return await this.mealService.updateMeal(id, updateMealDto);
    }


    @Delete(':id')
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    async deleteMeal(@CurrentUser() user: User, @Body() id: string): Promise<Meal> {
        return await this.mealService.deleteMeal(id);
    }
}
