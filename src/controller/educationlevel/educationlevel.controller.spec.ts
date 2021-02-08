import { Test, TestingModule } from '@nestjs/testing';
import { EducationlevelController } from './educationlevel.controller';

describe('EducationlevelController', () => {
  let controller: EducationlevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationlevelController],
    }).compile();

    controller = module.get<EducationlevelController>(EducationlevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
