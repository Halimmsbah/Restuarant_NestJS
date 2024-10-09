import { IsEmail, IsString, IsStrongPassword } from "class-validator"


export class SigninDto {

    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string
}

