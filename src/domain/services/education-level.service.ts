import { Injectable,Inject } from '@nestjs/common';
import { EducationLevel } from '../models/education-level.entity'
import { EducationLevelRepository } from '../repository/educationlevel.repository'
import { CONSTANT } from '../../constant/constant'
import { Repository } from 'typeorm';

@Injectable()
export class EducationLevelService {
    constructor(@Inject(CONSTANT.EDUCATIONLEVEL_REPOSITORY) private educationLevelRepository: Repository<EducationLevel>,){}
    
    findAll():Promise<EducationLevel[]>{
        return this.educationLevelRepository.find({})
    }
}
