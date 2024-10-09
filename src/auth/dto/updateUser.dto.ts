import { IsEmail, IsEnum, IsNumber, IsObject, isObject, IsOptional, IsPassportNumber, IsPhoneNumber, isString, IsString, Max, Min } from "class-validator"
import { UserRoles } from "../schemas/user.schema"


export class UpdateUserDto {

    @IsString()
    @IsOptional()
    name: string

    @IsOptional()
    @IsEmail()
    email: string

    @IsOptional()
    @IsString()
    password: string

    @IsOptional()
    @IsEnum(UserRoles)
    role: UserRoles
}