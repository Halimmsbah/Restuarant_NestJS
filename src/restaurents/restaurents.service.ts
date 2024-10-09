import { Body, HttpException, HttpStatus, Injectable, Param, Put } from '@nestjs/common';
import { Restaurent } from './schemas/restaurent.schema';
import mongoose, { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRestDto } from './dto/createRest.dto';
import { Query } from 'express-serve-static-core';
import { UpdateRestDto } from './dto/updateRest.dto copy';
import { ApiFeatures } from 'src/utils/apiFeatures.utils';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class RestaurentsService {

    constructor(@InjectModel('Restaurent') private readonly Restaurents: Model<Restaurent>) { }

    async findAll(query : Query): Promise<Restaurent[]> {

        const resPerPage = 15;  
        const currentPage = Number(query.page || 1);
        const skip = resPerPage * (currentPage - 1);

        const keyword = query.keyword  ? {
            name: {
                $regex: query.keyword,
                $options: 'i'
            }
        }: {}
        return await this.Restaurents.find({...keyword}).limit(resPerPage).skip(skip)
    }

    async create(@Body() restaurent: CreateRestDto,user:User): Promise<Restaurent> {
        // const location = await ApiFeatures.getRestaurentLocation(restaurent.address)
        // const data =Object.assign(restaurent, {location});
        // return await this.Restaurents.create(data)

        let userExists = await this.Restaurents.findOne({email : restaurent.email});
        if(userExists) throw new HttpException('User already exists', HttpStatus.CONFLICT); 
        await this.Restaurents.insertMany(restaurent);
        const newRestaurent = new this.Restaurents(restaurent);
        return await newRestaurent.save({})
    }

    async findById(id: string): Promise<Restaurent> {

        const validId= mongoose.isValidObjectId(id);
        if (!validId) throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
        const restaurent = await this.Restaurents.findById(id);
        if (!restaurent) throw new Error('Restaurent not found');
        return restaurent
    }

    async update(id: string, restaurent: UpdateRestDto): Promise<Restaurent> {
        return await this.Restaurents.findByIdAndUpdate(id, restaurent, { new: true })
    }

    async delete(id: string): Promise<Restaurent> {
        return await this.Restaurents.findByIdAndDelete(id)
    }

    async uploadFile(id, files) {
        const images= await ApiFeatures.upload(id, files)
        const restaurent = await this.Restaurents.findByIdAndUpdate(id, { images: images as object[] }, { new: true, runValidators: true })
        return restaurent
    }
}
