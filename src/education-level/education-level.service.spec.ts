import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTestConfiguration } from '../../src/database/test.db';
import { DatabaseModule } from '../database/database.module';
import { EducationLevelController } from '../education-level/education-level.controller';
import { EducationLevelService } from '../education-level/education-level.service';
import { EducationLevel } from './entities/education-level.entity';
describe('EducationLevelService', () => {
  let service: EducationLevelService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [EducationLevelService],
      controllers: [EducationLevelController],
      imports: [
        TypeOrmModule.forFeature([EducationLevel]),
        TypeOrmModule.forRoot(createTestConfiguration([EducationLevel]))
      ],
      exports: [
        EducationLevelService,
      ]
    }).compile();

    service = module.get<EducationLevelService>(EducationLevelService);
  });
  afterEach(async () => {
    await module.close();
  })
  describe('test', () => {
    it('should be defined', () => {
      expect(service).toBeDefined;
    })
  })
});
