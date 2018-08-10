import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { Photo } from './photo.entity';
import { IPhoto } from './photo.interface';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>
  ) {}
  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
  async createPhoto(photo: IPhoto): Promise<Photo> {
    const newPhoto = new Photo();
    newPhoto.name = photo.name;
    newPhoto.description = photo.description || '';
    newPhoto.filename = photo.filename;
    newPhoto.views = 1;
    newPhoto.isPublished = true;
    await this.photoRepository.save(newPhoto);
    return newPhoto;
  }

  async findById(id: string): Promise<Photo> {
    return await this.photoRepository.findOne(id);
  }
}