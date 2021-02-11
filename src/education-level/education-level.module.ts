import { Module } from '@nestjs/common';
import { EducationLevelService } from './education-level.service';
import { EducationLevelController } from './education-level.controller';
import { EducationLevel } from './entities/education-level.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [EducationLevelService],
  controllers: [EducationLevelController],
  imports: [
    TypeOrmModule.forFeature([EducationLevel])
  ],
  exports: [
    EducationLevelService,
  ]
})
export class EducationLevelModule { }
