import { User } from "src/auth/schemas/user.schema";
import { Restaurent } from "src/restaurents/schemas/restaurent.schema";
import { Category } from "../schemas/meal.schema";
import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateMealDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;
    
    
    @IsString()
    @IsNotEmpty()
    readonly description: string;    
    
    
    @IsNumber()
    @IsNotEmpty()
    readonly price: number;
    
    
    @IsNotEmpty()
    @IsEnum(Category, { message: 'invalid category' })
    readonly Category: Category
    
    @IsString()
    @IsNotEmpty()    
    readonly restaurent: Restaurent
    
    @IsEmpty({ message: 'user cannot be empty' })
    readonly user: User
}