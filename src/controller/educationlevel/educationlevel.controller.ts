import { Controller, Get } from '@nestjs/common';
import { EducationLevelService } from '../../domain/services/education-level.service'

@Controller('educationlevel')
export class EducationlevelController {
  constructor(private educationLevelService: EducationLevelService) { }

  @Get()
  findAll() {
    return this.educationLevelService.findAll;
  }
}
