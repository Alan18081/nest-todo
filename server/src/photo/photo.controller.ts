import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import {PhotoService} from './photo.service';
import { IPhoto } from './photo.interface';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
  @Get()
  async findAll(): Promise<any> {
    return await this.photoService.findAll();
  }

  @Post()
  async createPhoto(@Body() photo: IPhoto): Promise<any> {
    return await this.photoService.createPhoto(photo);
  }

  @Get(':id')
  async findById(@Param() {id}): Promise<any> {
    return await this.photoService.findById(id);
  }
}
