import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { EducationLevelController } from './education-level.controller';
import { EducationLevelService } from './education-level.service';
import { educationLevelProviders } from './providers/education-level.provider';


describe.only('EducationLevelController', () => {
  let controller: EducationLevelController;
  let db: EducationLevelController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationLevelService, ...educationLevelProviders],
      controllers: [EducationLevelController],
      imports: [
        DatabaseModule,
      ],
    }).compile();

    controller = module.get<EducationLevelController>(EducationLevelController);
    db = module.get<EducationLevelController>(EducationLevelController);
  });

  afterEach(async () => {
    const response = await db.remove.name
    expect(response)
    console.log(response)
  })

  it('should be defined', async () => {

    const a = new CreateEducationLevelDto();
    a.name = "sddsads"

    const response = await controller.create(a)
    expect(controller).toBeDefined();

    delete response.data.id
    expect(response).toEqual({
      data: {
        name: "sddsads"
      }
    })
  });
});
