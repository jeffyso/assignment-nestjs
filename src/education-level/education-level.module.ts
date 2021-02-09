import { Module } from '@nestjs/common';
import { EducationLevelService } from './education-level.service';
import { EducationLevelController } from './education-level.controller';
import { educationLevelProviders } from './providers/education-level.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [EducationLevelService, ...educationLevelProviders],
  controllers: [EducationLevelController],
  imports: [
    DatabaseModule,
  ],
  exports: [
    EducationLevelService,
  ]
})
export class EducationLevelModule { }
