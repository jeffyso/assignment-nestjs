import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTestConfiguration } from '../../src/database/test.db';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevelController } from './education-level.controller';
import { EducationLevelService } from './education-level.service';
import { EducationLevel } from './entities/education-level.entity';


describe('EducationLevelController', () => {
  let controller: EducationLevelController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [EducationLevelService],
      controllers: [EducationLevelController],
      imports: [
        TypeOrmModule.forFeature([EducationLevel]),
        TypeOrmModule.forRoot(createTestConfiguration([EducationLevel]))
      ]
    }).compile();

    controller = module.get<EducationLevelController>(EducationLevelController);
    await controller.cleanAll()
  });

  afterEach(async () => {
    await controller.cleanAll()
    await module.close()
  })

  describe('when create EducationLevel by method POST', () => {
    it('should the correct result', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "JZO"
      const response = await controller.create(data)
      delete response.data.id
      expect(response).toEqual({
        data: {
          name: "JZO"
        }
      })
    });
  })
  describe('when get EducationLevel by method GET', () => {
    it('should the correct result', async () => {
      const res = await controller.findAll()
      expect(res).toEqual({ data: [] })
    })
  })
  describe('when update EducationLevel by method PUT by ID', () => {
    it('should the correct result', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "JZO"
      const response = await controller.create(data)
      const up = new UpdateEducationLevelDto;
      up.name = "SA"
      const res = await controller.update(response.data.id, up)
      expect(res).toEqual(
        { data: { id: response.data.id, name: 'SA' } }
      )
    })


  })

  describe('when get EducationLevel by method PUT by ID return error', () => {
    it('should return 404', async () => {
      const ID = 999
      const res = async () => { await controller.findOne(ID) }
      expect(res()).rejects.toThrow(NotFoundException)
    })
  })

  describe('when get EducationLevel by method GET by ID', () => {
    it('should the correct result', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "JZO"
      const response = await controller.create(data)
      const res = await controller.findOne(response.data.id)
      expect(res).toEqual(
        { data: { id: response.data.id, name: 'JZO' } }
      )
    })
  })

  describe('when get EducationLevel by method GET by ID return error', () => {
    it('should return 404', async () => {
      const ID = 999
      const res = async () => { await controller.findOne(ID) }
      expect(res()).rejects.toThrow(NotFoundException)
    })
  })

  describe('when delete EducationLevel by method DELETE', () => {
    it('should the correct result', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "JZO"
      const response = await controller.create(data)
      const res = await controller.remove(response.data.id)
      expect(res).toEqual({ data: { raw: [], affected: 1 } })
    })
  })

  describe('when get EducationLevel by method GET by ID return error', () => {
    it('should return 404', async () => {
      const ID = 999
      const res = await controller.remove(ID)
      expect(res).toEqual({ data: { raw: [], affected: 0 } })
    })
  })
});
