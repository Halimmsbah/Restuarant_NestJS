import { IsEmail, IsEnum, IsNumber, IsObject, isObject, IsOptional, IsPassportNumber, IsPhoneNumber, IsString, Max, Min } from "class-validator"
import { isValidObjectId } from "mongoose"
import { Category } from "../schemas/restaurent.schema"


export class UpdateRestDto {

    @IsString()
    @IsOptional()
    name: string

    @IsOptional()
    @IsString()
    description: string

    @IsOptional()
    @IsEmail()
    email: string

    @IsOptional()
    @IsPhoneNumber('EG')
    phoneNo: number

    @IsOptional()
    @IsString()
    address: string

    @IsOptional()
    @IsEnum(Category)
    category: Category
}