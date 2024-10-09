import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";
import { Meal } from "src/meal/schemas/meal.schema";


export class location {

    @Prop({type: String,enum: ['Point']})
    type: string;

    @Prop({index: "2dsphere"})
    coordinates: number[]
    formattedAddress: string;
    street: string;
    city: string;   
    state: string;
    zipcode: string;
    country: string;
}

export enum Category {
    FAST_FOOD = 'Fast Food',
    CAFE= 'Cafe',
    FINE_DINING = 'Fine Dining',
}

@Schema({ timestamps: true })
export class Restaurent {

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    email: string;

    @Prop()
    phoneNo: string;

    @Prop()
    address: string;

    @Prop({type: mongoose.Schema.Types.ObjectId ,ref:'Meal'})
    menu? : Meal[]

    @Prop()
    category: Category

    @Prop()
    images?:object[] 

    @Prop({type: Object ,ref:'location'})
    location ? : location

    @Prop({type: mongoose.Schema.Types.ObjectId ,ref:'User'})
    user:User
}

export const RestaurentSchema = SchemaFactory.createForClass(Restaurent)