import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, SetMetadata, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { RestaurentsService } from './restaurents.service';
import { Restaurent } from './schemas/restaurent.schema';
import { CreateRestDto } from './dto/createRest.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { UpdateRestDto } from './dto/updateRest.dto copy';
import {  FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { User } from '../auth/schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';
@Controller('restaurents')
export class RestaurentsController {

    constructor(private readonly restaurentsService: RestaurentsService) { }

    @Get()
    @UseGuards()
    async findAll(@Query() query: ExpressQuery,@Req() req): Promise<Restaurent[]> {
        console.log(req.user);
        return await this.restaurentsService.findAll(query);
    }


    @Post('createRestaurent')
    @SetMetadata('roles', ['admin'])
    async create(  @Body()  restaurent: CreateRestDto, user:User ): Promise<Restaurent> {
        return await this.restaurentsService.create(restaurent,user);
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Restaurent> {
        return await this.restaurentsService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() restaurent: UpdateRestDto ,   user:User): Promise<Restaurent> {
        return await this.restaurentsService.update(id, restaurent);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Restaurent> {
        return await this.restaurentsService.delete(id);
    }


    @Put('upload/:id')  
    @UseInterceptors(FilesInterceptor('files'))
    async uploadFile(@Param('id') id: string, @UploadedFiles() files: Array<Express.Multer.File>) {
        // return await this.restaurentsService.uploadFile(id, files);
    }
}


