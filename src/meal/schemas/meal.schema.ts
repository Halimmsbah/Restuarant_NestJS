import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";
import { Restaurent } from "src/restaurents/schemas/restaurent.schema";


export enum Category {
    SOUP = 'Soup',
    SALADS = 'Salads',
    SANDWICHES = 'Sandwiches',
    PIZZAS = 'Pizzas',
    PASTA = 'Pasta',
}

@Schema({ timestamps: true })
export class Meal {
    @Prop()
    name: string;

    @Prop()
    description: string;    

    @Prop()
    price: number;

    @Prop()
    Category: Category

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurent' })
    restaurent: Restaurent

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
    user: User
}

export const MealSchema = SchemaFactory.createForClass(Meal)