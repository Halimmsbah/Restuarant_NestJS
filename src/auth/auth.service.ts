import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import mongoose, { Model } from "mongoose";
import { JwtService } from "@nestjs/jwt";
import { SignupDto } from "./dto/signup.dto";
import { SigninDto } from "./dto/signin.dto";
import * as bcrypt from 'bcrypt'
import { UpdateUserDto } from "./dto/updateUser.dto";



@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel:  Model<User> ,private _jwtService: JwtService) {}

    async signUp( @Body() body:SignupDto) {
        let userExists = await this.userModel.findOne({email : body.email});
        if(userExists) throw new HttpException('User already exists', HttpStatus.CONFLICT); 
        await this.userModel.insertMany(body);

        body.password = bcrypt.hashSync(body.password, 10);
        return {message : 'Successfully signed up',body};  
    }
    async signin( @Body() body:SigninDto) {
        let user = await this.userModel.findOne({email : body.email});
        if(!(user &&bcrypt.compare(body.password, user.password))) throw new HttpException('Invalid credentials', HttpStatus.NOT_FOUND);
        let access_token= await this._jwtService.sign({name: user.name},{"secret":"key"});

        return {message : 'Successfully signed in',"access_token":access_token};
    }
    async findAll(): Promise<User[]> {
        return await this.userModel.find(); 
    }


    async findById(id: string): Promise<User> {

        const validId= mongoose.isValidObjectId(id);
        if (!validId) throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
        const user = await this.userModel.findById(id);
        if (!user) throw new Error('user not found');
        return user
    }

    async update(id: string, user: UpdateUserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true })
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id)
    }

}
