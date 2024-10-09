import { IsEmail, IsEnum, IsNumber, IsObject, isObject, IsPassportNumber, IsPhoneNumber, IsString, Max, Min } from "class-validator"
import { isValidObjectId } from "mongoose"
import { Category } from "../schemas/restaurent.schema"
import { User } from "../../auth/schemas/user.schema"


export class CreateRestDto {

    @IsString()
    name: string

    @IsString()
    description: string

    @IsEmail()
    email: string

    @IsPhoneNumber('EG')
    phoneNo: number

    @IsString()
    address: string

    
    @IsEnum(Category)
    category: Category

    user:User
}