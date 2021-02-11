import { NestFactory } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EducationLevelModule } from './education-level/education-level.module';

describe('AppController', () => {
  let appController: AppController;
  let module: TestingModule;
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [EducationLevelModule,DatabaseModule,AppModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  afterEach(async () => {
    await module.close();
  })

  afterAll(async () => module.close())

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

