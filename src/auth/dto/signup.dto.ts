/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator"


export class SignupDto {

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email address' })
    email: string

    @IsNotEmpty()
    @IsStrongPassword()
    password: string

    role: string
}
