import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CONSTANT } from './../constant/constant'
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevel } from './entities/education-level.entity';
import { EducationLevelRepository } from './repository/education-level.repository';

@Injectable()
export class EducationLevelService {
  constructor(
    @Inject(CONSTANT.EDUCATION_LEVEL_REPOSITORY) private educationLevelRepository: EducationLevelRepository,
  ) { }

  async create(createEducationLevelDto: CreateEducationLevelDto) {
    const dto = new EducationLevel()
    dto.name = createEducationLevelDto.name
    const educationLevel = await this.educationLevelRepository.save(dto)
    return { data: educationLevel }
  }


  async findAll() {
    const educationLevel = await this.educationLevelRepository.find({});
    return { data: educationLevel }
  }

  async findOne(id: number) {
    const educationLevel = await this.educationLevelRepository.findOne(id);
    if (!educationLevel) throw new NotFoundException('');
    return { data: educationLevel };
  }

  async update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
    await this.educationLevelRepository.update({ id }, updateEducationLevelDto)
    const educationLevel = await this.educationLevelRepository.findOne({ id });
    return { data: educationLevel }
  }

  async remove(id: number) {
    const educationLevel = await this.educationLevelRepository.delete({ id })
    return { data: educationLevel };
  }

  async cleanAll() {
    return this.educationLevelRepository.clear()
  }
}