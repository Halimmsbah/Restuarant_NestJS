import { Injectable } from '@nestjs/common';
import * as  Mongoose  from 'mongoose';
import { Meal } from './schemas/meal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurent } from '../restaurents/schemas/restaurent.schema';
import { User } from 'src/auth/schemas/user.schema';
@Injectable()
export class MealService {

    constructor(
        @InjectModel(Meal.name) private  mealModel: Mongoose.Model<Meal>,
        @InjectModel(Restaurent.name) private  restaurentModel: Mongoose.Model<Restaurent>,
    ) {}

    async getAllMeals(): Promise<Meal[]> {
        return await this.mealModel.find();
    }

    async getMealById(id: string): Promise<Meal> {
        return await this.mealModel.findById(id);
    }

    async getMealsByRestaurentId(id: string): Promise<Meal[]> {
        return await this.mealModel.find({restaurentId: id});
    }

    async createMeal(meal: Meal, user: User): Promise<Meal> {   
        const data = Object.assign(meal,{user : user._id});
        const newMeal = await this.mealModel.create(data);
        const Restaurent= await this.restaurentModel.findById(meal.restaurent);
        if(!Restaurent) throw new Error('Restaurent not found');
        Restaurent.menu.push(newMeal.id);
        await Restaurent.save();
        return newMeal
    }

    async updateMeal(id: string, meal: Meal): Promise<Meal> {
        return await this.mealModel.findByIdAndUpdate(id, meal, {new: true});
    }

    async deleteMeal(id: string): Promise<Meal> {
        return await this.mealModel.findByIdAndDelete(id);
    }
}
