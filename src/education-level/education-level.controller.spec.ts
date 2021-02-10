import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from 'src/database/database.provider';
import { DatabaseModule } from '../database/database.module';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { EducationLevelController } from './education-level.controller';
import { EducationLevelService } from './education-level.service';
import { educationLevelProviders } from './providers/education-level.provider';
import { EducationLevelRepository } from './repository/education-level.repository';


describe('EducationLevelController', () => {
  let controller: EducationLevelController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [EducationLevelService, ...educationLevelProviders],
      controllers: [EducationLevelController],
      imports: [
        DatabaseModule
      ],
    }).compile();

    controller = module.get<EducationLevelController>(EducationLevelController);
  });

  afterEach(async () => {
    await controller.cleanAll()
    await module.close();
  })

  afterAll(() => module.close())

  describe('when create EducationLevel by method POST', () => {
    it('should the correct result', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "JZO"
      const response = await controller.create(data)
      expect(controller).toBeDefined();
      delete response.data.id
      expect(response).toEqual({
        data: {
          name: "JZO"
        }
      })
    });
  })
});
