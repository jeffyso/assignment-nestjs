import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { EducationLevelController } from '../education-level/education-level.controller';
import { EducationLevelService } from '../education-level/education-level.service';
import { educationLevelProviders } from '../education-level/providers/education-level.provider';

describe.skip('EducationLevelService', () => {
  let service: EducationLevelService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [EducationLevelService, ...educationLevelProviders],
      controllers: [EducationLevelController],
      imports: [
        DatabaseModule,
      ],
    }).compile();

    service = module.get<EducationLevelService>(EducationLevelService);
  });
  afterEach(async () => {
    await module.close();
  })
  afterAll(async () => await module.close())
  it('should be defined', () => {
    expect(service).toBeDefined;
  })
});
