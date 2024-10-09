import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { User, UserRoles } from './schemas/user.schema';
import { SigninDto } from './dto/signin.dto';
import { AuthGuard } from './auth.guard';
import { UpdateUserDto } from './dto/updateUser.dto';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorators';

@Controller('auth')
export class AuthController {
    constructor(private readonly usersService: AuthService) {}

    @Post('signup') 
    async signUp( @Body() body:SignupDto) {        
        return await this.usersService.signUp(body);
    }

    @Get()
    @UseGuards(AuthGuard,RolesGuard)
    @Roles(UserRoles.ADMIN)
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }


    @Post('signin')
    async signin( @Body() body:SigninDto) {
        return await this.usersService.signin(body);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<User> {
        return await this.usersService.findById(id);
    }


    @Put(':id')
    @UseGuards(AuthGuard,RolesGuard)
    @Roles(UserRoles.ADMIN)
    async update(@Param('id') id: string, @Body() user : UpdateUserDto): Promise<User> {
        return await this.usersService.update(id, user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard,RolesGuard)
    @Roles(UserRoles.ADMIN)
    async delete(@Param('id') id: string): Promise<User> {
        return await this.usersService.delete(id);
    }
}