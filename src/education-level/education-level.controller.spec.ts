import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { EducationLevelController } from './education-level.controller';
import { EducationLevelService } from './education-level.service';
import { educationLevelProviders } from './providers/education-level.provider';
import { EducationLevelRepository } from './repository/education-level.repository';


describe.only('EducationLevelController', () => {
  let controller: EducationLevelController;
  let db: EducationLevelService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationLevelService, ...educationLevelProviders],
      controllers: [EducationLevelController],
      imports: [
        DatabaseModule
      ],
    }).compile();

    controller = module.get<EducationLevelController>(EducationLevelController);
    db = module.get<EducationLevelService>(EducationLevelService);
  });

  afterEach(async () => {
    db.cleanAll()
  })
  describe('Method Post', () => {
    it('should be defined', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "sddsads"
      const response = await controller.create(data)
      expect(controller).toBeDefined();
      delete response.data.id
      expect(response).toEqual({
        data: {
          name: "sddsads"
        }
      })
    });
  })
});
