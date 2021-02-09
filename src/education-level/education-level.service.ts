import { Injectable ,Inject ,NotFoundException} from '@nestjs/common';
import { CONSTANT } from 'src/constant/constant';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevel } from './entities/education-level.entity';
import { EducationLevelRepository } from './repository/education-level.repository';

@Injectable()
export class EducationLevelService {
  constructor(
    @Inject(CONSTANT.EDUCATION_LEVEL_REPOSITORY) private educationLevelRepository: EducationLevelRepository,
){}

  async create(createEducationLevelDto:CreateEducationLevelDto) {
    const educationLevel = new EducationLevel()
    educationLevel.name = createEducationLevelDto.name
    await this.educationLevelRepository.save(createEducationLevelDto)
    return { status:200, error:undefined, data:educationLevel} 
  }

  
findAll(): Promise<EducationLevel[]> {
    return this.educationLevelRepository.find({ });
}

async findOne(id: number): Promise<EducationLevel> {
  const educationLevel = await this.educationLevelRepository.findOne(id);
  if (!educationLevel) throw new NotFoundException();
  return educationLevel;
}

  async update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
    await this.educationLevelRepository.update({id},updateEducationLevelDto)
    return this.educationLevelRepository.findOne({id});
  }

  async remove(id: number) {
    await this.educationLevelRepository.delete({id}) 
    return 'fuck';
  }
}
