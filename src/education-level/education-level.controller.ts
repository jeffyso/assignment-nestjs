import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EducationLevelService } from './education-level.service';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';

@Controller('education-level')
export class EducationLevelController {
  constructor(private readonly educationLevelService: EducationLevelService) { }

  @Post()
  create(@Body() createEducationLevelDto: CreateEducationLevelDto) {
    return this.educationLevelService.create(createEducationLevelDto);
  }

  @Get()
  findAll() {
    return this.educationLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.educationLevelService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateEducationLevelDto: UpdateEducationLevelDto) {
    return this.educationLevelService.update(+id, updateEducationLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.educationLevelService.remove(+id);
  }

  
  cleanAll() {
    return this.educationLevelService.cleanAll();
  }
}
