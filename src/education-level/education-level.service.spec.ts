import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { EducationLevelController } from '../education-level/education-level.controller';
import { EducationLevelService } from '../education-level/education-level.service';
import { educationLevelProviders } from '../education-level/providers/education-level.provider';

describe('EducationLevelService', () => {
  let service: EducationLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationLevelService, ...educationLevelProviders],
      controllers: [EducationLevelController],
      imports: [
        DatabaseModule,
      ],
    }).compile();

    service = module.get<EducationLevelService>(EducationLevelService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined;
  })
});
