import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EducationLevelModule } from './education-level/education-level.module';

@Module({
  imports: [EducationLevelModule,DatabaseModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
